import React, { useEffect } from 'react'
import './index.css' 
import Navbar from '../Navbar';
import Navbottom from '../Navbottom';

const RefundPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Returns & Refunds Policy | Proptelligence'
    }, [])

    return (
      <>
      <Navbar/>
      <div className="privacy-policy-page">
            <div className="privacy-policy-page__background">
                <h1 className='privacy-policy-heading'>Returns & Refunds Policy</h1>
            </div>
            <div className="privacy-policy-page__content">
                <div className='privacy-policy-content-sub'>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>You are entitled to cancel your order within 30 days without giving any reason for doing so</li> 
                        <li className='privacy-policy-item'>The deadline for canceling an order is 30 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</li> 
                        <li className='privacy-policy-item'>In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement.</li> 
                        <li className='privacy-policy-item'>You can inform us of your decision by e-mail info@proptelligence.net</li> 
                        <li className='privacy-policy-item'>We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Conditions for returns</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>In order for the goods to be eligible for a return, please make sure that:</li> 
                        <li>The goods were purchased in the last 30 days</li> 
                        <li>The goods are in the original packaging</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>The following goods cannot be returned</h3>
                    <ul className='privacy-policy-list'>
                        <li>The supply of goods made to your specifications or clearly personalized.</li> 
                        <li>The supply of goods which according to their nature are not suitable to be returned, for example goods which deteriorate rapidly or where the date of expiry is over.</li> 
                        <li>The supply of goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li> 
                        <li>The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items</li> 
                        <li className='privacy-policy-item'>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Returning Goods</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address:</li> 
                        <li className='privacy-policy-item'>We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Gifts</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>If the goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.</li> 
                        <li className='privacy-policy-item'>If the goods weren't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, We will send the refund to the gift giver.</li>
                    </ul>
                </div>

                <div className='privacy-policy-content-sub'>
                    <h3 className='privacy-policy-subheading'>Contact Us</h3>
                    <ul className='privacy-policy-list'>
                        <li className='privacy-policy-item'>If you have any questions about our Returns and Refunds Policy, please contact us by e-mail info@proptelligence.net.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Navbottom/>
      </>
    )
}

export default RefundPolicy