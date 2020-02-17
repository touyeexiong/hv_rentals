import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashNav from '../DashNav/DashNav';

class Profile extends Component {

    
    componentDidMount () {

    }
    
    render() 
    {
        console.log(this.props.reduxState.user);
        
        return(
            <>
            <DashNav />
            <h2>we in Profile now</h2>
            <div><h3>Username: {this.props.reduxState.user.username}</h3></div>
            <div><h3>Email: {this.props.reduxState.user.email_address}</h3></div>
            {/* {JSON.stringify(this.props.reduxState.user)} */}
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapStateToProps)(Profile);