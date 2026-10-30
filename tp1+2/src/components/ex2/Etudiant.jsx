function Edudiant() {
    const nom = "Ahmed"
    const prenom = "Ali"
    const age = 20
    const filiere = "Informatique"
    return (
    <div>
        <p>Nom : {nom}</p>
        <p>Prenom : {prenom}</p>
        <p>Age : {age}</p>
        <p>Filiere : {filiere}</p>
        <h2>Nom complet : {prenom} {nom}</h2>

    </div>     ) 
}
export default Edudiant;
