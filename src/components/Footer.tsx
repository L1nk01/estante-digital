import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
      <footer>
          <div id="footer" className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex gap-3">
                  <a className="social-icon" href="https://www.linkedin.com/in/emmanuel-campos-0b4985232/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin fa-2x footer-icon" /></a>
                  <a className="social-icon" href=""><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram fa-2x footer-icon" /></a>
                  <a className="social-icon" href=""><FontAwesomeIcon icon={faTwitter} className="fa-brands fa-twitter fa-2x footer-icon" /></a>
                  <a className="social-icon" href="mailto:ecampospaulino@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-sharp fa-solid fa-envelope fa-2x footer-icon" /></a>
              </div>

              <div className="text-center mt-4">
                  <p className="text-white mb-0">ITLA | Desarrollo de Software</p>
                  <p className="text-white mb-0">© Emmanuel Campos - Derechos Reservados | Santo Domingo, 2023</p>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer
