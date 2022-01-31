import {useState, useEffect} from "react"
import "./AddUser.css"

function AddUser() {

    const [pupils, setPupils] = useState([])
    const [course, setCourse] = useState("smm")
    const [name, setName] = useState("")
    const [surname, setSurName] = useState("")
    const [age, setAge] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    

    useEffect(()=> {
        fetch('http://localhost:3000/pupils')
        .then(res=> res.json())
        .then(data=> setPupils(data))
    },[pupils])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPupil = {
            id: new Date().getTime(),
            content: name,
            course: course,
            surname: surname,
            age: age,
            phoneNumber: phoneNumber

        }

        console.log(course);
        e.target[0].value= null;

        fetch('http://localhost:3000/pupils',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPupil)
        })
        .catch(e => console.error(e))

    }

    return (
      <div className="AddUser">
        <div className="container">
            <div className="add-top">
                <h1 className="add-h1">Add users here</h1>
                
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} className="add-low">
                <select onChange={(e) => setCourse(e.target.value)} className="add-select">
                    <option value="smm">SMM</option>
                    <option value="web">Web Programming</option>
                    <option value="graphic">Graphic Designer</option>
                    <option value="android">Android Programming</option>
                </select>
                <div className="add-inputs">
                    <div className="add-input-label">
                        <label for="name">Name :</label>
                        <input onChange={(e) => setName(e.target.value)} placeholder="Name" className="add-input" type="text" id="name"/>
                    </div>
                    <div className="add-input-label">
                        <label for="surname">Surname :</label>
                        <input onChange={(e) => setSurName(e.target.value)} placeholder="Surname" className="add-input" type="text" id="surname"/>
                    </div>
                    <div className="add-input-label">
                        <label for="age">Age :</label>
                        <input onChange={(e) => setAge(e.target.value)} placeholder="Age" className="add-input" type="number" id="age"/>
                    </div>
                    <div className="add-input-label">
                        <label for="number">Phone Number :</label>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="add-input" type="text" id="number"/>
                    </div>
                </div>
                <div className="add-buttons">
                    <button>Go home</button>
                    <button type="submit">Add user</button>
                </div>
            </form>
            
        </div>

      </div>
    );
  }
  
  export default AddUser;