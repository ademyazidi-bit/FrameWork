function Budget() {
    const budget = 1500;
    let message;
    if (budget >= 2000) {
        message = "Voyage premium";

}
    else if (budget >= 1000) {
        message = "Voyage économique";
    }
    else {
        message = "Budget insuffisant";
    }
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}
export default Budget;