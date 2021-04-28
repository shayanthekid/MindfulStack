import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
       <nav className="navbar">
           <h1>Mindful Blog</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/login" style={{
                   color:"white",
                   backgroundColor: "#db324d",
                   borderRadius: "8px"
               }} >Login</Link>
           </div>
       </nav>
      );
}
 
export default Navbar;