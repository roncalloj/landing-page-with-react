import React from "react";

export default function (){
    return(
        <nav className ="navbar navbar-expand-lg navbar-light bg-dark">
				<div className ="container-fluid">
					<p className ="navbar-brand text-white">Start Bootstrap</p>
					<button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className ="navbar-toggler-icon"></span>
					</button>
					<div className ="collapse navbar-collapse justify-content-end text-white" id="navbarNavAltMarkup">
						<div className ="navbar-nav ">
							<a className ="nav-link active text-white" aria-current="page" href="#">Home</a>
							<a className ="nav-link text-white" href="#">About</a>
							<a className ="nav-link text-white" href="#">Services</a>
							<a className ="nav-link text-white" href="#">Contact</a>
						</div>
					</div>
				</div>
			</nav>
    )
}