const Navbar = () => {
    return (
       <nav className="navbar">
           <h1>Mindful Blog</h1>
           <div className="links">
               <a href="/">Home</a>
               <a href="/login" style={{
                   color:"white",
                   backgroundColor: "#db324d",
                   borderRadius: "8px"
               }} >Login</a>
           </div>
       </nav>
      );
}
 
export default Navbar;