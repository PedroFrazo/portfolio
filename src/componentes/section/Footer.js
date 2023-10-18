import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/pedrofrazo/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/PedroFrazo'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/pedro-henrique-fraz%C3%A3o-alves-43b682238/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>pehrique25@gmail.com</p>
            <p>Pedro Henrique © 2023</p>
        </div>
    )
}

export default Footer