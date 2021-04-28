import { useState,useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
const [blogs,setBlogs] = useState(null);
const [isPending,setIsPending]= useState(true);
const [error,setError]= useState(null);

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
    setBlogs(data);
    setIsPending(false);
    setError(null);
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
        {error && <div> {error} </div>}
    {isPending && <div> Loading.... </div>}
    {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;