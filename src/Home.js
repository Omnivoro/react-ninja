const Home = () => {
  const handleClick = () =>{
	  console.log("Hello, ninjas");
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
	  <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;

// The handleClick function is not writen as handleClick() because
// the parenthesis would invoke the funcion when the page was uploaded
// in the browser