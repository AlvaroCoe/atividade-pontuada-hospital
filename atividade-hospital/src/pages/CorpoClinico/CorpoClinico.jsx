import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import lorrayneFerreira from "../../assets/medicos/lorrayne.jpeg";
import alvaroCoelho from "../../assets/medicos/alvaro-coelho.jpg";
import mariaLuiza from "../../assets/medicos/maria.jpg";
import daniloSena from "../../assets/medicos/danilo-sena.jpg";

// Adicione esta linha bem aqui:
import "./corpo.css";

function CorpoClinico() {

  const medicos = [
    {
      nome: "Dra. Lorrayne",
      especialidade: "Otorpedista",
      foto: lorrayneFerreira
    },
    {
      nome: "Dr. Alvaro Coelho",
      especialidade: "Pediatra",
      foto: alvaroCoelho
    },
    {
      nome: "Dra. Maria Luíza",
      especialidade: "Cardiologista",
      foto: mariaLuiza
    },
    {
      nome: "Dr. Danilo Sena",
      especialidade: "Dermatologista",
      foto: daniloSena
    }
  ];

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">Corpo Clínico</h1>

          <div className="cards">

            {medicos.map((medico, index) => (
              <div className="card-medico" key={index}>

                <img
                  src={medico.foto}
                  alt={medico.nome}
                  className="foto-medico"
                />

                <h3>{medico.nome}</h3>
                <p>{medico.especialidade}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default CorpoClinico;