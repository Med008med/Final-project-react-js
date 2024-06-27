
import { useState } from 'react';
import './App.css';
import './components/Todo.jsx';
import Nav from './components/Nav.jsx';
import Todo from './components/Todo.jsx';
import Quote from './components/Quote.jsx';
import { Route, Routes } from 'react-router-dom';
import Timer from './components/Timer.jsx';
import Home from './components/Home.jsx';
import Modal from './components/Modal.jsx';
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      
      <Nav/>
      <Routes >
        <Route path="/" element={<Home/>}/> 
        <Route path="/Timer" element={<Timer/>}/>
        <Route path="/To-Do-List" element={<Todo setTodos={setTodos} todos={todos} />}/>
        <Route path="/Quote" element={<Quote/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
