import { useState } from "react";
function formulaire(){
    const[nom , setNom]= useState("");
    const[age , setAge]= useState("");

  function handleSubmit()
  {
    e.preventDefault();
    console.log(e)
    alert("Bonjour"+nom + ", vous avez"+ age +"ans");
    setNom("");
    setAge("");
  }
  return(
    <div>
        <h2> Formulaire d'inscription </h2>
        <form onSubmit={handleSubmit}>
            <label> Nom:</label>
            <input type="text"
                    value={nom}
                    onChange={(e)=> {setNom(e.target.value);console.log(e)}} 
            /> <br /> <br />
            <label> Age:</label>
            <input type="number"
                    value={age}
                    onChange={(e)=> {setAge(e.target.value);console.log(e)}} 
            /> <br /> <br />
            <button type="submit"> Valider</button>
        </form>
    </div>
  )
}
export default formulaire;
//submit faire l'envoie de la page et le charger et dans react on veut stoper le chargement 
// e.target.value pour la récuperation 