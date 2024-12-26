import { useState, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Headers from './components/Hearder/Headers';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';

function App() {
  const [bookMarks, setBookMarks] = useState(() => getLocalStorage('bookmarks', []));
  const [totalReadingTime, setTotalReadingTime] = useState(() => getLocalStorage('readingTime', 0));

  useEffect(() => {
    setLocalStorage('bookmarks', bookMarks);
  }, [bookMarks]);

  useEffect(() => {
    setLocalStorage('readingTime', totalReadingTime);
  }, [totalReadingTime]);

  const handleBookMark = (blog) => {
    const isAlreadyBookmarked = bookMarks.some((b) => b.id === blog.id);
    if (!isAlreadyBookmarked) {
      setBookMarks([...bookMarks, blog]);
    } else {
      setBookMarks(bookMarks.filter((b) => b.id !== blog.id));
    }
  };

  const handleReadingTime = (time) => {
    setTotalReadingTime(totalReadingTime + time);
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
