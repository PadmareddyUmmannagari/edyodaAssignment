
import './index.css';
const Header=()=>{
    return (
        <nav className="top">

        <div className="section">
           <h1 className="main-heading">EDYODA</h1>
           <div className="menu">
                <p className="heading">Courses</p>
                <i className="fa-solid fa-angle-down search-icon"></i>
           </div>
           <div className="menu">
                <p className="heading">Programs</p>
                <i className="fa-solid fa-angle-down search-icon"></i>
           </div>
           
        </div>

        <div className="section">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <p>Log in</p>
        <button className="join-btn">
            JOIN NOW
        </button>
        </div>

        </nav>
    )
}

export default Header;