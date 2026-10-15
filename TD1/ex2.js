const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];
let conf = reservations.filter(c=>c.statut == "Confirmée");
console.log(conf);
let noms = reservations.map(n=>n.client);
console.log(noms);
let res = reservations.find(r=>r.numero == 103);
console.log(res);
let mon = reservations.reduce((total , montant) => total + montant.montant,0);
console.log(mon);
let resconf = reservations.every(r=>r.statut == "Confirmée" );
console.log(resconf);
if (resconf){
    console.log("toutes les réservations sont confirmées")
}
else {
    console.log(" pas toutes les réservations sont confirmées.")
}

const clientsVoyages = reservations.map(reservation => ({
    client: reservation.client,
    voyage: reservation.destination
}));

console.log(clientsVoyages);
