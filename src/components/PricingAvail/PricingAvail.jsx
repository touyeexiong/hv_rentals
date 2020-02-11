import React, {Component} from 'react';
import {connect} from 'react-redux';
import PricingAvailItem from '../PricingAvailItem/PricingAvailItem'
import rvsSaga from '../../redux/sagas/rvSaga';

class PricingAvail extends Component {

    componentDidMount () {
            this.props.dispatch({
                type: 'FETCH_RVS'
            })
        }    
    



    render() {
        return (
            <>
            <h1>we in Pricing and Availability</h1>
            
            {this.props.reduxState.rvs.map((rvs) => {
                return (
                <PricingAvailItem key={rvs.id} name={rvs.rv_name} des={rvs.rv_description} imgPath={rvs.rv_image_path}/>
            )
            })}
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});


export default connect(mapReduxStateToProps)(PricingAvail);