import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import { getUser } from '../../actions/userActions'

const UserDetailsPageComponent = (props) => {
    const { id } = useParams();
    const { user, getUser, user: { address, company } } = props;

    useEffect(() => {
        getUser(id);
    }, [getUser, id]);
    return (
        <>
            <PageTitle>User Page</PageTitle>
            {props.is_loading && <Loading></Loading>}
            {!props.is_loading && user && <div>
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
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        is_loading: state.userReducer.is_loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUser: (id) => dispatch(getUser(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPageComponent);
