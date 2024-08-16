import fabrica from '../assets/experience/fabrica.png'
import btor from '../assets/experience/btor.png'
import compassuol from '../assets/experience/compassuol.png'
import '../styles/Experience.css'

const Experience = () => {
  return (
    <div id='main'>
      <div id="content">
        <h1>Experiências profissionais</h1>
        <div id="exp">
          <section className="experience_section">
            <div className="logo">
              <img src={fabrica} alt="fabrica-logo" id="img-fabrica" />
            </div>
            <section>
              <h2>Fábrica de Software</h2>
              <h4>Desenvolvedor fullstack</h4>
              <p>
                Desenvolvimento de WEB APIs e telas com .NET, Dapper e NextJS.
              </p>
            </section>
          </section>
          <section className="experience_section">
            <div className="logo">
              <img src={btor} alt="btor-logo" id="img-btor" />
            </div>
            <section>
              <h2>Btor</h2>
              <h4>Desenvolvedor backend</h4>
              <p>
                Construção de microsserviços que envia requisições para um banco.
              </p>
            </section>
          </section>
          <section className="experience_section">
            <div className="logo">
              <img src={compassuol} alt="compassuol-logo" id="img-compassuol" />
            </div>
            <section>
              <h2>Compass UOL</h2>
              <h4>Desenvolvedor frontend</h4>
              <p>
                Desenvolvimento de websites com ReactJS.
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experience