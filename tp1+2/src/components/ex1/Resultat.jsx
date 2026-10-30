import "./resultat.css";
function Resultat() {
  const moyenne = 14;
  let style;
  let message;
  let classN;
  if (moyenne >= 10) {
    //style = {       
     // color: "green",
     // backgroundColor: "lightgreen",
    //};
    message = "Admis";
    classN = "admis";
  } else {
    //style = {
     // color: "red",
      //backgroundColor: "lightcoral",
    //};
    message = "Refusé";
    classN = "refuse";
  }

  return (
    <div className={classN}>
      <p>Moyenne = {moyenne}</p>
      <p>{message}</p>
    </div>
  );
}

export default Resultat;