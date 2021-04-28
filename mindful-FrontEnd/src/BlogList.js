const BlogList = ({blogs}) => {
    
    return ( 

        <div className="blog-list">
          <h1>All blogs</h1>
        
        <div className="blog_container">
              {blogs.map(blog => (
        <div className="blog_item" key={blog._id} >
          <img src={`./${blog.image}.jpg`} alt="An Image"/>
          
          <h2>{ blog.title }</h2>
          <img  className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABJUlEQVRYR+2YYQ3CMBCFvykACeAAB+AADTjAAaAAC0gAB6AAJCABHJBbOrLAuvWNNtnI+ofR3F5f7t1d85bRsZV1jA+9JrQFNi6jO8D+1y01PsdSMqQeoMb3i9AM2AOLREV/BEz22yd+lWQT4AqME5EpYB/AFLDf96oitHbZScwnh18BhyZC5WJMTeqrW6syNBBSJAsZgKqstfOpSbKBUK8zZFN77grmApzds7ofrYZ8QLH2vZdrrANUHJmQSVNctiZXWTJlP5pk6rzxxf8vIbWbfPHRMqQWqRovF7V6gBovExq6rGjTVvZFmAnRilo4s72B7MVt3znXYX7sDoxiaeTBeQLmARt9mb1vztWKb5mI1MnhBznXRBzCYJWvH2GIP0Z1jtALgzqaJSjrXasAAAAASUVORK5CYII="/>
          <p className="snippet">{ blog.date }</p>
          <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACcklEQVRYR+2Y3XFUMQyFz1ZAUgFQQUgFoQOgAkgFQAWBChIqACoAOoAKgApCOkgqCPNl7B1FK1/L3n3YYdDLnd0rW8fS0Y/vSnsmqz3Do38G0BNJLyXxPChPnP1L0nV5fi7PoSCMeuidpNcFRMYQ4C4kvc8oo5MF9FzSuaRH2Y2d3h9JbyV97a3PAMIrZ26jq7L5d0kYI1QIIQT0U0kc4qFbx16L3uoB+lS4UvcFCJvyf0ZeFX0LjLWnrcVLgLxnvknCALwYEUgPiGdmEV5i/w1pAcLdX4w2GQOYbcR7+0XEqRYgeFHdjGcA2BL4clJe/pAEr1oCqaunsPHYK0aAbKjgDERdCpPVb4aiGCZ8AHlQfm/oR4AwXhdAvh6BRwCBg9B/LICwdWi95AHhjZ9FAe9k6s4oILa3lDi2Fd0DoqpSiZEPkt4kWDwDqGnHA4KQlaBhFgQAZwDZLCYRSIw78YCouEfl3T1XLnjKAuJAUZb57LPUwCa2QkC3xnCvilfVqLV4/FH2hba80b0DNBMy4r/mQCO0PpQ2ZL/NPLXBoRlSJxJxQyVN6pm0nwGUTnvryrDXzFgP1qQLI2tHW8coRts6bvw43GuunIQaMToDtUDSXC8NiFRz9b2GkYGqvQux40fYK7MD2uLYmUS61YCGDV+BOR3jyGj4CBPjhh3yhkfYemh/KjgFUEbajEBgrk+AqrI4Dmf6VdSrAIbHKKRwwV6DGH3rNcjPU72JcuiiSDHz96yMl9ABNLPVTi6K1ijeYuM64vYAUWc4SHjliRZnQhato6LDj/qxoc5QNMr6sQH+1VD2gK/fzwJKGxhV/A+o57G/ZhaUJd87eLcAAAAASUVORK5CYII="/>
          <p className="snippet">{ blog.venueStart }pm - {blog.venueEnd}am</p>
          <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA+0lEQVRYR+2WgQnCMBREXzdwA3UDR3AVN3ADdQJHsCM4ghvoCI7gBspJAwHT/tpEaPF/KKWh/3pcLv1XMbKqRsaHSRJaAUdgnanmGTgAty4cS6EFcAVmmWRC+wNYAronyyK0bdQpxOcNswHqoYT2wK5pltx6VpVa/+BlKVTqw204TsjaYlfIFZIHcn4H7iH30H97SNHjFOWgC6BLpWwU8tGQdU38e2ridw1XNcxL5o4IS9jKRV8d++ePyATYpBhdCjkhSTdZhTSvSlSIw61i9FXIirp9yca+zDK1E0pJbsrbd5+i90xM91Ck1vRNPcAi+S2ljnM+kwZhdIRe/8iPJfcLoV8AAAAASUVORK5CYII="/>
          <p className="snippet">{ blog.seats } seats</p>
          <p className="price">LKR { blog.price }</p>
        
        {/* <div className="card">
         <img src="./image1.jpg" className="card-image" alt=""/>
            <h2>Title</h2>
            <p>Text</p>
          
          
        </div> */}
    
        </div>
        
      ))}
      </div>
</div>
     );
}
 
export default BlogList;