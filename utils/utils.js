import { v4 } from "uuid"

export {isMatchingPassword, isExistingSupplier, isValidEmailFormat, isValidPasswordFormat, generateActivationToken}

// Form Validation Functions
const isMatchingPassword = async (pw1, pw2) =>{
    return pw1 === pw2
}

const isExistingSupplier = async (email) => {
    const data = await fetch(`/api/supplier/${email}/existing`);
    const response = await data.json()
    return response
}

const isValidEmailFormat = async (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const isValidPasswordFormat = async (password) => {

    // Must contain:
    // min. 8 Characters, min. one lowercase and one uppercase character, min. one number

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}


// Token Generation
const generateActivationToken = async () => {
    try {
        const token = `${v4()}${v4()}`
        return token
    } catch (error) {
        console.log("Failed to generate activation token.", error)
    }
}