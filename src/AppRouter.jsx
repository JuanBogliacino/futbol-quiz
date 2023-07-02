import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IndexCategory from './components/IndexCategory'


const AppRouter = () => {
  return (
    <>
     <Navbar />

     <Routes>
        <Route path='/' element={<IndexCategory />} />

        <Route path='/futbol-quiz' element={<HomePage />} />
        <Route path='/futbol-quiz/category/:category' element={<CategoryPage />} />
     </Routes>

     <Footer />
    </>
  )
}

export default AppRouter