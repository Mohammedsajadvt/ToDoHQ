import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ3nTvUHKAqylSr2eBDKzRwCwz0nUNQvY",
  authDomain: "todohq-63d63.firebaseapp.com",
  projectId: "todohq-63d63",
  storageBucket: "todohq-63d63.firebasestorage.app",
  messagingSenderId: "642346275517",
  appId: "1:642346275517:web:222f66313bf4276f375dd4",
  measurementId: "G-9N6PM2VPXF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

