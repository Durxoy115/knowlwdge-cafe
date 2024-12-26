import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h4 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h4>
            {bookmarks.map((bookmark, index) => (
                <Bookmark key={index} bookmark={bookmark} />
            ))}
        </div>
    );
};

export default Bookmarks;
