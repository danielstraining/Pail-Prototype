export {isMatchingPassword, isExistingSupplier, isValidEmailFormat, isValidPasswordFormat, hoursElapsed}

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

const hoursElapsed = async (timestamp) => {
    const currentTime = Date.now();

    const secondsDifference = Math.abs(currentTime - timestamp);

    const hoursDifference = secondsDifference / (1000 * 60 * 60);

    return hoursDifference;
}