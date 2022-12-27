import "./styles.css";
import React, {useState} from 'react';


function App() {
  const [fname , setFname] = useState('');
  const [lname , setLname] = useState('');
  const [uname , setUname] = useState('');
  const [phoneNo , setPhoneNo] = useState('');
  const [email , setEmail] = useState('');
  const [fromDate , setFromDate] = useState('');
  const [lastDate , setLastDate] = useState('');
  const [desc , setDesc] = useState('');
  const [skill , setSkill] = useState('');
  
  
  
	const handleChange =(e)=>{
    setFname(e.target.value);
	}
  
	const handleLastChange =(e)=>{
    setLname(e.target.value);
	}
  
	const handleUserChange =(e)=>{
    setUname(e.target.value);
	}
  
  const handleEmailChange =(e)=>{
  setEmail(e.target.value);
  }

	const handlePhoneChange =(e)=>{
    setPhoneNo(e.target.value);
	}

	const handlefromDChange =(e)=>{
    setFromDate(e.target.value);
	}

	const handlelastDChange =(e)=>{
    setLastDate(e.target.value);
	}

	const handleDescChange =(e)=>{
    setDesc(e.target.value);
	}

	const handleSkillDChange =(e)=>{
    setSkill(e.target.value);
	}


  const handleSubmit=(e)=>{
    var date1 = new Date(fromDate);
    var date2 = new Date(lastDate);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var exp = Math.floor(Difference_In_Days / 30);
    var data = document.getElementById("data");
    data.innerHTML = `<td id="name"></td>`;
    data.innerHTML = data.innerHTML + `<td id="user" ></td>`;
    data.innerHTML = data.innerHTML + `<td id="phone"></td>`;
    data.innerHTML = data.innerHTML + `<td id="email"></td>`;
    data.innerHTML = data.innerHTML + `<td id="skill"></td>`;
    data.innerHTML = data.innerHTML + `<td id="exp"></td>`;
    data.innerHTML = data.innerHTML + `<td id="desc"></td>`;

    document.getElementById("name").innerHTML = fname + " " + lname;
    document.getElementById("user").innerHTML = uname;
    document.getElementById("phone").innerHTML = phoneNo;
    document.getElementById("email").innerHTML = email;
    document.getElementById("skill").innerHTML = skill;
    document.getElementById("exp").innerHTML = exp + " Month";
    document.getElementById("desc").innerHTML = desc;
  	e.preventDefault();
  }
  
return (
  <>
    <section class="container">
      <div class="left-half">
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <label>First Name: </label>
        <input type="text" value={fname} 
        required onChange={(e) => {handleChange(e)}} /><br/>
      
        <label>Last Name: </label>
        <input type="text" value={lname} 
        required onChange={(e) => {handleLastChange(e)}} /><br/>
      
        <label>User Name: </label>
        <input type="text" value={uname} 
        required onChange={(e) => {handleUserChange(e)}} /><br/>
        
        <label>Phone No: </label>
        <input type="text" value={phoneNo} 
        required onChange={(e) => {handlePhoneChange(e)}} maxlength="10" /><br/>
        
        <label>Email Id: </label>
        <input type="text" value={email} 
        required onChange={(e) => {handleEmailChange(e)}} /><br/>
        
        <label>SKILLS: </label>
        <select onChange={(e) => {handleSkillDChange(e)}} value={skill}>
            <option selected disabled hidden>Choose Here</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>REACT</option>
            <option>TYPESCRIPT</option>
            <option>CSS3</option>
            <option>JAVASCRIPT</option>
            <option>JQUERY</option>
        </select><br/>
        
        <label>Total Experience: </label>
        <input type="date" value={fromDate} name="Joing Date" 
        onChange={(e) => {handlefromDChange(e)}} />
        <input type="date" value={lastDate} name="Exit Date" 
        onChange={(e) => {handlelastDChange(e)}} /><br/>
        
        <label>Description: </label>
        <input type="text" value={desc} 
        required onChange={(e) => {handleDescChange(e)}} maxLength="250"/><br/>
        
        <input type="submit" value="Submit"/>
      </form>
      </div>

      <div class="right-half">
        <div id="display">
            <table>
              <tr>
                <th>Name: </th>
                <th>userName: </th>
                <th>PhoneNo. </th>
                <th>Email Id: </th>
                <th>SKILLS: </th>
                <th>Total Experience: </th>
                <th>Description: </th>
              </tr>
              <tr id="data"></tr>
            </table>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;

