import './index.css'
import Navbar from '../Navbar'
import Navbottom from '../Navbottom'
import Logo from '../../components/Assets/logo.jpg'

const About = () => (
  <> 
    <Navbar/>
    <div className="cont-1">
      <div className="about-us">
        <div className='about-cont'>
          <img src={Logo} alt="logo"/>
          <h1>About Us</h1>
        </div>
        <p>
          Proptelligence is an AI-powered real estate and legal platform that
          helps agents, attorneys, and other real estate professionals find and
          procure properties. In a nutshell, we create a seamless experience for
          agents and attorneys to find properties and make offers. Our solution
          also automates much of the legal process in real estate transactions
          by using AI to automate tasks such as document review, contract
          negotiation, and financial analysis.
        </p>
        <p>
          Proptelligence is a World Leading Data-Driven company using PropTech
          and Legal Tech. We provide smart solutions for companies of all sizes
          and pride ourselves on our unparalleled, dedicated service. At
          Proptelligence, we believe that the right understanding and
          technological edge can lead companies towards a successful future.
          Unlike other services, we don't charge for basic features like data
          update - it's always free for our clients.
        </p>
        <p>
          Proptelligence focuses on Data-Driven technology Solutions using Data
          Science, Cloud, and Digital Platforms. We are a technology company
          that is developing AI for the legal and real estate sectors.
        </p>
      </div>
      <div className='mission-vision-container'>
        <div className='mission-vision'>
          <h2>Mission</h2>
          <p>
            At Proptelligence Technology, our mission is to revolutionize the real 
            estate industry by leveraging cutting-edge technology and data-driven insights. 
            We aim to empower real estate professionals and consumers alike with innovative 
            solutions that enhance decision-making, streamline processes, and foster transparency. 
            Our commitment is to deliver exceptional value, drive growth, and build lasting relationships 
            with our clients and partners.
          </p>
        </div>

        {/* Vision Section */}
        <div className='mission-vision'>
          <h2>Vision</h2>
          <p>
            Our vision is to be the leading provider of intelligent real estate technology solutions globally.
            We strive to set the standard for innovation, reliability, and excellence in the industry. By continuously 
            evolving and adapting to the ever-changing landscape, we envision a future where our technology transforms 
            the way people buy, sell, and manage properties, making real estate transactions more efficient, accessible,
            and enjoyable for everyone involved.
          </p>
        </div>
      </div>
    </div> 
    <Navbottom/>
  </>
)

export default About
