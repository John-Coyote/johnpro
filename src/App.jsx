import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/Mainlayout'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/forbidden' element={<div>forbidden</div>}/>
          <Route path='/addquestion' element={<div>add question</div>}/>
          <Route path='/question/:id' element={<div>question page</div>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
