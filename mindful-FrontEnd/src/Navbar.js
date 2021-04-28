import {Link} from 'react-router-dom';
import {useState,useEffect } from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const Navbar = () => {
const [cookie,setCookie] = useState(false);
    const cookie_key = 'LoggedIn';

    const loggout= ()=>{

        delete_cookie(cookie_key);
        window.location.href='/';
};

 useEffect(()=>{
  
if(read_cookie(cookie_key) == ''){
    setCookie(false);
}
else{
    setCookie(true);
}
 });
    return (
       <nav className="navbar">
           <h1>Mindful Blog</h1>
           <div className="links">
               <Link to="/">Home</Link>
             {!cookie &&  <Link to="/login" style={{
                   color:"white",
                   backgroundColor: "#db324d",
                   borderRadius: "8px"
               }} >Login</Link>}
              {cookie && <Link onClick={loggout} to="/" style={{
                   color:"white",
                   backgroundColor: "#417b5a",
                   borderRadius: "8px"
               }} >Logout</Link>}
           </div>
       </nav>
      );
}
 
export default Navbar;