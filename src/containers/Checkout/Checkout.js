import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
class Checkout extends Component {



    CheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    CheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased? <Redirect to="/" /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                <CheckoutSummary ingredients={this.props.ings}
                    CheckoutCancelled={this.CheckoutCancelledHandler}
                    CheckoutContinued={this.CheckoutContinuedHandler}
                />
                <Route
                path={this.props.match.path + '/contact-data'}
                render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props} />)} />
                </div>
            )
        }
        return summary;
    }
}


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
       /*  price: state.totalPrice */
    }
}

export default connect(mapStateToProps)(Checkout);