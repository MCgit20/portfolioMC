import './index.css'
import lkdin from '../image/linkedin.png'
import gthub from '../image/github.png'

function Contact () {
    return (
        <div id="contact">
            <h1 className="pagetitle">Contactez moi</h1>
            <span className="contactdesc">Veuillez remplir le formulaire ci-dessous pour discuter de toute opportunité de travail</span>
            <form className="contactform">
                <input type="text" className="name" placeholder="Votre nom"></input>
                <input type="email" className="email" placeholder="Votre mail"></input>
                <textarea className="message" name="message" rows="5" placeholder="Votre message"></textarea>
                <button type="submit" value="Send" className="submitbtn">Envoyer</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/make-chen-604151254/"><img src={lkdin} alt="linkedIn" className="link"/></a>
                    <a href="https://github.com/MCgit20"><img src={gthub} alt="github" className="link"/></a>
                </div>
             </form>
        </div>
    )
}

export default Contact;