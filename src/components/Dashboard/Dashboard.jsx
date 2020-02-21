import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import MyReser from '../MyReservation/MyReservation';
import DashNav from '../DashNav/DashNav'


class UserPage extends Component {

  componentDidMount = () => {
    this.getReservation();
  }

  getReservation = () => {
    console.log('we working in dashboard');
    this.props.dispatch({
      type: 'FETCH_RESERVATION',
      payload: this.props.user.id
    })
  }
  render() {
    return (
      <>
      <DashNav />
        <h1 id="welcome">
          Welcome, {this.props.user.username} !
      </h1>
      <table>
        <thead>
          <tr>
            <td>RESERVATION ID</td>
            <td>RV</td>
            <td>RV DESCRIPTION</td>
            <td>PICK UP DATE</td>
            <td>RETURN DATE</td>
            <td>TOTAL PRICE</td>
            <td></td>
    <td></td>
          </tr>
            {this.props.getReser.map((reser) => {
              return (
                <MyReser key={reser.id} user_id={reser.user_id} rv={reser.rv_name} rvDes={reser.rv_description} id={reser.id} start={reser.pick_up_date} end={reser.drop_off_date} price={reser.total_price} rv_id={reser.rv_id} />
              )
            })}
        </thead>
      </table>
        <ul>
          {/* {JSON.stringify(this.props.getReser[3].pick_up_date)} */}
          {/* {JSON.stringify(this.props.getReser)} */}
        </ul>

      </>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  getReser: state.getReser,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
