
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import UserList from './UserList';



function App() {

const [useroList,setUseroList]=useState([])
useEffect (()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((res)=>{setUseroList(res.data)

  })

},[])
console.log(useroList,'useroList')


  return (
    <div className="App" style={{display:"flex",flexWrap:"wrap" }}>
      {useroList.map((e)=><UserList user={e} />)}
    </div>
  );
}

export default App;
