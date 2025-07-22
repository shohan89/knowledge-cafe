import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // Logic to fetch blogs can be added here
    useEffect(()=>{
        try{
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                console.log("🚀 ~ useEffect ~ data:", data)
            })
        } catch(error){
            console.error("Failed to fetch blogs:", error);
        }
    },[]);
    return (
        <div>
            <h3>This is blogs components.</h3>
        </div>
    );
};

export default Blogs;