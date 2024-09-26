import React, { Component } from "react";
import Card from  "./projectUI";
import "./project.css"
import img1 from  "../../assets/1.jpg";
import img2 from  "../../assets/2.jpg"; 
import img3 from  "../../assets/3.jpg";
import img4 from  "../../assets/4.jpg";
import img5 from  "../../assets/5.jpg";
import img6 from  "../../assets/6.jpg";
import img7 from  "../../assets/7.jpg";
import img8 from  "../../assets/8.jpg";
import img9 from  "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg"
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";
import img21 from "../../assets/21.jpg";
import img22 from "../../assets/22.jpg";
import img23 from "../../assets/23.jpg";
import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
import img27 from "../../assets/27.jpg";
import img28 from "../../assets/28.jpg";
import img29 from "../../assets/29.jpg";
import img30 from "../../assets/30.jpg";
import img31 from "../../assets/31.jpg";
import img32 from "../../assets/32.jpg";







class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
      
        {
            id: 2,
            image: img1,
          
          },
          {
            id: 3,
            image: img2,
            
          },
          {
            id: 4,
            image: img3,
          
          },
          {
            id: 5,
            image: img4,
        
          },
          {
            id: 6,
            image: img5,
         
          },
          {
            id: 7,
            image: img6,
         
          }, {
            id: 8,
            image: img7,
           
          }, {
            id: 9,
            image: img9,
           
          }, {
            id: 10,
            image: img10,
          
          }, {
            id: 11,
            image: img11,
           
          }, {
            id: 12,
            image: img12,
   
          }, {
            id: 13,
            image: img13,
        
          }, {
            id: 14,
            image: img14,
       
          }, {
            id: 15,
            image: img15,
          
          }, {
            id: 16,
            image: img16,
    
          }, {
            id: 17,
            image: img17,
         
          }, {
            id: 18,
            image: img18,
           
          }, {
            id: 19,
            image: img19,
          
          }, 
        {
            id: 20,
            image: img20,
          
          }, 
        {
            id: 21,
            image: img21,
          
          }, 
        {
            id: 22,
            image: img22,
          
          }, 
        {
            id: 23,
            image: img23,
          
          }, 
        {
            id: 24,
            image: img24,
          
          }, 
        {
            id: 25,
            image: img25,
          
          }, 
        {
            id: 26,
            image: img26,
          
          }, 
        {
            id: 27,
            image: img27,
          
          }, 
        {
            id: 28,
            image: img28,
          
          }, 
        {
            id: 29,
            image: img29,
          
          }, 
        {
            id: 30,
            image: img30,
          
          }, 
        {
            id: 31,
            image: img31,
          
          }, 
        {
            id: 32,
            image: img32,
          
          }, 
        
       
      ],
    };
  }

  render() {
    return (
      <div className="cont">
       
      <div className="container">
        <div className="pictures">
          {this.state.cardData.map((card) => (
            <div key={card.id}>
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Cards;
