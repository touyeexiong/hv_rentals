import React, {Component} from 'react';
import {connect} from 'react-redux';

class Reservation extends Component {

    componentDidMount () {
        // this.testFunction();
        this.props.dispatch({
            type: 'FETCH_RVS'
        })
    }

    handleBooking = () => { 
        let id = Number(this.props.match.params.id)
        console.log(`we booking now`, id );
        this.props.history.push(`/payment/${id}`)
    }



    // testFunction = (id) => {
    //     let apples = Number(this.props.match.params.id)
    //     let rvs = this.props.reduxState.rvs
    //     console.log(rvs.length);
    //     for (let i = 0; i < rvs.length; i++) {
    //         console.log(`I'm a log`);
            
    //         console.log(rvs[i]);
            
    //         if (apples == rvs[i].id){
    //             return <p>{rvs[i].rv_description}</p>
    //         } else {
    //             return <h1>404</h1>
    //         }
    //     }
    //     for (let rv of rvs) {
    //         if (apples == rv.id) {
    //             return rv.rv_description;
    //         }
    //         else {
    //             return '404';
    //         }
    //     }
        
    // }
    render () {
        console.log(this.props.reduxState.rvs);
        console.log(Number(this.props.match.params.id));
        

        
        return (
            <>
            <h1>we in reservations now</h1>
            <div>
                {this.props.reduxState.rvs.map((rvSelected) => {
                    console.log(rvSelected.id);
                    
                    if (rvSelected.id === Number(this.props.match.params.id)) {
                        return (
                        <>
                        {/* console.log(rvSelected.rv_description); */}
                        <span key={rvSelected.id}>
                            {rvSelected.rv_description}
                        </span>
                        <span><button onClick={this.handleBooking}>Continue to Booking</button></span>
                        </>
                        )
                    } else {
                        return(
                        <>
                        {/* <span key={rvSelected.id}>
                        </span> */}
                        </>)
                        
                        
                    }
                })}
            </div>
            </>
            // <>
            // {this.testFunction()}
            // </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Reservation);