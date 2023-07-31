import { useState } from 'react'
import SearchAppBar from './Navbar/Navbar'
import './App.css'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'

function App() {
  const [search,setSearch]=useState("")

  return (
    <>
      <SearchAppBar setSearch={setSearch}/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
