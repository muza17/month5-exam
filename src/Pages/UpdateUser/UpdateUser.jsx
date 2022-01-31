
import "./UpdateUser.css"

function UpdateUser() {


    return (
        <div className="UpdateUser">
            <div className="container">
                <div className="add-top">
                    <h1 className="add-h1">Update users here</h1>
                    
                </div>
                <form className="add-low">
                    <select className="add-select">
                        <option value="smm">SMM</option>
                        <option value="web">Web Programming</option>
                        <option value="graphic">Graphic Designer</option>
                        <option value="android">Android Programming</option>
                    </select>
                    <div className="add-inputs">
                        <div className="add-input-label">
                            <label for="name">Name :</label>
                            <input className="add-input" type="text" id="name"/>
                        </div>
                        <div className="add-input-label">
                            <label for="surname">Surname :</label>
                            <input className="add-input" type="text" id="surname"/>
                        </div>
                        <div className="add-input-label">
                            <label for="age">Age :</label>
                            <input className="add-input" type="number" id="age"/>
                        </div>
                        <div className="add-input-label">
                            <label for="number">Phone Number :</label>
                            <input className="add-input" type="text" id="number"/>
                        </div>
                    </div>
                    <div className="add-buttons">
                        <button>Go home</button>
                        <button>Update user</button>
                    </div>
                </form>
            </div>
      </div>
    );
  }
  
  export default UpdateUser;