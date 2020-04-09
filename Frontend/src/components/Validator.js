//Required field validator
export const requiredValidator = (value, field, errRef) => {
    value === "" ? errRef.innerHTML = field + " is required.!" : errRef.innerHTML = "";
}

//Email field validator
export const emailValidator = (value, field, errRef) => {
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ?
        errRef.innerHTML = ""
        :
        errRef.innerHTML = field + " is not valid.!"
}

//Minimum length field validator
export const lengthValidator = (value, field, errRef) => {
    value.length < 6 ? errRef.innerHTML = field + " must be atleast 6 character.!" : errRef.innerHTML = "";
}

//Password and confirm password field validator
export const cpasswordValidator = (value1, value2, field, errRef) => {
    value1 !== value2 ? errRef.innerHTML = field + " is not same as password.!" : errRef.innerHTML = "";
}
