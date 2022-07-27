import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from "./navbar.jsx";
import {Carrusel1} from "./carrusel1.jsx";
import {Carrusel2} from "./carrusel2.jsx";
import {Cards} from "./cards.jsx";

//create your first component
const Home = () => {
	const [contenidoCarta, setcontenidoCarta] = useState([
		{img:"https://picsum.photos/seed/picsum/500/325", title:"Card title 1", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/seed/picsum/500/325", title:"Card title 2", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/seed/picsum/500/325", title:"Card title 3", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
		{img:"https://picsum.photos/seed/picsum/500/325", title:"Card title 4", text:"Some quick example text to build on the card title and make up the bulk of the card's content."}
	]);
	return (
		<div className="d-grid gap-4">
			<Navbar />
			<div className ="container">
				<div className="row">
					<div className="col">
						<Carrusel1 />
					</div>
				</div>
			</div>
			<div className ="container">
				<div className="row">
					<div className="col">
						<Carrusel2 />
					</div>
				</div>
			</div>

			<div className ="container">
				<div className="row text-center gap-3 ">
					{contenidoCarta.map(content => (
						<div className="col">
							<Cards title={content.title} text={content.text} img={content.img} />
						</div>
					))}
				</div>
			</div>

			<div className ="bg-dark text-center">
				<p className ="navbar-brand text-white fs-6">Copiright © My Website 2022</p>
			</div>

		</div>
	);
};

export default Home;
