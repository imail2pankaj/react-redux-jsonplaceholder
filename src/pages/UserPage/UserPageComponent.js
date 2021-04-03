import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import {
    getAllUsers
} from '../../actions/userActions'
const UserPageComponent = (props) => {
    const dispatch = useDispatch()
    const userSelector = useSelector(state => state.userReducer);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(getAllUsers());
    }
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
                    {userSelector.is_loading ? <tr><td colSpan="5"><Loading></Loading></td></tr> :
                        userSelector.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={'/users/' + user.id}>View</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default UserPageComponent;
