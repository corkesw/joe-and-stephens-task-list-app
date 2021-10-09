import AddTask from './components/AddTask';
import './App.css';
// import DisplayList from './components/DisplayList';
import Header from './components/Header';
import {useState} from 'react';
import Footer from './components/Footer'
import CardView from './components/CardView';

function App() {
  const [list, setList] = useState([
    {name: 'Wash the car', completed: false, category:'chores'},
    {name: 'Do the dishes', completed: false, category:'chores'},
    {name: 'Feed the dog', completed: true, category:'pet stuff'}
  ])
  const [view, setView] = useState('light')

  return (
   <div className={view}> 
   <Header />,
   <AddTask setList={setList}/>,
   {/* <DisplayList list={list} setList={setList}/> */}
   <CardView list={list} setList={setList}/>
   <Footer view={view} setView={setView}/>
   </div>
  );
}

export default App;


