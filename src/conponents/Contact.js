import React from 'react'

function Contact() {
  return (
    <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Your Name' required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Your Email' required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="textarea" placeholder='Tell us about your query....' required/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
  )
}

export default Contact
