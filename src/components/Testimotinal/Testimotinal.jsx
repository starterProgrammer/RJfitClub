import './Testimotinal.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

// Animation 
import { motion } from 'framer-motion'

export const Testimotinal = () => {

    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    // Animation Transition
    const transition = { type: 'spring', duration: 3 }

    return (
        <div className="Testimotinal">

            <div className='left-t'>
                <span>Testimonials</span>
                <span className='strok-text'>What they</span>
                <span>say about us</span>

                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >{testimonialsData[selected].review}</motion.span>

                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span>
                    - {' '}
                    {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: '1', x: '0' }}
                    transition={{ ...transition, duration: 2 }}></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: '1', x: '0' }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: '0', x: '100' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="" />
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