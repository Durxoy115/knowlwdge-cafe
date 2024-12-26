import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, bookmarks, handleReadingTime }) => {
  const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

  // Check if this blog is bookmarked
  const isBookmarked = bookmarks.some((b) => b.id === id);

  return (
    <div className="mb-20">
      <img className="w-full" src={cover} alt={`Cover picture title ${title}`} />
      <div className="flex justify-between">
        <div className="flex mt-4">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="mt-4">
          <span>{reading_time} Min read</span>
          <button
            onClick={() => handleBookMark(blog)}
            className="ml-3 text-2xl text-black"
          >
            {isBookmarked ? <FaBookmark /> : <CiBookmark />}
          </button>
        </div>
      </div>
      <h2 className="text-4xl mt-4 pb-2">{title}</h2>
      <div>
        {hashtags.map((hash, index) => (
          <span key={index} className="mr-2">
            <a href="#">#{hash}</a>
          </span>
        ))}
        <div>
          <button
            onClick={() => handleReadingTime(reading_time)}
            className="text-purple-600 underline mt-4"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;
