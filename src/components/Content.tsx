import React from "react"
import "../styles/Content.scss"

export default function Content() {
  return (
    <main>
      <section id="landing">
        <h1>TuffyHacks 2021</h1>
        <p>Making dreams reality</p>
        <time dateTime="2021-3-27">March 27-28, 2021 • Virtual Event</time>
        <a href="#">Register Now</a>
        <a href="#">Schedule</a>
        <p>Interested in sponsoring?</p>
      </section>

      <section id="about">
        <div id="stats">
          <p>300 Hackers.</p>
          <p>24 Hours.</p>
          <p>Infinite Potential.</p>
        </div>
        <div id="info">
          <h2>Empowering Students</h2>
          <p>
            Empowering Students TuffyHacks is Cal State Fullerton's student-run
            hackathon for beginners and first-time hackers, where participants
            from all our college create innovative products in 24 hours. This
            year, our hackathon will be held virtually on March 27 - 28th,
            meaning you can participate from the comfort of your own home! Come
            learn new topics with recorded workshops ranging from open-source
            software to creating your own DiscordBot. Meet our sponsors at their
            networking events. Your project also has the chance to win some of
            our cool prizes!
          </p>
          <a href="#">Register Now</a>
        </div>
      </section>

      <section id="sponsors">
        <h2>Sponsor a Special Weekend</h2>
        <p></p>
        <a href="#">Become a Sponsor</a>
      </section>

      <section id="faq">
        <details>
          <summary>What is a hackathon?</summary>  
          A hackathon is a weekend-long event where students come together to learn the
          latest technologies and build innovative technologies.
        </details>
        <details>
          <summary>When and where is TuffyHacks?</summary>
          TuffyHacks is taking place from March 27th to March 28th. Due to the COVID-19 pandemic
          and for the health and safety of all students, this hackathon will be held virtually.
        </details>
        <details>
          <summary>Who can come?</summary>
          Any current college student or have graduated in the past year, you're more than welcome to attend! 
          Not a student? No problem! You can attend as a mentor and help out our students! 
          Mentor applications will be opening soon
        </details>
        <details>
          <summary>Do I need to have a group? </summary>
          Not at all! You can be a lone wolf, come with a team (no more than four people), 
          or join some teams at TuffyHacks. We’ll also have team building activities to 
          help you find the right teammates!
        </details>
        <details>
          <summary>How much does it cost to attend Tuffy Hacks?</summary>
          Its free!
        </details>
        <details>
          <summary>When do hacker applications open?</summary>
          Applications will be opening early 2021.
        </details>
        <details>
          {/* Second Column */}
          <summary>What if I have no prior experience in programming, coding, or hackathons? </summary>
          We don’t expect hackers to have any prior experience. We will be providing starter packs and 
          workshops to help new hackers get started on projects and learn new technologies. 
        </details>
        <details>
          <summary>Will Tuffy Hacks happen in person or virtually?</summary>
        </details>
        <details>
          <summary>Who can participate?</summary>
        </details>
        <details>
          <summary>What if I've never been to a hackathon before?</summary>
        </details>
        <details>
          <summary>How much does it cost to attend Tuffy Hacks?</summary>
        </details>
        <details>
          <summary>When do hacker applications open?</summary>
        </details>
      </section>
    </main>
  )
}
