import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]); // Initialize bookmarks state
  const [readingTime, setReadingTime] = useState(0); // Initialize reading time state
  const handleAddToBookmarks = (blog) => {
    // console.log("Adding to bookmarks:", blog);
    setBookmarks(prevBookmarks => [...prevBookmarks, blog]);
  }
  const handleReadingTime = time =>{
    // console.log("Reading time:", time);
    setReadingTime(prevReadingTime => prevReadingTime + time);
  }

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}
        handleReadingTime={handleReadingTime}
        />
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}
        />
      </div>
    </>
  )
}

export default App
