const BlogList = ({blogs}) => {
    
    return ( 

        <div className="blog-list">
          <h1>All blogs</h1>
              {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
          {/* <img src={`./${blog.image}.jpg`} alt="An Image"/>
          
          <h2>{ blog.title }</h2>
          <p>{ blog.date }</p>
          <p>{ blog.price }</p>
          <p>{ blog.seats }</p> */}
        <div className="card">
          <div className="car-image">
            <h2>Title</h2>
            <p>Text</p>
          </div>
        </div>

        </div>
      ))}
        </div>

     );
}
 
export default BlogList;