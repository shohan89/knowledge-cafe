import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    // console.log("Adding to bookmarks:", blog);
    setBookmarks(prevBookmarks => [...prevBookmarks, blog]);
  }

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}/>
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  )
}

export default App
