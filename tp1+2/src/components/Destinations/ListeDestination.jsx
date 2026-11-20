
/*function ListeDestination() {
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Notre liste de distinations
      </h1>

      <div className={styles.ListeDestination}>

        <Destination
          image={Santorini}
          nom="Santorini"
          pays="Grèce"
          description="Découvrez les magnifiques paysages des îles grecques."
          prix="1200"
        />

        <Destination
          image={Bali}
          nom="Bali"
          pays="Indonésie"
          description="Profitez des plages paradisiaques de Bali."
          prix="1800"
        />

        <Destination
          image={Rome}
          nom="Rome"
          pays="Italie"
          description="Découvrez les monuments historiques de Rome."
          prix="950"
        />

      </div>
    </section>
  );
}
export default ListeDestination;
*/

import Destination from "../Destination/Destination";
import styles from "./ListeDestination.module.css";
import DestinationListe from "../../Data/DestinationListe"

function ListeDestination() {
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.ListeDestination}>

        {DestinationListe.map((destination) =>
       (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}

      </div>

    </section>
  );
}
export default ListeDestination;
// setNom nous pemet de changer la variable c'est a dire On a dans un formulaire au debut le nom est vide et par la suite elle va contient une chose 