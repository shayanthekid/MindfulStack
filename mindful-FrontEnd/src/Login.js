import {useState,useEffect } from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const cookie_key = 'LoggedIn';
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [login,setLogged] = useState('');

    const handleSubmit = (e) =>{
    e.preventDefault();
    const user = {username,password};


    fetch('http://localhost:3000/single-user',{
        method: 'POST',
        headers: {"Content-Type": "application/json", username:username,password:password},
        body: JSON.stringify(user)
    })
    .then((res)=>{
          return res.json();
    })
    .then((data)=>{
   
        if(data.length === 0){
        console.log("invalid user");
        
            setLogged("Your username or password is incorrect");
       
        }
        else{     
            setLogged("Login Sucessful, you will be redirected shortly...");
    setTimeout(
     function() {
            bake_cookie(cookie_key, 'True');
            window.location.href='/';
    }
    .bind(this),
    3000
    );

        }
       
     
       
    })
    .catch((err)=>{
        console.log("Error");
      
    })
    }

    return (
        <div className="create">
            <h2>Login</h2>

<form onSubmit={handleSubmit}>
    <label >Username</label>
    <input type="text" 
    name="" 
    id=""
    required
    value={username}
    onChange={(e)=>setUsername(e.target.value)}/>
     <label >Password</label>
    <input type="Password" 
    name="" 
    id=""
    required
    value={password}
     onChange={(e)=>setPassword(e.target.value)}
    />
    <button>Login</button>
    <p>{login}</p>
</form>

        </div>
      );
}
 
export default Login;