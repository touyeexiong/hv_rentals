import React, {Component} from 'react';
import {connect} from 'react-redux';
import PricingAvailItem from '../PricingAvailItem/PricingAvailItem'

class PricingAvail extends Component {



    componentDidMount () {
            this.props.dispatch({
                type: 'FETCH_RVS'
            })
        }    


    render() { 
        // console.log(this.props.history);
               
        return (
            <>
            <h1>Pricing and Availability</h1>
            
            {this.props.reduxState.rvs.map((rvs) => {
                return (
                <PricingAvailItem id={rvs.id} key={rvs.id} name={rvs.rv_name} des={rvs.rv_description} imgPath={rvs.rv_image_path}/>
            )
            })}
                {/* <button onClick={this.handleClick}>Check Availability and Pricing</button> */}

            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(PricingAvail);