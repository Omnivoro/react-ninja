import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () =>{
	
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [userId, setUserId] = useState('1');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, userId};
		
		setIsPending(true);
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {"Content-type": "application/json"},
			body: JSON.stringify(blog),
		}).then(()=>{
			console.log('New blog added');
			setIsPending(false);
			history.push('/');
		});
	}
	
	return(
		<div className="create">
			<h2>Add a new blog!</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input 
					type = "text"
					required
					value={title}
					onChange={(e)=>setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea 	
					required
					value={body}
					onChange={(e)=>setBody(e.target.value)}
				></textarea>
				<label>Blog author:</label>
				<select 
					value={userId}
					onChange={(e)=>setUserId(e.target.value)}>
					<option value="1">User id - 1</option>
					<option value="7">User id - 7</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	)
};

export default Create;