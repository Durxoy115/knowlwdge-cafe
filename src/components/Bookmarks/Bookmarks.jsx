import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, totalReadingTime }) => {
  return (
    <div className="md:w-1/3">
      {/* Total Reading Time Section */}
      <div className="mb-6">
        <h4 className="text-2xl  text-center text-blue-500">
          Total Reading Time: {totalReadingTime} Min
        </h4>
      </div>
      <div className=" bg-gray-300 m-4 p-4">
        {/* Bookmarked Blogs Section */}
        <div>
          <h4 className="text-2xl text-center mt-4">
            Bookmarked Blogs: {bookmarks.length}
          </h4>
          {bookmarks.map((bookmark, index) => (
            <Bookmark key={index} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
