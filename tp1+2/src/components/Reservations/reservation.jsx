//PopUp comme alert
//a chaque ou je doit cliquer sur valider on va reinitiliser nos erreur 
// aussi la verification des champs faite dans le buuton
//setErreur si elle est vide etenvoyer le formulaire sinon  on va arreter 
// le chargement avec prevent et on affiche les erreurs
// les errurs sont afficher seulement s'il y a une erreur 

import {useState} from "react";
import styles from "../Reservations/reservation.module.css";

function Reservation(){
    const [nom, setNom] = useState("");
     const [email, setEmail] = useState("");
      const [telephone, setTelephone] = useState("");
       const [destination, setDestination] = useState("");
     const [dateDepart, setDateDepart] = useState("");
      const [nbVoyageurs, setNbVoyageurs] = useState("");
       const [typeVoyage, setTypeVoyage] = useState("");
        const [demandes, setDemandes] = useState("");

         const [reservation, setReservation] = useState(null);
          const [erreurs, setErreurs] = useState({});
         const [showPopup, setShowPopup] = useState(false);

  function effacerErreur(champ){
    setErreurs((prev)=> {
        const nouvellesErreurs = {...prev};
        delete nouvellesErreurs [champ];
        return nouvellesErreurs;
    });
  }

    function handleSubmit(e) {
    e.preventDefault();

    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Le nom est obligatoire";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire";
    }

    setErreurs(nouvellesErreurs);

    if (Object.keys(nouvellesErreurs).length === 0) {
      setReservation({
        nom,
        email,
        telephone,
        destination,
        dateDepart,
        nbVoyageurs,
        typeVoyage,
        demandes
      });

      setShowPopup(true);
    }
  }


  return (
    <section className={styles.container}>
      <h2>Réservez votre voyage</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label>Nom et prénom :</label>
          <input
            type="text"
            className={erreurs.nom ? styles.inputError : ""}
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
              effacerErreur("nom");
            }}
            placeholder="Votre nom et prénom"
          />
          {erreurs.nom && (
            <span className={styles.errorMessage}>{erreurs.nom}</span>
          )}
        </div>
         <div className={styles.formGroup}>
          <label> @Email :</label>
          <input
            type="email"
            className={erreurs.email ? styles.inputError : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              effacerErreur("email");
            }}
            placeholder="Votre email"
          />
          {erreurs.email && (
            <span className={styles.errorMessage}>{erreurs.email}</span>
          )}
        </div>
      </form>
    </section>
  );
}
export default Reservation;