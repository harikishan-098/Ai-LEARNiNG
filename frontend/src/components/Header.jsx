function Header({ onHome, onAbout }) {
    return (
        <header className="header">
            <div className="header-content">

                <div className="logo">
                    <span className="logo-icon">🧠</span>
                    <h1>AI Learn &amp; Visualize</h1>
                </div>

                <nav className="nav">

                    <a
                        href="#home-section"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            onHome?.();
                            document.getElementById("home-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Home
                    </a>

                    <a
                        href="#learn-section"
                        className="nav-link"
                    >
                        Learn
                    </a>

                    <a
                        href="#practice-section"
                        className="nav-link"
                    >
                        Practice
                    </a>

                    <a
                        href="#about"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            onAbout?.();
                            document.getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        About
                    </a>

                </nav>
            </div>
        </header>
    );
}

export default Header;