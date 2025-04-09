import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout/Mainlayout'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<div>Home</div>}/>
          <Route path='/forbidden' element={<div>forbidden</div>}/>
          <Route path='/addquestion' element={<div>add question</div>}/>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
