import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/Hearder/Headers'

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMark = (blog) => {
      const isAlreadyBookmarked = bookMarks.some((b) => b.id === blog.id);
      if (!isAlreadyBookmarked) {
          setBookMarks([...bookMarks, blog]); // Add to bookmarks
      } else {
          setBookMarks(bookMarks.filter((b) => b.id !== blog.id)); // Remove from bookmarks
      }
  };

  return (
      <div>
          <Headers />
          <div className="md:flex max-w-7xl mx-auto">
              <Blogs bookMarks={bookMarks} handleBookMark={handleBookMark} />
              <Bookmarks bookmarks={bookMarks} />
          </div>
      </div>
  );
}

export default App;

