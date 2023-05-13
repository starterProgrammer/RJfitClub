import './Programms.css'

import RightArrow from '../../assets/rightArrow.png'

import { programsData } from '../../data/programsData'

export const Programms = () => {
    return (
        <div className='programms'>

            {/* Programm Title */}
            <div className='programms-titles'>
                <span className='strok-text'>explorer our</span>
                <span>programms</span>
                <span className='strok-text'>to shape you</span>
            </div>

            {/* Programm Categories */}
            <div className="prgoram-categories">

                {programsData.map((program) => {
                    return (<div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={RightArrow} />
                        </div>
                    </div>)
                })}
            </div>


        </div>
    )
}