
import { useState } from 'react';

function Formulaire() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    function handelSubmit(e) {
        e.preventDefault();

        console.log(e);

        alert("Bonjour " + nom + " " + prenom + " vous avez " + age + " ans");

        setNom('');
        setPrenom('');
        setAge('');
    }

    return (
        <div>
            <h2>Formulaire d'inscription</h2>

            <form onSubmit={handelSubmit}>

                <label>Nom :</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />

                <br /><br />

                <label>Prénom :</label>
                <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                />

                <br /><br />

                <label>Âge :</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">Valider</button>

            </form>
        </div>
    );
}

export default Formulaire;
