import './Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className="Footer">
            <hr />
            <div className='wrapper'>
                <div className="footer-content">
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                </div>

                <img src={logo} alt="" />
            </div>

            <div className="blur blur-f blur-left"></div>
            <div className="blur blur-f blur-center"></div>
            <div className="blur blur-f blur-right"></div>
        </div>
    )
}