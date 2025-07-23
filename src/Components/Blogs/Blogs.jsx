import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    // Logic to fetch blogs can be added here
    useEffect(()=>{
        try{
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        } catch(error){
            console.error("Failed to fetch blogs:", error);
        }
    },[]);
    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleReadingTime={handleReadingTime}
                     />)
            }
        </div>
    );
};

export default Blogs;