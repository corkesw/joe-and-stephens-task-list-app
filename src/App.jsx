import AddTask from './components/AddTask';
import './App.css';
// import DisplayList from './components/DisplayList';
import Header from './components/Header';
import {useState} from 'react';
import Footer from './components/Footer'
import CardView from './components/CardView';

function App() {
  const [list, setList] = useState([
    {name: 'Wash the car', completed: false, category:'CHORES', important: true},
    {name: 'Do the dishes', completed: false, category:'CHORES', important: false},
    {name: 'Clean the windows', completed: false, category:'CHORES', important: false},
    {name: 'Feed the dog', completed: true, category:'PET STUFF', important: true},
    {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel dolores iusto iure autem nulla ipsum velit, quis consequuntur eos quae numquam blanditiis labore rerum praesentium animi esse, corrupti eum', completed: true, category:'PET STUFF', important: true}

  ])
  const [view, setView] = useState('light')
  const [categories, setCategories] = useState(['CHORES', 'PET STUFF', "SPORT"])

  return (
   <div className={view}> 
   <Header />,
   <AddTask setList={setList} list={list} setCategories={setCategories} categories={categories}/>,
   {/* <DisplayList list={list} setList={setList}/> */}
   <CardView list={list} setList={setList} categories={categories}/>
   <Footer view={view} setView={setView}/>
   </div>
  );
}

export default App;


