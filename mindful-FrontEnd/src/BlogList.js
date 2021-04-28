const BlogList = ({blogs}) => {
    
    return ( 

        <div className="blog-list">
          <h1>All blogs</h1>
        
              {blogs.map(blog => (
        <div className="cards" key={blog._id} >
          {/* <img src={`./${blog.image}.jpg`} alt="An Image"/>
          
          <h2>{ blog.title }</h2>
          <p>{ blog.date }</p>
          <p>{ blog.price }</p>
          <p>{ blog.seats }</p> */}
        {/* <div className="card">
         <img src="./image1.jpg" className="card-image" alt=""/>
            <h2>Title</h2>
            <p>Text</p>
          
          
        </div> */}
       
         <div className="card"></div>
       <div className="container">
           <img src="./image1.jpg" className="card-image" alt=""/>
        <div className="details">
          <h3>poop</h3> 
          <p>sdfdfsdfsdfsdf</p>
        </div>
       </div>

        </div>
        
      ))}
      
</div>
     );
}
 
export default BlogList;