import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"
  //Neither  objects nor boolean values can be passed to return.
  //const person = {name: 'Yoshi', age:30};
  //const boolean = false;
  return (
    <div className="App">
      <div className="content">
		  <h1>{title}</h1>
		  <p>Likes {likes} times</p>
		  {/*<p>{person}</p>*/}
		  <p>{10}</p>
		  <p>{"A string value"}</p>
		  <p>{Math.random() * 10}</p>
		 <a href={link}>Google Site</a>
	  </div>
    </div>
  );
}

export default App;
