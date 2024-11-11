import {useState} from "react";


const SignUp = () => {
    const [SignUpInput, setSignUpInput] = useState({
        username: "",
        password: "",
        email: "",
        genderType: "",
        birthDate: "",
        region: "",
    });
}

 export default SignUp;