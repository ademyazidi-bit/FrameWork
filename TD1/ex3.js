const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const [p1,p2] = pays;
console.log(p1);
console.log(p2);
const [, ,  p3] = pays
console.log(p3);
const [destinationPrincipale , ...autresPays] = pays;
console.log(destinationPrincipale);
console.log(autresPays);

const voyage = {
 destination: "Bali",
 prix: 1800,
 duree: 10,
 transport: "Avion",
 hotel: "5 étoiles"
};

const {destination , prix } = voyage;
console.log(destination);
console.log(prix);
const {destination : ville } = voyage;
console.log(ville);
const { prix : p = 50 , duree = 5} = voyage;
 function afficherVoyage({destination , prix , duree , transport , hotel}){
    console.log(destination);
    console.log(prix);
    console.log(duree);
    console.log(transport);
    console.log(hotel);
    
}
afficherVoyage({
    destination: "rio ",
    prix: 2500,
    duree: 14,
    transport: "Train",
    hotel: "4 étoiles"
})
