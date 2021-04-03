import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import { getUser } from '../../actions/userActions'

const UserDetailsPageComponent = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const userSelector = useSelector(state => state.userReducer);

    const { user, user: { address, company }, is_loading } = userSelector;

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = () => {
        dispatch(getUser(id));
    }
    return (
        <>
            <PageTitle>User Page</PageTitle>
            {is_loading && <Loading></Loading>}
            {!is_loading && user && <div>
                <Row>
                    <Col><h4>Personal Details</h4></Col>
                    <Col><h4>Contact Details</h4></Col>
                    <Col><h4>Company Details</h4></Col>
                </Row>
                <Row>
                    <Col>
                        <b>Full Name</b>: {user.name}<br />
                        <b>Email</b>: {user.email}<br />
                        <b>Username</b>: {user.username}<br />
                        <b>Email</b>: {user.email}<br />
                        <b>Website</b>: {user.website}
                    </Col>
                    <Col>
                        <b>Street</b>: {address.street}<br />
                        <b>Suite</b>: {address.suite}<br />
                        <b>Zipcode</b>: {address.zipcode}<br />
                        <b>Geolocation</b>: {address.geo.lat},{address.geo.lng}
                    </Col>
                    <Col>
                        <b>Company</b>: {company.name}<br />
                        <b>Phrases</b>: {company.catchPhrase}<br />
                        <b>BS</b>: {company.bs}<br />
                    </Col>
                </Row>
            </div>}
        </>
    )
}

export default UserDetailsPageComponent;
