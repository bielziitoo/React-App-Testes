function Header() {
    return(
        <header className="headerRoot">
            <h1 className="nome-pagina">Portfólio</h1>
            <nav className="nav-bar">
                <ul><a href="#" className="as">Home</a></ul>
                <ul><a href="#" className="as">About</a></ul>
                <ul><a href="#" className="as">Contact</a></ul>
                <ul><a href="#" className="as">Something Else</a></ul>
            </nav>
        </header>
    );
}

export default Header