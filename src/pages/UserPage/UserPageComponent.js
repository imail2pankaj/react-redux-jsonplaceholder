import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    getAllUsers
} from '../../actions/userActions'
const UserPageComponent = (props) => {
    useEffect(() => {
      props.getAllUsers();
    }, [props]);
    return (
        <>
            <h1>User Page</h1>
        </>
    )
}
const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPageComponent);
