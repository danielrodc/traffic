import React, { useState } from "react";
import Light from "./light.jsx";

//create your first component
const Home = () => {
	const [active, setActive] = useState(null);

	const handleButtonClick = () => {
		const light = ["red", "yellow", "green"];
	
		for (let i = 0; i < light.length; i++) {
		  setTimeout(() => {
			setActive(light[i]);
		  }, i * 1000); // Delay the glow effect by 1 second for each light
		}
	  };
	  
	return (
		<>
		<body> 
			<div className="container m-auto mt-2 pt-2 pb-2 bg-dark col-2 rounded d-flex flex-column align-items-center">
				<button className="bg-dark"> Click! </button>
			</div>
		  <div
			className="container m-auto mt-5 pt-5 pb-5 bg-dark col-2 rounded d-flex flex-column align-items-center"
			onClick={() => setActive(event.target.style.backgroundColor)}
		  >
			<Light color="red" active={active} />
			<Light color="yellow" active={active} />
			<Light color="green" active={active} />
		  </div>
		</body>
		</>
	  );
	};
	
	export default Home;
	