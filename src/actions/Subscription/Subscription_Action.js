import axios from "axios";
import {ADD_SUBSCRIPTION, CHECK_SUBSCRIPTION} from "../types";
import {createMessage, returnErrors} from "../message/message";
import {tokenConfig} from "../auth_action/auth";

export const getSubscription = () => (dispatch, getState) => {
    axios.get('Subscription/getSubscription/', tokenConfig(getState)).then((res) => {
        dispatch({
            type: CHECK_SUBSCRIPTION,
            payload: res.data
        })
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addSubscription = (data, order) => (dispatch, getState) => {
    const user = data.user
    const firstName = data.firstName
    const lastName = data.lastName
    const email = data.email
    const phone = data.phone
    const Country_state = data.Country_state
    const stateName = data.stateName
    const Citi_data = data.Citi_data
    const Transaction_ID = order.id
    const bundle = data.PackageID
    const Subject = data.Subject
    const School = data.School
    const PaymentMethod = data.checkout
    const order_status = order.status
    const order_payer_payer_id = order.payer.payer_id
    const Price = data.Price
    const EndDate = order.update_time
    const order_time = order.create_time
    const order_payer_name_given_name = order.payer.name.given_name
    const order_payer_name_surname = order.payer.name.surname
    const order_payer_phone = order.payer.phone
    const order_payer_birth_date = order.payer.birth_date
    const order_payer_email_address = order.payer.email_address
    const order_purchase_units_amount_currency_code = order.purchase_units[0].amount.currency_code
    const order_purchase_units_amount_value = order.purchase_units[0].amount.value
    const order_purchase_units_payee_email_address = order.purchase_units[0].payee.email_address
    const order_purchase_units_payee_merchant_id = order.purchase_units[0].payee.merchant_id
    const body = {
        user,
        firstName,
        lastName,
        email,
        phone,
        Country_state,
        stateName,
        Citi_data,
        Transaction_ID,
        bundle,
        Subject,
        School,
        PaymentMethod,
        order_status,
        order_payer_payer_id, order_payer_name_surname,
        order_payer_phone, order_payer_birth_date, order_payer_email_address,
        order_purchase_units_amount_currency_code, order_purchase_units_amount_value,
        order_purchase_units_payee_email_address,
        order_purchase_units_payee_merchant_id,
        Price, EndDate, order_time, order_payer_name_given_name
    }
    axios.post('Subscription/Subscription/', body, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({addLead: 'Subscribed'}))
            dispatch({
                type: ADD_SUBSCRIPTION,
                payload: res.data
            })
        })
        .catch((err) => dispatch(returnErrors(err.response.data), err.response.status))
}


export const addSubscriptionStripe = (data, order) => (dispatch, getState) => {
    console.log(data, order,'Stripe')
    const user = data.data.user
    const firstName = data.data.firstName
    const lastName = data.data.lastName
    const email = data.data.email
    const phone = data.data.phone
    const Country_state = data.data.Country_state
    const stateName = data.data.stateName
    const Price = data.data.Price
    const Citi_data = data.data.Citi_data
    const bundle = data.data.PackageID
    const Subject = data.data.Subject
    const School = data.data.School
    const PaymentMethod = data.data.checkout
    const Transaction_ID = order.id

    const body = {
        user,
        firstName,
        lastName,
        email,
        phone,
        Country_state,
        stateName,
        Citi_data,
        bundle,
        Subject,
        School, Price,
        PaymentMethod,
        Transaction_ID
    }
    axios.post('Subscription/Subscription/', body, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({addLead: 'Subscribed'}))
            dispatch({
                type: ADD_SUBSCRIPTION,
                payload: res.data
            })
        })
        .catch((err) => dispatch(returnErrors(err.response.data), err.response.status))
}