import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import DeleteConfirmation from '../../components/DeleteConfirmation';
import {
  getAllPosts
} from '../../actions/postActions'
const PostPageComponent = (props) => {
  const { posts, getAllPosts, is_loading } = props;

  const [id, setId] = useState(null);
  const [show, showPopup] = useState(false);

  const handleClose = () => showPopup(false);
  const handleShow = (id) => {
    setId(id);
    showPopup(true);
  };

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {show && <DeleteConfirmation postId={id} show={show} handleClose={handleClose} />}
      <PageTitle>Posts</PageTitle>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {is_loading ? <tr><td colSpan="4"><Loading></Loading></td></tr> :
            posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td width="20%">{post.title}</td>
                <td width="60%">{post.body}</td>
                <td>
                  <NavLink to={'/posts/' + post.id} className="btn btn-sm btn-primary">
                    <i className="fa fa-eye"></i>
                  </NavLink>
                  <NavLink to={'/posts/' + post.id + '/edit'} className="btn btn-sm btn-primary ml-2">
                    <i className="fa fa-pencil"></i>
                  </NavLink>
                  <Button className="btn btn-sm btn-danger ml-2" onClick={() => handleShow(post.id)}>
                    <i className="fa fa-trash"></i>
                  </Button>
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
    posts: state.postReducer.posts,
    is_loading: state.postReducer.is_loading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPageComponent);
