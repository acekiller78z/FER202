import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu1 from './asset/menu1.jpg';
import menu2 from './asset/menu2.jpg';
import menu3 from './asset/menu3.jpg';
import menu4 from './asset/menu4.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const PizzaMenu = () => {
    const pizzas = [
        {
            backgroundColor: '#fff',
            name:'kkk',
            price:'2000',
            originprice:'2222',
            imgsrc:menu1,
            badge:'Sale',
        }
    ]; 
    return (
        <div className="menu-section ps-5" style={{backgroundColor: '#299291'}}>
            <h2 className="text-while mb-4 text-start">Our Menu</h2>
            <div className="row">
                {pizzas.map((pizza,index) =>(
                    <div className="col-md-3 mb-4" key={index}>

                    </div>
                ))}
            </div>
        </div>
    )
}