import React from "react";

export const required = (value: string) => {
  if (!value) {
    return <div className="text-red-500 text-sm">This field is required!</div>;
  }
};

export const validEmail = (value: string) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(value)) {
    return <div className="text-red-500 text-sm">Invalid email format</div>;
  }
};

export const validPassword = (value: string) => {
  if (value.length < 6) {
    return <div className="text-red-500 text-sm">Password must be at least 6 characters</div>;
  }
};

export const validUsername = (value: string) => {
  if (value.length < 3) {
    return <div className="text-red-500 text-sm">Username must be at least 3 characters</div>;
  }
};
