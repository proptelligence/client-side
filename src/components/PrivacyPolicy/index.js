import React, { useEffect } from 'react'
import './index.css' 
import Navbar from '../Navbar';
import Navbottom from '../Navbottom';

const PrivacyPolicyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Privacy Policy | Proptelligence'
    }, [])

    return (
      <>
      <Navbar/>
      <div className="privacy-policy-page">
            <div className="privacy-policy-page__background">
                <h1 className='privacy-policy-heading'>Privacy Policy</h1>
            </div>
            <div className="privacy-policy-page__content">
                <div className='privacy-policy-content-sub'>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>PROPTELLIGENCE website is owned by PROPTELLIGENCE TECHNOLOGY PRIVATE LIMITED, which is a data controller of your personal data.</li>
                        <li className='privacy-policy-item'>We have adopted this Privacy Policy, which determines how we are processing the information collected by PROPTELLIGENCE, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using PROPTELLIGENCE website.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Personal information we collect</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>When you visit the PROPTELLIGENCE, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Why do we process your data?</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.</li>
                        <li className='privacy-policy-item'>You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via info@proptelligence.net.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Rights List</h3>
                    <ol className='privacy-policy-list'>
                        
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(a) is not in any way deceptive;</span></li>
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services</span></li> 
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(c) fits within the context of the linking party's site.</span></li>
                        <li className='privacy-policy-item'>We may consider and approve other link requests from the following types of organizations: Commonly-known consumer and/or business information sources; Dot.com community sites; Associations or other groups representing charities; Online directory distributors; Internet portals; Accounting, law, and consulting firms; and Educational institutions and trade associations.</li>
                        <li className='privacy-policy-item'>We will approve link requests from these organizations if we decide that:</li>  
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(a) the link would not make us look unfavorably to ourselves or to our accredited businesses</span></li>
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(b) the organization does not have any negative records with us</span></li> 
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(c) the benefit to us from the visibility of the hyperlink compensates the absence of PROPTELLIGENCE; and </span></li>  
                        <li className='privacy-policy-item'><span className='privacy-policy-item-span'>(d) the link is in the context of general resource information. </span></li>                                   
                        <li className='privacy-policy-item'>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to PROPTELLIGENCE. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response. Approved organizations may hyperlink to our Website as follows: By use of our corporate name; or By use of the uniform resource locator being linked to; or Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site. No use of PROPTELLIGENCE's logo or other artwork will be allowed for linking absent a trademark license agreement</li>
                    </ol>


                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Links to other websites</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Information security</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Legal disclosure</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Contact information</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to info@proptelligence.net.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Navbottom/>
      </>
    )
}

export default PrivacyPolicyPage