import React, { Component } from 'react';
import imgClassicTee from "../images/classic-tee.jpg";
import Button from './Button';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            productName:'Classic Tee',
            outfitSize:null,
            price:75,
            isActive:false
        }
        this.selectSize = this.selectSize.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    selectSize(size){
        this.setState({
            outfitSize:size,
            isActive:true
        })
    }

    addToCart(){

    }
    
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col"></div>
                        <div class="col"><img src={imgClassicTee} class="img-fluid" alt="..." /></div>
                        <div class="col">
                            <div>
                                <h5>{this.state.productName}</h5>
                                <strong className="divider">${this.state.price}</strong>
                                <p style={{color:'gray'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis placerat est, id tincidunt velit tempus vitae. 
                                </p>
                            </div>
                            <div>
                                <div style={{display:'flex'}}>
                                    <p style={{color:'gray'}}>SIZE<span style={{color:'#C90000'}}>*</span></p>
                                    <strong>{this.state.outfitSize}</strong>
                                </div>
                                <div style={{display:'flex'}}>
                                    <Button selectSize={this.selectSize} type='button' class={this.state.isActive ? 'border buttonSize active':'border buttonSize'} text='S' value='S' />
                                    <Button selectSize={this.selectSize} type='button' class={this.state.isActive ? 'border buttonSize active':'border buttonSize'}text='M' value='M' />
                                    <Button selectSize={this.selectSize} type='button' class={this.state.isActive ? 'border buttonSize active':'border buttonSize'} text='L' value='L' />
                                </div>
                            </div>
                            <div style={{marginTop:'1rem'}}>
                                <Button addToCart={this.addToCart} type="button" class="btn btn-outline-dark" text="ADD TO CART"/>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;