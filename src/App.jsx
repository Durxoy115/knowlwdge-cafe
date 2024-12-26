import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Headers from './components/Hearder/Headers';

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    const isAlreadyBookmarked = bookMarks.some((b) => b.id === blog.id);
    if (!isAlreadyBookmarked) {
      setBookMarks([...bookMarks, blog]); // Add to bookmarks
    } else {
      setBookMarks(bookMarks.filter((b) => b.id !== blog.id)); // Remove from bookmarks
    }
  };

  const handleReadingTime = (time) => {
    setTotalReadingTime((prevTime) => prevTime + time); // Increase total reading time
  };

  return (
    <div>
      <Headers />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          bookmarks={bookMarks}
          handleBookMark={handleBookMark}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks bookmarks={bookMarks} totalReadingTime={totalReadingTime} />
      </div>
    </div>
  );
}

export default App;
