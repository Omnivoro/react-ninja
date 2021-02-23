import {useState} from 'react';

const Create = () =>{
	
	const [title, setTitle] = useState('');
	
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
				<textarea required></textarea>
				<label>Blog author:</label>
				<select>
					<option value="1">User id - 1</option>
					<option value="7">User id - 7</option>
				</select>
				<button>Add Blog</button>
			</form>
			<p>{title}</p>
		</div>
	)
};

export default Create;