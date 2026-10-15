const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
let ville = destinations.forEach(ville=>console.log(ville.ville));

let noms = destinations.map(ville=>ville.ville);
console.log(noms);
let prix = destinations.filter(p=>p.prix< 1500);
console.log(prix);
let id = destinations.find(i=>i.id == 3);
console.log(id);
let pos = destinations.findIndex(p=>p.ville == "Tokyo");
console.log("la position de tokyo est "+pos);
let des = destinations.some(d=>d.disponible);
if (des == true){
    console.log("il existe au moins une destination disponible .")
}
let prix1 = destinations.every(p=> p.prix> 0 );
if (prix1 == true){
    console.log("toutes les destinations ont un prix supérieur à zéro . ")
}
let tot = destinations.reduce((total , des) => total + des.prix ,0);
console.log(tot)