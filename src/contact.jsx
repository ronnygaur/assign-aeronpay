import React from 'react';
import "./Contact.css"; // Import your CSS file

function ContactForm() {
    return (
        <section className="contact-form">
            <h4 className="sectionHeader">contact us</h4>
            <h1 className="heading">Get In Touch!</h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
                inventore omnis aliquid rerum alias molestias.</p>

            <div className="contactForm">
                <form action="#">
                    <h1 className="sub-heading">Need Support !</h1>
                    <p className="para para2">Contact us for a quote , help to join the them.</p>
                    <input type="text" className="input" placeholder="your name" />
                    <input type="text" className="input" placeholder="your email" />
                    <input type="text" className="input" placeholder="your Subject" />
                    <textarea className="input" cols="30" rows="5" placeholder="Your message..."></textarea>
                    <input type="submit" className="input submit" value="Send Message" />
                </form>

                <div className="map-container">
                    <div className="mapBg"></div>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711567280038!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="contactMethod">
                <div className="method">
                    <i className="fa-solid fa-location-dot contactIcon"></i>
                    <article className="text">
                        <h1 className="sub-heading">Location</h1>
                        <p className="para">271 Gandhi Gally Kalbadevi Rd Swadeshi Mkt Kalbadevi, Mumbai,Pali,400002,India
</p>
                    </article>
                </div>

                <div className="method">
                    <i className="fa-solid fa-envelope contactIcon"></i>
                    <article className="text">
                        <h1 className="sub-heading">Email</h1>
                        <p className="para">Email: ronnygaur0000@gmail.com</p>
                    </article>
                </div>

                <div className="method">
                    <i className="fa-solid fa-phone contactIcon"></i>
                    <article className="text">
                        <h1 className="sub-heading">Phone</h1>
                        <p className="para">Contact:  6377011653</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;


