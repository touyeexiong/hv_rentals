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
            {JSON.stringify(this.props.reduxState.user)}
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapStateToProps)(Profile);