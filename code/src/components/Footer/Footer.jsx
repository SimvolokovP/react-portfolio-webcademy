import './Footer.css';
import vkIcon from '../../assets/img/icons/vk.svg'
import instIcon from '../../assets/img/icons/instagram.svg'
import twitterIcon from '../../assets/img/icons/twitter.svg'
import gitHubIcon from '../../assets/img/icons/gitHub.svg'
import linkedInIcon from '../../assets/img/icons/linkedIn.svg'

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vkIcon} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instIcon} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitterIcon} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHubIcon} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedInIcon} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}