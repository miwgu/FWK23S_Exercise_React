import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import UseState_page from './UseState_page'
import Props_page from './Props_page'
import UseEffect_Page from './UseEffect_Page'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/nav/MyNav'
import { useState } from 'react'
import TodoList_Page from './TodoList_Page'
import Meal_Page from './Meal_Page'

function App() {
  const [searchTerm, setSearchTerm]= useState('');

  const handleSearch = (term) =>{
    setSearchTerm(term);
  };

  return (
  <div>
  <MyNav onSearch={handleSearch} />
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/usestete' element={<UseState_page/>}/>
     <Route path='/props' element={<Props_page/>}/>
     <Route 
     path='/useeffect' 
     element={<UseEffect_Page searchTerm={searchTerm} />}
     />
     <Route path='/todo' element={<TodoList_Page/>}/>
     <Route path='/meal' element={<Meal_Page searchTerm={searchTerm}/>}/>
    </Routes>

  </div>
  )
}

export default App
