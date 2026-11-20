/*import styles from "./destination.module.css";
import Santorini from "../../assets/Santorini.png" ;

function Destination() {
    return(
        <div className={styles.destination}>
            <img className={styles.image} src={Santorini} alt="Santorini" />
            <h2 className={styles.titre} > Santorini</h2>
            <p className={styles.pays}>Gréce</p>
            <p className={styles.description}> Découvrez les magnifiques paysage des iles grecques</p>
            <h3 className={styles.prix}>1200</h3>
        </div>
    );
}
export default Destination;
*/


import styles from "./Destination.module.css";
import {useState} from "react";

function Destination (props) {
    const[afficher,setAfficher]=useState(false);
    function genererDetail(){
        setAfficher(!afficher);
    }
    return(
        <div className={styles.destination}>
            <img
                className={styles.image}
                src={props.image}
                alt={props.nom}
            />
            <div className={styles.content}>
            <h2 className={styles.titre}>{props.nom}</h2>
            <h3 className={styles.pays}>{props.pays}</h3>
            {
                afficher && <p className={styles.description}> {props.description} </p>
            }
           
            <h3 className={styles.prix}> {props.prix} DT </h3>
            <button onClick={genererDetail}>
                {afficher? "Cacher Details" : "Afficher Deatils"}
            </button>
            </div>
        </div>
        
    )
}

export default Destination;
