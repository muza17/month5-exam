import { Route, Routes} from 'react-router-dom';


//pages

import Main from "./Pages/Main/Main"
import './App.css';
import AddUser from './Pages/AddUser/AddUser';
import UpdateUser from './Pages/UpdateUser/UpdateUser';


function App() {
  return (
    <>
      
      
      <Routes>
        <Route path ="/" element = {<Main/>}/>
        <Route path ="/adduser" element = {<AddUser/>}/>
        <Route path ="/updateuser" element = {<UpdateUser/>}/>
      </Routes>
    </>
  );
}

export default App;
