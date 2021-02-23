import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
	
	const {id} = useParams()
	
	const history = useHistory();
	
	const {data: blog, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
	
	const handleDelete = () =>{
		
		fetch('https://jsonplaceholder.typicode.com/posts/' + blog.id, {method: 'DELETE'}).
		then(() => history.push('/'));
	}
	
	return(
		<div className="blog-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.userId}</p>
					<div>{ blog.body }</div>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	);
}

export default BlogDetails;