import Navbottom from '../Navbottom'
import Navbar from '../Navbar'
import { useEffect } from 'react'
import './index.css'
import Blog25 from '../../components/Assets/Blog25.png';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);


      return(
        <>  
        <Navbar/>
        <div className="blog-container">
            <h1 className='blog-main-heading'>Welcome to A.I Propbot</h1>
            <img className='propterty-img' src={Blog25}/>
            <h3 className='blog-sub-heading'>What is AI PropBot</h3>
            <p className='blog-des'>PropBot is an advanced intelligent bot that indirectly employs the use of AI in that it learns from experience like a human and allows clients to interact with it. PropBot is not a simple top-level AI chatbot, which answers to a set of queries with faithful intentions, but you want to capture more general intent. It can be used for activities like responding to requests regarding the properties listed, arranging appointments for viewing property, briefing customers on the market in the relevant area, or even taking the potential buyers/borrowers through the process of purchase/tenancy. Another aspect that customers cannot fail to appreciate is the availability of PropBot since it is online at all times to offer its services to potential clients regardless of the time of the particular day. This continuous availability does not only go a long way to improve the overall felt customer experience but it will also increase the probability of converting leads into sales.</p>

            <h3 className='blog-sub-heading'>Why PropBot AI is Necessary</h3>
            <p className='blog-des'>In a competitive economy especially in the real estate business, the customer's engagement can never be taken lightly.</p>
            <h4 className='blog-sub-sub-heading'>Important Features are:-</h4>
            <h4 className='blog-sub-sub-heading'>Enhanced Customer Service: </h4><p className='blog-des'>PropBot is capable of providing immediate responses to the clients’ questions and in this way improves the Client experience due to less time waiting for responses.</p>
            <h4 className='blog-sub-sub-heading'>Increased Efficiency: </h4><p className='blog-des'>This in my opinion, eliminates time for the real estate agents, which in other circumstances could be spent on more valuable services.</p>
            <h4 className='blog-sub-sub-heading'>Higher Conversion Rates: </h4><p className='blog-des'>However, right and prompt replies to potential clients via PropBot may translate more requests into leads, and leads into sales.</p>
            <h4 className='blog-sub-sub-heading'>Cost Savings: </h4><p className='blog-des'>This reduces the chances of a direct contact with the clients; this reduces the number of customer service specialists required for the real estate companies hence cutting their expenses.</p>

            <p className='blog-des'>These are the advantages with the help of which AI PropBot becomes a tool necessary to the real estate companies that act to improve the relations with the clients and to increase overall performance.</p>

            <h3 className='blog-sub-heading'>Proptelligence Here To Assist</h3>
            <p className='blog-des'>At Proptelligence, we are committed to delivering the optimal value for the real estate business with the highest quality in AI services. As for AI technology, we indeed already have a vast amount of experience, but we also have a descriptive understanding of the processes occurring in the real estate market. As far as I am concerned, I expect PropBot to be a clear  indication of our seriousness in releasing only the best and nothing less than that.</p>
            <p className='blog-des'>PropBot is a powerful tool that enables the proposer to have an upper hand because you are able to provide your clients better and efficient services. PropBot is one of the tools designed by our team that in turn is updated regularly to address the growing market and customers’ demand. That is, selecting Proptelligence as a business partner conveys with the organisation that pays much attention to the quality of operating activity as well as the customers. We kindly invite you for help to transform your Real Estate Business through applying AI to each interaction point, reaching the greatest possible success for your business in the market.</p>
        </div>
        <Navbottom/>
        </>
    )
}

export default Blog