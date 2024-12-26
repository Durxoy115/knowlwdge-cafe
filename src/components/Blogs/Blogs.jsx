import { useEffect, useState } from "react";
import Blog from "../Blog";

// eslint-disable-next-line react/prop-types
const Blogs = ({ handleBookMark, bookmarks,handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3 mt-3">
            {blogs.map((blog) => (
                <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleBookMark={handleBookMark} 
                    handleReadingTime = {handleReadingTime}
                    bookmarks={bookmarks} 
                />
            ))}
        </div>
    );
};

export default Blogs;
