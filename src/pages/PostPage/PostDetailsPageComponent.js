import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import Comment from './CommentComponent';
import { getPost, getPostComments } from '../../actions/postActions'

const PostDetailsPageComponent = (props) => {
    const { id } = useParams();
    const { post, getPost, getPostComments, comments } = props;

    useEffect(() => {
        getPost(id);
        getPostComments(id);
    }, [getPost, getPostComments, id]);
    return (
        <>
            {props.is_loading && <Loading />}
            {!props.is_loading && post &&
                <div>
                    <PageTitle>{post.title}</PageTitle>
                    <p>{post.body}</p>
                    <hr />
                    <h4>Comments</h4>
                    <hr />
                    {
                        comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                </div>
            }
        </>
    )
}
const mapStateToProps = state => {
    return {
        post: state.postReducer.post,
        is_loading: state.postReducer.is_loading,
        comments: state.postReducer.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(getPost(id)),
        getPostComments: (id) => dispatch(getPostComments(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPageComponent);
