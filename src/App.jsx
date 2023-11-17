import { useState } from 'react';
import { Button } from './components/Button'
import './App.css'


function App() {
  const [value, setValue] = useState('');
  const [storage, setStorage] = useState([]);
  console.log(storage)
  return (
    <>
      <Button />

      <div className='to-do-list'>
        <input onChange={(e)=>{
          setValue(e.target.value);
        }}/>
        <button onClick={()=> {
          const newStorage = [...storage, value];
          setStorage(newStorage)
        }}> Add </button>
        <ul>
    { storage.map((el, index)=> {
        return(
            <li key = {index}> {el} </li>
        )
    })}
    </ul>
      </div>
    </>
  )
}

export default App;