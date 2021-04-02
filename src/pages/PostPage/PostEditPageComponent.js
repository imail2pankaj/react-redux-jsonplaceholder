import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import { getPost, editPost } from '../../actions/postActions'

const PostEditPageComponent = (props) => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const { post, getPost } = props;

    const [formData, setFormData] = useState({ title: "", body: "" })

    useEffect(() => {
        getPost(id);
        setFormData(post);
    }, [getPost, id]);

    const handleChange = (e) => {
        const { target: {value, name} } = e;
        let data = formData;
        setFormData({
            ...data,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editPost(id, formData));
    }
    return (
        <>
            {props.is_loading && <Loading />}
            {!props.is_loading && post &&
                <div>
                    <PageTitle>Edit Post</PageTitle>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" onChange={handleChange} name="title" value={formData.title} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Body</label>
                                    <textarea name="body" onChange={handleChange} className="form-control" rows="5" value={formData.body}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <Link to="/posts" className="btn btn-danger">Cancel</Link>
                                    <input type="submit" className="btn btn-primary ml-2" value="Save" name="submit_post" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
const mapStateToProps = state => {
    return {
        post: state.postReducer.post,
        is_loading: state.postReducer.is_loading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(getPost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostEditPageComponent);
