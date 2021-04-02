import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import {
    getAllUsers
} from '../../actions/userActions'
const UserPageComponent = (props) => {
    const { users, getAllUsers, is_loading } = props;
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);
    return (
        <>
            <PageTitle>Users</PageTitle>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {is_loading ? <tr><td colSpan="5"><Loading></Loading></td></tr> :
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <NavLink to={'/users/' + user.id}>View</NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
        is_loading: state.userReducer.is_loading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPageComponent);
