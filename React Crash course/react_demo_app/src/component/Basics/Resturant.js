import React from "react";
import "./style.css";

const Resturant = () => {
    // const image = "https://offerongrocery.com/wp-content/uploads/2020/09/Maggi-2-Minute-Instant-Noodles-Masala-70g.jpg"
    return (<>
                <div className="card-container">
                    <div className="card"> 
                        <div className="card-body">
                            <span className="card-number card-circle subtle">1</span>
                            <span className="card-author subtle">Breakfast</span>
                            <h2 className="card-title"> Maggi </h2>
                            <span className="card-description subtle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias tenetur sit ducimus delectus assumenda itaque consectetur nihil rem doloremque sint!</span>
                            <div className="card-read">Read</div>
                        </div>

                        <img src="https://offerongrocery.com/wp-content/uploads/2020/09/Maggi-2-Minute-Instant-Noodles-Masala-70g.jpg" alt="images" className="card-media" />

                        <span className="card-tag subtle">Order Now</span>
                    </div>
                </div>
            </>);
};

export default Resturant;