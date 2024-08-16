import image from '../assets/main/imgboxmain.svg'
import '../styles/Main.css'

const Main = () => {
  return (
    <main>
        <div id="textbox">
          <h1>Olá, sou César, um <span id='role'>desenvolvedor</span> apaixonado por APIs e por resolução de problemas.</h1>
          <div id="about">
            <p>
              Trabalhei como back-end na <a href="https://www.linkedin.com/company/fábrica-de-software-unipe/" target='_blank'>UBTECH Fábrica de Software</a> e na <a href="https://btor.com.br" target='_blank'>Btor Soluções Computacionais</a>.
            </p>
            <p>
              Atualmente, trabalho na <a href="https://compass.uol" target='_blank'>Compass UOL</a> como desenvolvedor front-end.
            </p>
            <p>
              Graduado em Análise e Desenvolvimento de Sistemas pela <a href="https://www.unipe.edu.br" target='_blank'>UNIPÊ</a>.
            </p>
          </div>
        </div>
        <div id="imgbox">
          <img src={image} alt='img'/>
        </div>
    </main>
  )
}

export default Main