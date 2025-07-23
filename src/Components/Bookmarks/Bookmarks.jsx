import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 p-4 rounded-lg mt-4 sticky top-0">
            <div className="bg-purple-200 p-4 rounded-lg mb-4 border-2 border-purple-400">
                <h3 className="font-bold">Spent time on read: {readingTime} mins</h3>
            </div>
            <h2 className="text-2xl font-bold">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}
                    bookmark={bookmark} />)
            }
        </div>
    );
};

export default Bookmarks;