import './Testimotinal.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

export const Testimotinal = () => {

    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className="Testimotinal">

            <div className='left-t'>
                <span>Testimonials</span>
                <span className='strok-text'>What they</span>
                <span>say about us</span>

                <span>{testimonialsData[selected].review}</span>

                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span>
                    - {' '}
                    {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>

                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={() => {
                        selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)
                    }} />
                    <img src={rightArrow} alt="" onClick={() => {
                        selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                    }} />
                </div>
            </div>
        </div>
    )
}