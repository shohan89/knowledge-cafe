import PropTypes from 'prop-types';

const Blog = () => {
    return (
        <div>
            <h3>Single Blog</h3>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired, // Assuming you will pass a blog object
}
export default Blog;