import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import Comment from './CommentComponent';
import { getPost, getPostComments } from '../../actions/postActions'

const PostDetailsPageComponent = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const postReducer = useSelector(state => state.postReducer);

    const { post, comments, is_loading } = postReducer;

    useEffect(() => {
        dispatch(getPost(id));
        dispatch(getPostComments(id));
        // eslint-disable-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {is_loading && <Loading />}
            {!is_loading && post &&
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

export default PostDetailsPageComponent;
