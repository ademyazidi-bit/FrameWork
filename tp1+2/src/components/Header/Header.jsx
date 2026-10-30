import style from "./Header.module.css";   
function Header() {
    return (
        <header className={style.header}>
            <h1>Travel agency</h1>
            <nav className={style.nav}>
                <a href="#">Accueil</a>
                <a href="#">Destinations</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}
export default Header;
