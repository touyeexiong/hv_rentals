import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/styles'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

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
                <MyButton onClick={this.handleClick}>Check Availability and Pricing</MyButton>
            {/* <Reservation id={this.props.id} /> */}
            </> 
        )
    }
}

export default withRouter(PricingAvailItem);