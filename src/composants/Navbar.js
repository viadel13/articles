import {Link} from 'react-router-dom'

function Navbar() {
    
    const handleClick = () =>{
        localStorage.clear();
        window.location.reload();
    }

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">DV-ARTICLE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Accueil</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/Ecrire">Ecrire</Link></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" onClick={handleClick}>
                            Deconnexion
                            {/* <span className="badge bg-dark text-white ms-1 rounded-pill">0</span> */}
                            <i className="bi bi-box-arrow-right ms-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
