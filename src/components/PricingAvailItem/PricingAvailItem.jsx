import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/styles'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './PricingAvailItem.css'
import Box from '@material-ui/core/Box'


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #b5b8b1 30%, #1b1d18 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #5a5c56',
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
            <Box
            display="flex"
            flexWrap="wrap"
            >
            <Card>
                <CardContent className="root">
                    <span>
                <div><img className="photo" alt={this.props.des} src={this.props.imgPath} /></div>
                <div className="testing">{this.props.name}</div>
                <div>{this.props.des}</div>
                <MyButton onClick={this.handleClick}>Check Availability and Pricing</MyButton>
                        </span>
                    </CardContent>
                </Card>
                </Box>
            </> 
        )
    }
}

export default withRouter(PricingAvailItem);