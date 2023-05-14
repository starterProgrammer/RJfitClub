// import image 
import Link from 'react-scroll/modules/components/Link'
import Logo from '../../assets/logo.png'
// css import 
import './Header.css'
export const Header = () => {

    return (
        <div className='header'>
            <img src={Logo} className="logo" />

            <ul className='header-menu'>
                <li>
                    <Link
                        to="hero"
                        span={true}
                        smooth={true}
                    >Home</Link>
                </li>
                <li><Link
                    to="programms"
                    span={true}
                    smooth={true}
                >Programs</Link></li>
                <li><Link
                    to="reasons"
                    span={true}
                    smooth={true}
                >Why us</Link></li>
                <li><Link
                    to="plans"
                    span={true}
                    smooth={true}
                >Plans</Link></li>
                <li>
                    <Link
                        to="testimontials"
                        span={true}
                        smooth={true}
                    >Testimonials</Link>
                </li>
            </ul>
        </div>
    )
}