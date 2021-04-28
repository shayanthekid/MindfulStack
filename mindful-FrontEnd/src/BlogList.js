const BlogList = ({blogs}) => {
    
    return ( 

        <div className="blog-list">
          <h1>All blogs</h1>
              {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
          <h2>{ blog.title }</h2>
          <p>{ blog.date }</p>
          <p>{ blog.price }</p>
          <p>{ blog.seats }</p>
        </div>
      ))}
        </div>

     );
}
 
export default BlogList;