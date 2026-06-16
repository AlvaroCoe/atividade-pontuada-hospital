import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contato.css";

function Contato() {
  return (
    <>
      <Navbar />

      <section className="contato-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>
            Estamos prontos para atender você e esclarecer suas dúvidas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contato-container">

          <div className="info-contato">

            <h2>Informações</h2>

            <div className="info-item">
              <h3>📞 Telefone</h3>
              <p>(71) 3333-4444</p>
            </div>

            <div className="info-item">
              <h3>📱 WhatsApp</h3>
              <p>(71) 99999-8888</p>
            </div>

            <div className="info-item">
              <h3>📧 E-mail</h3>
              <p>contato@vidaplus.com.br</p>
            </div>

            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>
                Av. Vasco da Gama, 1000<br />
                Salvador - BA
              </p>
            </div>

          </div>

          <div className="formulario">

            <h2>Envie uma Mensagem</h2>

            <form>

              <input
                type="text"
                placeholder="Seu nome"
              />

              <input
                type="email"
                placeholder="Seu e-mail"
              />

              <textarea
                rows="6"
                placeholder="Digite sua mensagem"
              ></textarea>

              <button type="submit">
                Enviar Mensagem
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contato;