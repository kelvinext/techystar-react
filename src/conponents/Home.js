import React from 'react'

import vg from "../assests/vg.png"
import {
FaGoogle,
FaAmazon,
FaYoutube,
FaInstagram
  } from "react-icons/fa"; 
export default function Home() {
  return (
    <>
      <div className='home' id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="graphics" />
        <div>
          <p>We are your one and only solution to the tech problems you face every day.
            We are leading tech company whose aim is to increase the problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non pariatur ullam vero exercitationem repellat? Soluta perferendis pariatur sint iste quos quae rem vel asperiores nulla, neque nihil fugiat culpa incidunt laborum, provident dicta nobis! Fugiat facilis reiciendis, suscipit reprehenderit iure, expedita impedit deleniti exercitationem quos quaerat voluptas provident dolorem laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit inventore expedita molestias incidunt illum, voluptates fugiat, omnis cupiditate ratione itaque rem doloribus nemo, labore veritatis dolor odit ipsa quaerat.</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <FaGoogle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <FaAmazon />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <FaYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <FaInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
