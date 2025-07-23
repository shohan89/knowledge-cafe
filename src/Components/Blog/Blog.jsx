import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={title} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmarks(blog)} className='ml-2 text-2xl cursor-pointer'><CiBookmark /></button>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {hashtags.map((tag, index) => (
                    <span key={index} className='text-blue-500'><a href="#">#{tag} </a></span>
                ))}
            </p>
            <button onClick={()=> handleReadingTime(reading_time)} className='text-purple-600 font-bold underline cursor-pointer'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired // Assuming you will pass a blog object
}
export default Blog;