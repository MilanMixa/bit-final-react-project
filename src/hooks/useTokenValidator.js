
const useTokenValidator = () => {

    const validate = (response, setIsLoggedIn) => {
        if (response === "jwt expired") {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
        }
    }

    return validate;
}

export default useTokenValidator;