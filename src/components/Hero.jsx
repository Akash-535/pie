import React from 'react'
import Heading from '../common/Heading';
import Description from '../common/Description';
import HooksTask from './HooksTask';
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';
import Competition from './Competition';
const Hero = () => {
  return (
    <>
    <div className='min-vh-100 section d-flex align-items-center justify-content-center'>
        <div className='container'>
            <div className='d-flex gap-3 flex-xl-row flex-column'>
                    <div className='col-xl-4 col-12 text-container text-md-start text-center'>
                        <Heading text="Product"/>
                        <Description text="Due to the confusing nature of tax, the lack of awareness of the tax deduction system and the complicated tax refund process, we have experienced exceptional demand from the public for our service. From release in 2015, our original tax product has achieved 60x growth, bringing in over £5m revenue in 2022."/>
                        <div className='py-2'>
                            <Description text="With over 8 years of industry experience, we have listened to our clients to evolve our app into a whole-of-market product that will also meet the needs of the tax return market as well as the tax refund market. The App is packed with all the features users need to meet the requirements of the upcoming switch to Making Tax Digital."/>
                        </div>
                        <div className='pb-2'>
                            <Description text="Once we establish the ourself in the UK, we plan to expand into other territories to take advantage of the £500 billion global market"/>
                        </div>
                        <Description text="We have highlighted some of our key features that will be the cornerstone of our product launch in April 23."/>
                    </div>
                    <div className='col-xl-8 col-12'>
                       <div className="grid-container d-flex justify-content-center align-items-center">
                        <div className="grid-box d-grid">
                        <div className='grid-item-1 d-flex'>
                       <img className='small-img' src="./assets/images/grid-img-1.webp" alt="image 1" />
                       <img className='big-img' src="./assets/images/grid-img-2.webp" alt="image 2" />
                       </div>
                        <div className='grid-item-2 d-flex'>
                        <img className='small-img' src="./assets/images/grid-img-3.webp" alt="image 3" />
                        <img className='big-img' src="./assets/images/grid-img-4.webp" alt="image 4" />
                        </div>
                        <div className='grid-item-3 d-flex'>
                        <img className='big-img' src="./assets/images/grid-img-5.webp" alt="image 5" />
                        <img className='small-img' src="./assets/images/grid-img-6.webp" alt="image 6" />
                        </div>
                       <div className='grid-item-4 d-flex'>
                       <img className='big-img' src="./assets/images/grid-img-7.webp" alt="image 7" />
                       <img className='small-img' src="./assets/images/grid-img-8.webp" alt="image 8" />
                       </div>
                       <div className='grid-item-5 d-flex'>
                       <img className='small-img' src="./assets/images/grid-img-9.webp" alt="image 9" />
                       <img className='big-img' src="./assets/images/grid-img-10.webp" alt="image 10" />
                       </div>
                        <div className='grid-item-6 d-flex'>
                        <img className='small-img' src="./assets/images/grid-img-11.webp" alt="image 11" />
                        <img className='big-img' src="./assets/images/grid-img-12.webp" alt="image 12" />
                        </div>
                        </div>
                       </div>
                    </div>
            </div>
        </div>
    </div>
    <HooksTask/>
    <Competition/>
    </>
  )
}

export default Hero