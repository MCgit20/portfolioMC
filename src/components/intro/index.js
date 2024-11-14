import './index.css'
import photo from '../image/phto.png'
import btnrct from '../image/icons8-recrutement-70.png'
import { Link } from "react-scroll"

function Intro () {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="bonjour">Bonjour,</span>
                <span className="intro">Je suis <span className="prénom">CHEN Make</span> <br />Étudiant en 1er année de <br></br>Prépa Bachelor Informatique <br></br>& Développement </span>
                <p className="intropara">Je suis passionné par les nouvelles technologies je souhaite de mettre <br/>en pratique mes compétences et mes connaissances acquises au cours de ma formation.</p>
                <Link><button className="button"><img src={btnrct} alt="recrutemoi" className="btnrct"/>Recrute moi</button></Link>
            </div>
            <img src={photo} alt="Propile" className="photo"/>
        </section>
    )
}
export default Intro;