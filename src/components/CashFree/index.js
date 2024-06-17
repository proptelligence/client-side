import { useState } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'


function App() {

  let cashfree;

  let insitialzeSDK = async function () {

    cashfree = await load({
      mode: "prod",
    })
  }

  insitialzeSDK()

  const [orderId, setOrderId] = useState("")



  const getSessionId = async () => {
    try {
      let res = await axios.get("https://property-backend-9abo.onrender.com/payment")
      
      if(res.data && res.data.payment_session_id){

        console.log(res.data)
        setOrderId(res.data.order_id)
        return res.data.payment_session_id
      }


    } catch (error) {
      console.log(error)
    }
  }

  const verifyPayment = async () => {
    try {
      
      let res = await axios.post("https://api.cashfree.com/pg/orders", {
        orderId: orderId
      })

      if(res && res.data){
        alert("payment verified")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {

      let sessionId = await getSessionId()
      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget:"_modal",
      }

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("payment initialized")

        verifyPayment(orderId)
      })


    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          Pay now
        </button>

      </div>

    </>
  )
}

export default App
