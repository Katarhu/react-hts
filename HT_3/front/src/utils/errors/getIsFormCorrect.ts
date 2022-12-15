const getIsFormValid = (...isValidInput: boolean[]) => {
    return isValidInput.every((isValid) => isValid);
}

export default getIsFormValid;