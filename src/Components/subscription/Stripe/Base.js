import React from 'react';
import './StyleClass.css';
import {
    Elements,
} from '@stripe/react-stripe-js';

import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe('pk_test_51J8lHoGGgwsNAb9xdDusNpb8kfPkph8pCzOJVlPz1eRQv3ST8tgezxVvQgj0M9b6mdu9fQzOSEYH8f21NfnkmPRW00UpXHKWVd');


const Base = (props) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm data={props}/>
    </Elements>
);

export default Base;
