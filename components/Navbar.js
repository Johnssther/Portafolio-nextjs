import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">John Alejandro </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

