import {useState} from "react";


const SignUpPage = () => {
    const [signUpInput, setSignUpInput] = useState({
        username: "",
        password: "",
        email: "",
        genderType: "",
        birthDate: "",
        region: "",
    });
}

 export default SignUpPage;