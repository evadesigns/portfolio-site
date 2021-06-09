import React from 'react'

const Contact = props => (
  <section id="contact" ref={props.contactRef}>
    <div className="inner">
      <section>
        <form action="https://formspree.io/f/xayajydy" method="POST">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="#">eva@evasdesign.co.uk</a>
          </div>
        </section>

        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Location</h3>
            <span>
              Sheffield
              <br />
              United Kingdom
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
