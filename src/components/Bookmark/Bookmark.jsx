const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
