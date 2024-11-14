import'./index.css'
import logo from '../image/logo entreprise.jpg'
import contactimg from '../image/courriel-de-contact.png'
import { Link } from "react-scroll"
import menu from '../image/menu.png'
import { useState } from 'react'

function Navbar () {
    const [showmenu, setshowmenu] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="Menu">
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="Menulistitem">Accueil</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className="Menulistitem">Compétences</Link>
                <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className="Menulistitem">Projets</Link>
                <Link activeClass="active" to="contact" spy={true} offset={-50} duration={500} className="Menulistitem">Contact</Link>
            </div>
            <button className="Menubutton" onClick={() =>{
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contactimg} alt="" className="Menuimg"/>Contactez moi</button>

            <img src={menu} alt="menu" className="mobmenu" onClick={()=>setshowmenu(!showmenu)}/>
            <div className="navMenu" style={{display : showmenu? "flex":"none"}}>
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowmenu(!showmenu)}>Accueil</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(!showmenu)}>Compétences</Link>
                <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(!showmenu)}>Projets</Link>
                <Link activeClass="active" to="contact" spy={true} offset={-50} duration={500} className="listitem"onClick={()=>setshowmenu(!showmenu)}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;