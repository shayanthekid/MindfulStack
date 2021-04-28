import { useState,useEffect } from 'react';
import BlogList from './BlogList';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const Home = () => {
const [blogs,setBlogs] = useState(null);
const [isPending,setIsPending]= useState(true);
const [error,setError]= useState(null);
const [cookie,setCookie] = useState(false);
const cookie_key = 'LoggedIn';

useEffect(()=>{
    const abortConst = new AbortController();


    fetch('http://localhost:3000/all-events',{
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        signal:abortConst.signal
    })
    .then(res=>{
        if(!res.ok){
            throw Error('Could not fetch data');
        }
       return res.json()
    })
    .then((data)=>{
        
if(read_cookie(cookie_key) == ''){
    setCookie(false);
    setIsPending(false);
    setBlogs(null);
}
else{
    setCookie(true);
    setBlogs(data);
    setIsPending(false);
    setError(null);
}
    

    })
    .catch((err)=>{
    if(err.name ==="AbortError"){
console.log("Fetch Aborted");
    }    
 else{
    setIsPending(false);
    setError(err.message);
 }
    });

    return() =>{
    abortConst.abort();
    }


},[]);

return (
    <div className="home">
        {!cookie &&   <h1>Please Login to view blogs</h1>}
       
        
        {error && <div> {error} </div>}
        {isPending && <div> Loading.... </div>}
        {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;