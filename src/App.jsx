import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function Menu() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#9e1212]">Menu</h2>
      <p className="mt-4 text-gray-700">Browse our selection of dishes and order your favorites today.</p>
    </main>
  )
}

function About() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#9e1212]">About Us</h2>
      <p className="mt-4 text-gray-700">Learn more about Commint Buka and our passion for serving great Filipino food.</p>
    </main>
  )
}

function Contact() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#9e1212]">Contact</h2>
      <p className="mt-4 text-gray-700">Have questions? Reach out and we’ll get back to you as soon as possible.</p>
    </main>
  )
}

function NotFound() {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#9e1212]">404</h2>
      <p className="mt-4 text-gray-700">Sorry, the page you are looking for does not exist.</p>
    </main>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer /> 
    </>
  )
}

export default App
