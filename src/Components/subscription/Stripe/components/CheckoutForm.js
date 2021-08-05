import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";
import {saveStripeInfo} from "../api";
import {useDispatch} from "react-redux";

const CheckoutForm = (props) => {
        const x = props.data
        const [error, setError] = useState(null);
        // eslint-disable-next-line
        const [email, setEmail] = useState('');
        const stripe = useStripe();
        const elements = useElements();
        const dispatch = useDispatch();

        // Handle real-time validation errors from the card Element.
        const handleChange = (event) => {
            if (event.error) {
                setError(event.error.message);
            } else {
                setError(null);
            }
        }

        // Handle form submission.
        const handleSubmit = async (event) => {
            event.preventDefault();
            const card = elements.getElement(CardElement);

            const {paymentMethod, error} = await stripe.createPaymentMethod({
                type: 'card',
                card: card,
            });
            if (error) {
                setError(error.response.data)
            } else {
                dispatch(saveStripeInfo({email, payment_method_id: paymentMethod.id, x}))
            }
        }


        return (
            <form onSubmit={handleSubmit} className="stripe-form">
                <div className="form-row">
                    <label htmlFor="card-element">
                        Credit or debit card
                    </label>

                    <CardElement
                        id="card-element"
                        onChange={handleChange}
                    />
                    <div className="card-errors" role="alert">{error}</div>
                </div>
                <button type="submit" className="submit-btn">Submit Payment</button>
            </form>
        );

    }
;

export default CheckoutForm;