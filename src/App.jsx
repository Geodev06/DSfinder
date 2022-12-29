import { Routes, Route } from "react-router-dom"
/**components */
import About from "./components/About"
import SideNav from "./components/SideNav"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"



const App = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 ">
        <SideNav />
        <div className="md:col-span-2 md:px-16 md:py-6 bg-gray-800 w-100">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App