import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
		console.log(res);
		//if(!res.ok){
		  
		//}
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      }).catch(err => console.log(err))
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;