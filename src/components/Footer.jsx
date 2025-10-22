import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container footer-wrapper">
      <div className="footer-main">
        <h3>Zara <span>Takion</span></h3>
        <p>
          Portfólio de <strong>Rodrigo A. Maciel Pinheiro</strong> —  
          explorando o ponto entre <em>Data Science</em> e <em>Frontend Design</em>.
        </p>
      </div>

      <div className="footer-links">
        <a href="mailto:rodzmaciel21@gmail.com">Gmail</a>
        <a href="https://github.com/ZaraTakion" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rodrigo-pinheiro-94aa74358/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Zara Takion • Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
)

export default Footer
