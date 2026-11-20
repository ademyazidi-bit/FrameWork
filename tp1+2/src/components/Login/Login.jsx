function Login() {






function handleSubmit(e) {
    e.preventDefault();
    let newError={};
    if (!email.trim()) {
        newError.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        newError.email = "Email is invalid";    

    }
    if (!password.trim()) {
        newError.password = "veuillez entrer votre mot de passe";
    }
    else if (password.length < 8) {
        

}