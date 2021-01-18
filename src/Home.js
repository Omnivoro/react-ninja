const Home = () => {
  const handleClick = () =>{
	  console.log("Hello, ninjas");
  }
  const handleClickAgain = (name) =>{
	  console.log("Hello " +  name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
	  <button onClick={handleClick}>Click me</button>
	  <button onClick={()=>{handleClickAgain('mario')}}>Click me again</button>
    </div>
  );
}
 
export default Home;

// v07t01:44 The handleClick function is not writen as handleClick() because
// the parenthesis would invoke the funcion when the page was uploaded
// in the browser