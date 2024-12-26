import { useEffect, useState } from "react";
import Blog from "../Blog";

const Blogs = ({ handleBookMark, bookMarks }) => {
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
                    bookMarks={bookMarks} 
                />
            ))}
        </div>
    );
};

export default Blogs;
