import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class ReservedDates extends Component {
    render() {
        return(
            <>
            <tr key={this.props.id}>
                    <td></td>
                    <td>{moment(this.props.start).format("LL")}</td>
                    <td>{moment(this.props.end).format("LL")}</td>

            </tr>
            </>
        )
    }
}

export default connect()(ReservedDates);