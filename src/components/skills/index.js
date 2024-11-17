import'./index.css'
import fontend from '../image/htmlcssjs (1).png'
import frontend from '../image/react.png'
import backend from '../image/icons8-python-96.png'
import bckend from '../image/PHP_logo.png'
import bkd from '../image/The_C_Programming.png'
import reseau from '../image/cisco.png'
import systeme from '../image/linux_PNG40.png'
import system from '../image/macos.png'
import VM from '../image/virtualbox_logo_icon.png'
import système from '../image/windows.png'
import cybersécurité from '../image/public-key.png'
import cybersécuri from '../image/hardening.png'
import cybersécu from '../image/gdpr.png'

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
                        <p>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;Javascript&nbsp;&nbsp;React</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={backend} alt="backend" className="barimg"/>
                    <img src={bckend} alt="bckend" className="barimg"/>
                    <img src={bkd} alt="bkd" className="barimg"/>
                    <div className="bartext">
                        <h2>Back-end</h2>
                        <p>Python&nbsp;&nbsp;PHP&nbsp;&nbsp;Langage C</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={systeme} alt="systeme" className="barimg"/>
                    <img src={system} alt="system" className="barimg"/>
                    <img src={système} alt="système" className="barimg"/>
                    <div className="bartext">
                        <h2>Système d'exploitation</h2>
                        <p>Linux&nbsp;&nbsp;MacOS&nbsp;&nbsp;Windows</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={cybersécurité} alt="cybersécurité" className="barimg"/>
                    <img src={cybersécuri} alt="cybersécuri" className="barimg"/>
                    <img src={cybersécu} alt="cybersécu" className="barimg"/>
                    <div className="bartext">
                        <h2>CyberSécurité</h2>
                        <p>Cryptographie&nbsp;&nbsp;Durcissement&nbsp;&nbsp;RGPD</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={reseau} alt="reseau" className="barimg"/>
                    <div className="bartext">
                        <h2>Réseau</h2>
                        <p>Cisco</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={VM} alt="VM" className="barimg"/>
                    <div className="bartext">
                        <h2>Virtualisation</h2>
                        <p>VirtualBox</p>
                    </div>
                </div>
                
            </div>
        </section>
        

    )
}

export default Skills;