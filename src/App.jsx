import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import UseState_page from './UseState_page'
import Props_page from './Props_page'
import UseEffect_Page from './UseEffect_Page'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/nav/MyNav'

function App() {

  return (
  <div>
  <MyNav />
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/usestete' element={<UseState_page/>}/>
     <Route path='/props' element={<Props_page/>}/>
     <Route path='/useeffect' element={<UseEffect_Page/>}/>
    </Routes>

  </div>
  )
}

export default App
