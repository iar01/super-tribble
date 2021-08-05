import React, {useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addSubscription} from "../../../actions/Subscription/Subscription_Action";

export default function Paypal(props) {
    const dispatch = useDispatch();
// eslint-disable-next-line

    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: props.Name,
                            amount: {
                                currency_code: "GBP",
                                value: props.Price,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                dispatch(addSubscription(props,order))
            },
            onError: (err) => {
                console.log(err, 'error here');
            },
        })
            // eslint-disable-next-line
            .render(paypal.current);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div ref={paypal}/>
        </div>
    );
}