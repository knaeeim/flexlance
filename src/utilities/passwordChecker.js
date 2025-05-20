import toast from "react-hot-toast";

export const isPasswordValid = (password) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    if (password.length < minLength) {
        toast.error("Password must be at least 6 characters long");
        return false;
    }

    if (!hasLowerCase.test(password)) {
        toast.error("Password must contain at least one lowercase letter");
        return false;
    }

    if (!hasUpperCase.test(password)) {
        toast.error("Password must contain at least one uppercase letter");
        return false;
    }

    // Check if password meets all criteria
    return (
        password.length >= minLength &&
        hasUpperCase.test(password) &&
        hasLowerCase.test(password)
    );
};
