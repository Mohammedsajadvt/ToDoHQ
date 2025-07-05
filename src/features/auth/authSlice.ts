import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import type { AuthState, LoginCredentials, RegisterCredentials, AuthResponse } from "../../types/auth";


const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};


export const loginUser = createAsyncThunk<AuthResponse, LoginCredentials>(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            return {
                token,
                user: {
                    id: userCredential.user.uid,
                    email: userCredential.user.email!,
                    username: userCredential.user.displayName || "Unknown",
                },
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


export const registerUser = createAsyncThunk<AuthResponse, RegisterCredentials>(
    "auth/registerUser",
    async ({ email, password, username }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username });

            const uid = userCredential.user.uid;
            const userEmail = userCredential.user.email!;
            const token = await userCredential.user.getIdToken();

            await setDoc(doc(db, "users", uid), {
                id: uid,
                email: userEmail,
                username: username,
                createdAt: new Date().toISOString(),
            });
            return {
                token,
                user: {
                    id: userCredential.user.uid,
                    email: userCredential.user.email!,
                    username: username,
                },
            }
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user.username;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user.username;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.user = action.payload as string;
            });
    },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;