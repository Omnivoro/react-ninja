import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import axios from 'axios';


const Home = () => {
	
  const [blogs, setBlogs] = useState([
    {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  }
  ]);

  const handleDelete = (id) =>{
	  const newBlogs = blogs.filter((blog)=>blog.id !== id);
	  setBlogs(newBlogs);
  }
  
  useEffect(()=>{
	  axios.get('https://jsonplaceholder.typicode.com/posts')
		  .then(res => console.log(res))
		  .catch(err => console.log(err));
  },[]);

  return (
    <div className="home">
    	<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
	</div>
  );
}
 
export default Home;