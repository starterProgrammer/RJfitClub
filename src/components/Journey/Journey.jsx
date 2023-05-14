import './Journey.css'
import { plansData } from '../../data/plansData'
import tick from '../../assets/whiteTick.png'

export const Journey = () => {
    return (
        <div className="journey">

            <div className='blur juorney-blur-1'></div>
            <div className='blur juorney-blur-2'></div>
            {/* Journey Title */}
            <div className='journey-titles'>
                <span className='strok-text'>Ready to Start</span>
                <span>Your Journey</span>
                <span className='strok-text'>now withus</span>
            </div>

            {/* Journey plans */}
            <div className='juorney-plans'>
                {plansData.map((plan) => {
                    return (
                        <div className='plan'>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>
                                $
                                {plan.price}
                            </span>
                            {
                                plan.features.map((feature, i) => {
                                    return (
                                        <div>
                                            <div className='features'>
                                                <img src={tick} alt="" />
                                                <span key={i}>{feature}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='benefit'>
                                <span>See more benefits -></span>
                            </div>
                            <button className='btn'>join now</button>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}