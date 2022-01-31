import { NavLink, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"
import "./Main.css"

function Main() {

    const [pupils, setPupils] = useState([])
    const [data, setData] = useState(pupils)
    const[searchValue, setSearchValue]= useState("")
    const[sortType, setSortType] = useState("all")
    const[asced, setAsced] = useState([])
    const[asc, setAsc] = useState("ascdesc")
    const [web, setWeb] = useState([]);
    const [smm, setSmm] = useState([]);
    const [graphic, setGraphic] = useState([]);
    const [android, setAndroid] = useState([]);
    const Navigate = useNavigate()
    
    useEffect(()=> {
        fetch('http://localhost:3000/pupils')
        .then(res=> res.json())
        .then(data=> setPupils(data));
       
    },[pupils])

    useEffect(()=>{
        setData((_) => {
            let newArr = pupils.filter(p=>p.content.includes(searchValue))
            return newArr
        })
    },[searchValue])

    const sortPupils = (e) =>{
        setSortType(e.target.value)
        console.log(e.target.value);

        if(e.target.value == "web"){

            const filteredPupils = pupils.filter(p => p.course=="web");
            setWeb(filteredPupils);
        }else if(e.target.value == "graphic"){
    
            const filteredPupils = pupils.filter(p => p.course=="graphic");
            setGraphic(filteredPupils);
        }else if(e.target.value == "android"){
            const filteredPupils = pupils.filter(p => p.course=="android");
            setAndroid(filteredPupils);
        }else if(e.target.value == "smm"){
            const filteredPupils = pupils.filter(p => p.course=="smm");
            setSmm(filteredPupils);
        }
    }
    const sortAsced=(e)=>{
        setAsc(e.target.value)
        if(e.target.value == "asc"){

            fetch('http://localhost:3000/pupils?_sort=content&_order=asc')
            .then(res=> res.json())
            .then(data=> setData(data));
        }else if(e.target.value == "desc"){
            fetch('http://localhost:3000/pupils?_sort=content&_order=desc')
            .then(res=> res.json())
            .then(data=> setData(data));
        }else if(e.target.value == "ascdesc"){
            fetch('http://localhost:3000/pupils')
            .then(res=> res.json())
            .then(data=> setData(data));
        }
    }
    const deletePupil =(id) =>{
        fetch(`http://localhost:3000/pupils/${id}`,{
            method: "DELETE",

        }).catch((e)=> console.error(e));
        
    }
    
    const openUpdatePage=(e,p)=>{
        console.log(p);
       Navigate("/updateuser");
    }

    return (
      <div className="container">
        <h1 className="main-h1">Pupils' Information</h1>
        <div className="main-top">
            <input onChange = {(e)=>setSearchValue(e.target.value)} placeholder="Search.." className="main-input"/>
            <select defaultValue={"ascdesc"} onChange = {(e)=>sortAsced(e)}  className="main-select">
                <option value="ascdesc">Sort by Alph</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <select  onChange={(e) => sortPupils(e)} className="main-select">
                <option value="all">Sort by Course</option>
                <option value="smm">SMM</option>
                <option value="web">Web Programming</option>
                <option value="graphic">Graphic Designer</option>
                <option value="android">Android Programming</option>
            </select>
            <NavLink to = "/adduser">
                <button>Add user</button>
            </NavLink>
        </div>
        <div className="Table">
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Surname</th>
                        <th>Course</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {sortType === "all" &&
                         data.map(p => {
                            return(
                                <tr onDoubleClick={(e)=>openUpdatePage(e,p)} key={p.id}>
                                    <td>{p.content}</td>  
                                    <td>{p.age}</td>
                                    <td>{p.surname}</td>
                                    <td>{p.course}</td>
                                    <td >{p.phoneNumber}
                                        <button onClick={()=>deletePupil(p.id)} className="deleteBtn">x</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    {sortType === "web" &&
                         web.map(p => {
                            return(
                                <tr key={p.id}>
                                    <td>{p.content}</td>
                                    <td>{p.age}</td>
                                    <td>{p.surname}</td>
                                    <td>{p.course}</td>
                                    <td >{p.phoneNumber}
                                        <button onClick={()=>deletePupil(p.id)} className="deleteBtn">x</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    {sortType === "smm" &&
                         smm.map(p => {
                            return(
                                <tr key={p.id}>
                                    <td>{p.content}</td>
                                    <td>{p.age}</td>
                                    <td>{p.surname}</td>
                                    <td>{p.course}</td>
                                    <td >{p.phoneNumber}
                                        <button onClick={()=>deletePupil(p.id)} className="deleteBtn">x</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    {sortType === "graphic" &&
                         graphic.map(p => {
                            return(
                                <tr key={p.id}>
                                    <td>{p.content}</td>
                                    <td>{p.age}</td>
                                    <td>{p.surname}</td>
                                    <td>{p.course}</td>
                                    <td >{p.phoneNumber}
                                        <button onClick={()=>deletePupil(p.id)} className="deleteBtn">x</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    {sortType === "android" &&
                         android.map(p => {
                            return(
                                <tr key={p.id}>
                                    <td>{p.content}</td>
                                    <td>{p.age}</td>
                                    <td>{p.surname}</td>
                                    <td>{p.course}</td>
                                    <td >{p.phoneNumber}
                                        <button onClick={()=>deletePupil(p.id)} className="deleteBtn">x</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
      </div>
    );
  }
  
  export default Main;