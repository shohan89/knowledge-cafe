import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={title} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {hashtags.map((tag, index) => (
                    <span key={index} className='text-blue-500'><a href="#">#{tag} </a></span>
                ))}
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired, // Assuming you will pass a blog object
}
export default Blog;