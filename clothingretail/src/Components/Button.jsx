import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
        this.getValue = this.getValue.bind(this);
    }

    getValue(){
        this.props.selectSize(this.state.value);
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.getValue} 
                    type={this.props.type} 
                    class={this.props.class}
                    >
                        {this.props.text}
                    </button>
            </div>
        );
    }
}

export default Button;