function Header() {
    return (
        <header className="section station-header">
            <h1 className="station-name">DEACON SHAM</h1>
            <nav className="station-lines">
                <a href="#experience" className="ttc-badge" style={{ backgroundColor: '#fccc0a', color: '#0a0a0a' }}>1</a>
                <a href="#projects" className="ttc-badge" style={{ backgroundColor: '#00933c' }}>2</a>
                <a href="#connect" className="ttc-badge" style={{ backgroundColor: '#b933ad' }}>4</a>
            </nav>
        </header>
    )
}

export default Header