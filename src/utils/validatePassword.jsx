const validatePassword = (password, reEnteredPassword) => {
    if (password.length < 8) {
        return { isValid: false, message: "Password must be at least 8 characters long." };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { isValid: false, message: "Password must contain at least one symbol." };
    }
    if (!/\d/.test(password)) {
        return { isValid: false, message: "Password must contain at least one number." };
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: "Password must contain at least one uppercase letter." };
    }
    if (password !== reEnteredPassword) {
        return { isValid: false, message: "Passwords do not match." };
    }
    return { isValid: true, message: "" };
};

export default validatePassword;