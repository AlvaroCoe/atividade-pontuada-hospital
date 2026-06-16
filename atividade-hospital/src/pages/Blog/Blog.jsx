import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Blog.css";
import noticia1 from "../../assets/noticia1.jpg";
import noticia2 from "../../assets/noticia2.jpg";
import noticia3 from "../../assets/noticia3.jpg";

function Blog() {

  const posts = [
    {
      titulo: "Importância dos exames preventivos",
      descricao:
        "Descubra como exames periódicos podem ajudar na prevenção de diversas doenças.",
      imagem: noticia1
    },
    {
      titulo: "Como manter hábitos saudáveis",
      descricao:
        "Pequenas mudanças na rotina podem trazer grandes benefícios para sua saúde.",
      imagem: noticia2
    },
    {
      titulo: "Dicas para fortalecer a imunidade",
      descricao:
        "Alimentação equilibrada, exercícios e sono de qualidade fazem toda a diferença.",
      imagem: noticia3
    }
  ];

  return (
    <>
      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <h1>Blog e Novidades</h1>
          <p>
            Conteúdos, dicas e informações para cuidar melhor da sua saúde.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="blog-grid">

            {posts.map((post, index) => (
              <div className="blog-card" key={index}>

                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="blog-img"
                />

                <div className="blog-content">

                  <h3>{post.titulo}</h3>

                  <p>{post.descricao}</p>

                  <button>
                    Ler Mais
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;