import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import axios from 'axios';


const Home = () => {
	
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) =>{
	  const newBlogs = blogs.filter((blog)=>blog.id !== id);
	  setBlogs(newBlogs);
  }
  
  useEffect(()=>{
	  axios.get('https://jsonplaceholder.typicode.com/posts')
		  .then(res => setBlogs(res.data))
		  .catch(err => console.log(err));
  },[]);

  return (
    <div className="home">
    	<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
	</div>
  );
}
 
export default Home;