import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./QuemSomos.css";

function QuemSomos() {
  return (
    <>
      <Navbar />

      <section className="quem-hero">
        <div className="container">
          <h1>Quem Somos</h1>
          <p>
            Há mais de 15 anos oferecendo atendimento médico de excelência,
            tecnologia moderna e cuidado humanizado para nossos pacientes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="historia">
            <h2>Nossa História</h2>

            <p>
              O Hospital VidaPlus nasceu com o propósito de oferecer um
              atendimento médico de alta qualidade, unindo profissionais
              especializados, tecnologia avançada e um ambiente acolhedor.
            </p>

            <p>
              Ao longo dos anos, construímos uma trajetória baseada na
              confiança, no respeito e no compromisso com a saúde e o
              bem-estar de nossos pacientes.
            </p>
          </div>

          <div className="missao-visao">

            <div className="info-card">
              <h3>Missão</h3>
              <p>
                Promover saúde e qualidade de vida por meio de um atendimento
                humanizado e eficiente.
              </p>
            </div>

            <div className="info-card">
              <h3>Visão</h3>
              <p>
                Ser referência em atendimento hospitalar e inovação na área
                da saúde.
              </p>
            </div>

          </div>

          <div className="valores">

            <h2>Nossos Valores</h2>

            <div className="valores-grid">

              <div className="valor">
                <h4>Ética</h4>
                <p>Atuamos com responsabilidade e transparência.</p>
              </div>

              <div className="valor">
                <h4>Respeito</h4>
                <p>Valorizamos cada paciente e sua individualidade.</p>
              </div>

              <div className="valor">
                <h4>Humanização</h4>
                <p>Cuidamos das pessoas com empatia e dedicação.</p>
              </div>

              <div className="valor">
                <h4>Inovação</h4>
                <p>Buscamos constantemente novas soluções em saúde.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default QuemSomos;