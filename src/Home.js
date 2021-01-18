const Home = () => {
  const handleClick = () =>{
	  console.log("Hello, ninjas");
  }
  const handleClickAgain = (name, event) =>{
	  console.log("Hello " +  name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
	  <button onClick={handleClick}>Click me</button>
	  <button onClick={(e)=>{handleClickAgain('mario', e)}}>Click me again</button>
    </div>
  );
}
 
export default Home;

// v07t01:44 The handleClick function is not writen as handleClick() because
// the parenthesis would invoke the funcion when the page was uploaded
// in the browser

// v07t03:28 The handleClickAgain funtion must be wrapped by an anonimous function in order to pass the value of the name variable. As this anonimous function has only one instruction, the curly brackets that wraps handleClickAgain('mario') could be omitted.

// v07t05:40 The event parameter "e" can be use to get aditional information 
// about the event.