import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects (){
    return(
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento de uma formação em tecnologia" 
            repo="https://github.com/PedroFrazo/projeto-landing-page"
            site="https://landingpage001-dnc.netlify.app/"
                />
            <Card
            img={portfolio}
            title=" Portfolio React"
            tech="React, CSS e JS"
            description="Desenvolvimento de um Portfólio para mim" 
            repo="" 
            site=""
            />
            
            <ButtonB text='Ver Repositório Completo' link='https://github.com/PedroFrazo?tab=repositories'/>
        </div>
    )
}

export default Projects