import React, {Component, useState} from 'react';
import {Carousel, Container } from 'react-bootstrap';


export default class Home extends Component{
    
    render(){
    
      function ControlledCarousel() {
         const [index, setIndex] = useState(0);
       
         const handleSelect = (selectedIndex, e) => {
           setIndex(selectedIndex);
         };
       
         return (
           <Carousel activeIndex={index} onSelect={handleSelect}>
             <Carousel.Item>
               <img 
                 className="d-block w-100"
                 src="http://via.placeholder.com/640x360?text=First slide&bg=552c34"
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img 
                 className="d-block w-100"
                 src="http://via.placeholder.com/640x360?text=Second slide&bg=282c34"
                 alt="Second slide"
               />       
               <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img 
                 className="d-block w-100"
                 src="http://via.placeholder.com/640x360?text=Third slide&bg=20232a"
                 alt="Third slide"
               />       
               <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>
                   Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                 </p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
         );
       }
       
      return(
         <React.Fragment>
            <h1>Home komeponenta</h1>
            <ControlledCarousel />
            <div className="container-fluid" style={{backgroundColor:"lightgreen",wdith:"100%", padding:"10px", alignContent:"center"}}>
            <p  className="text-center"> Komentari</p>
            <div className="row">
               <div className="col-sm btn-primary">Kolona</div>
               <div className="col-sm btn-danger">Kolona</div>
               <div className="col-sm btn-info">Kolona</div>
            </div>
            </div>
            <div className="container-fluid" style={{backgroundColor:"lightblue",wdith:"100%", padding:"10px", height:"250px"}}>
           
               <h1 className="text-center">Ovo je futer </h1>
               <hr/>
               <p className="float-left" >Leva strana </p>  
               <p className="text-center" >Sredina strane </p>  
               <p className="float-right" >Desna strana </p>
            </div>
         
         </React.Fragment>      
      );
    }
}


