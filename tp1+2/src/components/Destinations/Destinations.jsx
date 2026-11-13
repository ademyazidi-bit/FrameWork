import Destination from "../Destination/Destination";

import santorin from "../../assets/santorini.jpg";
import bali from "../../assets/bali.jpg";
import rome from "../../assets/Rome.jpg";

import styles from "./Destinations.module.css";

function Destinations() {
  const destinationList = [
    {
      id: 1,
       image:santorin,
          nom:"Santorin",
          pays:"Grèce",
          description:"Découvrez les magnifiques paysages des îles grecques.",
          prix:"1200"},

    {
      id : 2,
      image:bali,
          nom:"Bali",
          pays:"Indonésie",
          description:"Profitez des plages paradisiaques de Bali.",
          prix:"1800"
    }
    ,
    {
      id : 3,
      image:rome,
          nom:"Rome",
          pays:"Italie",
          description:"Découvrez les monuments historiques de Rome.",
          prix:"950"
    }

  ];
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>
      <div className={styles.destinations}>
        {destinationList.map((d) => (
          <Destination
            key={d.id}
            image={d.image}
            nom={d.nom}
            pays={d.pays}
            description={d.description}
            prix={d.prix}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;