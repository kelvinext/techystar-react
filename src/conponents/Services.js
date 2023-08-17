import React from 'react'
import {Carousel} from "react-responsive-carousel"
import"react-responsive-carousel/lib/styles/carousel.min.css"
function Services() {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false} >
      

        <div>
            <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVsbCUyMHN0YWNrJTIwd2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="img1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img2" />
            <p className='legend'>peer-to-peer support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
