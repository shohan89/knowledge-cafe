import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 p-4 rounded-lg mt-4 sticky top-0">
            <h2 className="text-2xl">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}
                    bookmark={bookmark} />)
            }
        </div>
    );
};

export default Bookmarks;