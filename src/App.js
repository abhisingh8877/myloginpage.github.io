import React,{useState} from "react";
import "./css/app.css";
 import {FcLock,FcBusinessContact} from "react-icons/fc";
 import {GoogleLogin} from "react-google-login";
const App=()=>{
  const [details,setDetails]=useState({
    username:"",
    password:"",
  });
  const[user,setUser]=useState();
  const handleClick=(e)=>{
    const{name,value}=e.target;

setDetails((prev)=>{
  return{...prev,[name]:value}
})
  }
  const[myFname,setFMyName]=useState("");
  const[email,setEmail]=useState("");
  const[url,setUrl]=useState("");
  const handleSubmit=(event)=>{
event.preventDefault();
console.log(details);
setUser(details.username);
  }
  const responseGoogle=(response)=>{
  setFMyName(response.profileObj.name);
  setEmail(response.profileObj.email);
  setUrl(response.profileObj.imageUrl);

  }

  
  return(
<>

<form onSubmit={handleSubmit}>
<div className="form">
<h1 >LOGIN </h1>
<h3>Hey {user}</h3>
<div className="form-input">
<div className="form-label">
<label htmlfor="name">Username: </label></div>
<FcBusinessContact/>
  <input type="text" id="email" name="username" onChange={handleClick} required></input>
  </div>
  <div className="form-input">
  <div className="form-label">
  <label htmlfor="password">Password:</label>
  </div>
  <FcLock/>
  
  <input type="password"minLength="4" maxlenght="10"id="password"  name="password" onChange={handleClick} required></input>
  </div>
  <button type="submit" className="button">Login</button>
  <div class="forget-link">
    <a href="#">forget password</a>
  
  </div>
  <h2>welcome {myFname}</h2>
  <GoogleLogin
    clientId="610210638041-oos13ehsl1co4dip6u4dpducm5lqtm3o.apps.googleusercontent.com"
    buttonText="Login with google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
</div>

  </form>

  </>
  )
}
export default App;