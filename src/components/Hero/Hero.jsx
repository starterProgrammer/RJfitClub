import { Header } from '../Header/Header'
import './Hero.css'

// Images imports 
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />

                {/* Ad Section */}
                <div className="best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero Text Section */}
                <div className='hero-text'>
                    <div>
                        <span className='strok-text '>shape </span>
                        <span>your</span>
                    </div>

                    <div>
                        <span>ideal body</span>
                    </div>

                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* Figure Section */}
                <div className='figure'>
                    <div>
                        <span>+140</span>
                        <span>expert couch</span>
                    </div>

                    <div>
                        <span>+975</span>
                        <span>MEMBERS JOINED</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* Button section */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More </button>
                </div>
            </div>



            <div className='right-h'>
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* Hero Images */}
                <img src={hero_image} className="hero-image" />
                <img src={hero_image_back} className="hero-image-back" />

                {/* Calories Section */}

                <div className='calories'>
                    <img src={Calories} />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>


            </div>
        </div>

    )
}

