import AddTask from './AddTask';
import './App.css';
import DisplayList from './DisplayList';
import Header from './Header';
import {useState} from 'react';
import Footer from './Footer'

function App() {
  const [list, setList] = useState([
    {name: 'Wash the car', completed: false},
    {name: 'Do the dishes', completed: false},
    {name: 'Feed the dog', completed: true}
  ])
  const [view, setView] = useState('light')

  return (
   <div className={view}> 
   <Header />,
   <AddTask setList={setList}/>,
   <DisplayList list={list} setList={setList}/>
   <Footer view={view} setView={setView}/>
   </div>
  );
}

export default App;


