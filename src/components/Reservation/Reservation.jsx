import React, {Component} from 'react';
import {connect} from 'react-redux';

class Reservation extends Component {

    componentDidMount () {
        // this.testFunction();
        this.props.dispatch({
            type: 'FETCH_RVS'
        })
    }



    // testFunction = (id) => {
    //     let apples = Number(this.props.match.params.id)
    //     let oranges = this.props.reduxState.rvs
    //     console.log(oranges);
    //     for (let i = 0; i <= oranges.length; i++) {
    //         if (apples == oranges[i].id){
    //             return <p>{oranges[i].rv_description}</p>
    //         } else {
    //             return <h1>404</h1>
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
                        </>
                        )
                    } else {
                        return(
                        <>
                        <span key={rvSelected.id}>
                            not the right rv fool!
                        </span>
                        </>)
                        
                        
                    }
                })}
            </div>
            </>

        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Reservation);