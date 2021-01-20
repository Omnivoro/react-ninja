import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
	
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  
  const [name, setName] = useState('mario');
	
  const handleDelete = (id) =>{
	  const newBlogs = blogs.filter((blog)=>blog.id !== id);
	  setBlogs(newBlogs);
  }
  
  useEffect(()=>{
	  console.log('use effect ran!');
	  console.log(name);
  }, [name]);
	
  /* --	The useEffect() function might have a second parameter. This parameter is
	   	an array, and each one of its element is a dependency. 
     --	When the useEffect() function doesn't have this second parameter, 
  		it always renders all variables of the page.
	 -- When the useEffect() function has no dependencies, so the second parameter is an empty array, 
  		then it just renders variables once at the first time.
	 -- Only the dependencies, in the other words, the array elements of the second parameter,
	    will be render when the setVariable() function associeted to those dependencies be invoked.*/
    
  return (
    <div className="home">
    	<Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
		<button onClick={()=>setName('luigi')}>Change name</button>
		<p>{name}</p>
	</div>
  );
}
 
export default Home;