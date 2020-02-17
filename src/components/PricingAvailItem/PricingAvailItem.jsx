import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class PricingAvailItem extends Component {

    handleClick = () => {
        console.log('we clicked', this.props.id);
        // this.props.dispatch({
        //     type: 'ADD_TO_SELECTION',
        //     payload: this.props
        // })
        this.props.history.push(`/reservation/${this.props.id}`)
        console.log(this.props.history);
        
    }

    render() {
        return (
            <>
                <div><img alt={this.props.des} src={this.props.imgPath} /></div>
                <div>{this.props.name}</div>
                <div>{this.props.des}</div>
                <button onClick={this.handleClick}>Check Availability and Pricing</button>
            {/* <Reservation id={this.props.id} /> */}
            </> 
        )
    }
}

export default withRouter(PricingAvailItem);