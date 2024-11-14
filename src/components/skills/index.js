import'./index.css'
import fontend from '../image/htmlcssjs (1).png'
import frontend from '../image/react.png'
import backend from '../image/icons8-python-96.png'
import bckend from '../image/PHP_logo.png'
import reseau from '../image/cisco.png'
import systeme from '../image/linux_PNG40.png'
import system from '../image/macos.png'
import VM from '../image/virtualbox_logo_icon.png'

function Skills () {
    return (
        <section id="skills">
            <span className="skilltitle">Mes compétences</span>
            <span className="skilldesc">Durant mes études, j'ai acquis de solides compétences en informatique, notamment en programmation, gestion de bases de données et utilisation de logiciels de bureautique.
            Je suis à l'aise avec les différents systèmes d'exploitation et je possède une bonne compréhension des principes fondamentaux de l'informatique. </span>
            <div className="skillbars">
                <div className="skillbar">
                    <img src={fontend} alt="fontend" className="barimg"/>
                    <img src={frontend} alt="frontend" className="barimg"/>
                    <div className="bartext">
                        <h2>Front-end</h2>
                        <br></br>
                        <p>HTML  CSS  Javascript  React</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={backend} alt="backend" className="barimg"/>
                    <img src={bckend} alt="bckend" className="barimg"/>
                    <div className="bartext">
                        <h2>Back-end</h2>
                        <br></br>
                        <p>Python   PHP</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={reseau} alt="reseau" className="barimg"/>
                    <div className="bartext">
                        <h2>Réseau</h2>
                        <br></br>
                        <p>Cisco</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={systeme} alt="systeme" className="barimg"/>
                    <img src={system} alt="systeme" className="barimg"/>
                    <div className="bartext">
                        <h2>Système d'exploitation</h2>
                        <br></br>
                        <p>Linux  MacOS</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={VM} alt="VM" className="barimg"/>
                    <div className="bartext">
                        <h2>Virtualisation</h2>
                        <br></br>
                        <p>VirtualBox</p>
                    </div>
                </div>

            </div>
        </section>
        

    )
}

export default Skills;