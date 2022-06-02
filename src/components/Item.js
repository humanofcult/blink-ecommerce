import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <div className='imgContainer'>
              <img src={"./img/" + this.props.item.img} alt={this.props.item.title}/>
            </div>
            <div className='otherInfoAndCartAdder'>
              <div className='itemOtherInfo'>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
              </div>
              <div className='addToCart'>+</div>
            </div>
        </div>
    )
  }
}

export default Item