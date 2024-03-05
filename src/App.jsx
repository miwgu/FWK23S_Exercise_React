import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import UseState_page from './components/usestate/UseState_page'
import Props_page from './components/props/Props_page'
import UseEffect_Page from './components/useeffect/UseEffect_Page'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/nav/MyNav'
import { useState } from 'react'
import TodoList_Page from './components/todo_list/TodoList_Page'
import Meal_Page from './components/meals/Meal_Page'
import MealDetails from './components/meals/MealDetails'

function App( ) {
  const [searchTerm, setSearchTerm]= useState('');

  const handleSearch = (term) =>{
    setSearchTerm(term);
  };

  return (
  <div>
  <MyNav onSearch={handleSearch} />
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/usestete' element={<UseState_page />}/>
     <Route path='/props' element={<Props_page/>}/>
     <Route 
     path='/useeffect' 
     element={<UseEffect_Page searchTerm={searchTerm}/>}
     />
     <Route path='/todo' element={<TodoList_Page/>}/>
     <Route path='/meal' element={<Meal_Page searchTerm={searchTerm}/>}/>
     <Route path="/meal-details/:mealId" element={<MealDetails />} />
    </Routes>

  </div>
  )
}

export default App
