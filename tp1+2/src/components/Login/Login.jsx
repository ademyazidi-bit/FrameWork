import {useState} from "react";

function Login(){
    const[email,setEmail] =useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState({});
     function handleSubmit(e){
        e.preventDefault();
        let newError = {};
        if(!email.trim()){
            newError.email = "Veuillez saisir votre email";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            newError.email = "adresse email invalide";
        }
        if(!password.trim()){
            newError.password = "Veuillez saisir votre mot de passe";
        }
        else if(password.length < 8){
            newError.password = "Le mot de passe doit contenir au moins 8 caractères";
        }
        else if(!/[A-Z]/.test(password)){
            newError.password = "Le mot de passe doit contenir au moins une lettre majuscule";
     }
     else if(!/[0-9]/.test(password)){
        newError.password = "Le mot de passe doit contenir au moins un chiffre";
     }
     else if(!/[^A-Za-z0-9]/.test(password)){
        newError.password = "Le mot de passe doit contenir au moins un caractère spécial";
     }
     setError(newError);
     console.log(newError);
    if (Object.keys(newError).length === 0) {
        alert("Connexion réussie");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Choisir votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <span>{error.email}</span>}

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <span>{error.password}</span>}

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;