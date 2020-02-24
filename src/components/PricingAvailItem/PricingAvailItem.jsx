import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/styles'
import './PricingAvailItem.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing={3}
            >
                    <Grid item xs={12} sm={6}>
                <Paper>
                <div><img className="photo" alt={this.props.des} src={this.props.imgPath} /></div>
                <div className="testing">{this.props.name}</div>
                <MyButton onClick={this.handleClick}>Check Availability and Pricing</MyButton>
                    </Paper>
                </Grid>
                </Grid>
            </> 
        )
    }
}

export default withRouter(PricingAvailItem);