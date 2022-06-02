import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Aside from "./components/Aside";

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Adidas Super Comfy Shoes',
          img: 'sportsone.png',
          desc: 'all the other description',
          category: 'Sports Shoes',
          price: '199.99'
        },
        {
          id: 2,
          title: 'Nike Air Mag 2000',
          img: 'airmag.png',
          desc: 'all the other description',
          category: 'Iconic Shoes',
          price: '855.55'
        },
        {
          id: 3,
          title: 'Just New Balance',
          img: 'new balance.png',
          desc: 'all the other description',
          category: 'Sports Shoes',
          price: '99'
        },
        {
          id: 4,
          title: 'Adidas Flip Flops',
          img: 'flip-flops.png',
          desc: 'all the other description',
          category: 'Beach Wear',
          price: '15.88'
        },
        {
          id: 5,
          title: 'Waterproof Ones',
          img: 'waterproof.png',
          desc: 'all the other description',
          category: 'Casual Shoes',
          price: '125'
        }
      ],

      sliderItems: [
        {
          id: 1,
          title: "Nike Banner",
          img: "./nikes.png"
        },

        {
          id: 2,
          title: "Adidas Banner",
          img: "./maxresdefault.jpg"
        },

        {
          id: 3,
          title: "Nike Banner 2",
          img: "./nikes2.png"
        },

        {
          id: 4,
          title: "Nike Banner 3",
          img: "./nikes3.png"
        }

      ]
    }
  }
  render(){
  return (
    <div className="wrapper">
      <Header/>
      <Slider items={this.state.sliderItems}/>
      <div className="mainSection">
        <Aside/>
        <Items items={this.state.items}/>
      </div>
      <Footer/>
    </div>
  );
  }
}

export default App;
