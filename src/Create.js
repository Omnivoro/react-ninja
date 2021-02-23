import {useState} from 'react';

const Create = () =>{
	
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [userId, setUserId] = useState('1');
	
	return(
		<div className="create">
			<h2>Add a new blog!</h2>
			<form>
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
				<button>Add Blog</button>
			</form>
			<p>{title}</p>
			<p>{body}</p>
			<p>{userId}</p>
		</div>
	)
};

export default Create;