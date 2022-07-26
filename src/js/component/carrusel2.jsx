import React from "react";

export default function (){
    return(
            <div id="carouselExampleControls" className ="carousel slide" data-bs-ride="carousel">
                <div className ="carousel-inner">
                    <div className ="carousel-item active">
                    <img src="https://picsum.photos/2000/750?grayscale" className ="d-block w-100"/>
                    </div>
                    <div className ="carousel-item">
                    <img src="https://picsum.photos/id/237/2000/750" className ="d-block w-100"/>
                    </div>
                    <div className ="carousel-item">
                    <img src="https://picsum.photos/2000/750" className ="d-block w-100"/>
                    </div>
                </div>
                <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className ="visually-hidden">Previous</span>
                </button>
                <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className ="visually-hidden">Next</span>
                </button>
            </div>   
    )
}