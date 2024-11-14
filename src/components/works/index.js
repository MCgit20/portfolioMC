import './index.css'
import image1 from "../image/pendu.jpg"
import image2 from "../image/zombie.jpg"
import image3 from "../image/restaurant.png"
import image4 from "../image/inscription.png"

function Works () {
    return (
        <section id="works">
            <h2 className="worktitle">Mes projets</h2>
            <span className="workdesc">Voici mes projet que j'ai déjà réalisé : pendue zombie web inscription</span>
            <br></br>
            <div className="workimgs">
                <img src={image1} alt="" className="workimg"/>
                <img src={image2} alt="" className="workimg"/>
                <img src={image3} alt="" className="workimg"/>
                <img src={image4} alt="" className="workimg"/>

            </div>
        </section>
    )
}

export default Works;