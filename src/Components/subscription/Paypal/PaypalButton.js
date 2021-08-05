import React, {Fragment, useState} from "react";
import Paypal from './Paypal'
import paypalimg from '../../../assets/Paypal/img2.jpg'
import stripelogo from '../../../assets/Stripe/250px-Stripe_Logo,_revised_2016.svg.png'

function PayPalCom(props) {
    const [checkout, setCheckOut] = useState(false)
    const [updateState] = useState('');

    const handler = (data) => {
        updateState(data)
    }
    return (
        <Fragment>
            <div className='row mt-5'>
                <div className="col-12 text-center">
                    <h4>Please Select Payment Method</h4>
                </div>
                <div className="col-6 text-center">
                    {checkout ? (
                            <Paypal data1={props} someHandlerProp={handler}/>
                        )
                        : (
                            <button onClick={() => setCheckOut(true)}><img src={paypalimg}/></button>
                        )}
                </div>
                <div className="col-6 text-center">
                    {checkout ? (
                            <Paypal data1={props} someHandlerProp={handler}/>
                        )
                        : (
                            <button onClick={() => setCheckOut(true)}><img style={{height: '40px'}} src={stripelogo}/>
                            </button>
                        )}
                </div>
            </div>

        </Fragment>
    )
}

export default PayPalCom