import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const clearStyle = {background: '#ac3939'},
operatorStyle = {background: '#666666'},
equalsStyle = {
  background: '#004466',
  position: 'absolute',
  height: 130,
  bottom: 5
};

export class Buttons extends Component {
  render() {
    return (
      <div>
        <button id="clear"    value='AC' onClick={this.props.initialize} className='jumbo' style={clearStyle}>AC</button>
        <button id="divide"   value='/'  onClick={this.props.operators} style={operatorStyle}>/</button>
        <button id="multiply" value='x'  onClick={this.props.operators} style={operatorStyle}>x</button>
        <button id="seven"    value='7'  onClick={this.props.numbers} >7</button>
        <button id="eight"    value='8'  onClick={this.props.numbers} >8</button>
        <button id="nine"     value='9'  onClick={this.props.numbers} >9</button>
        <button id="subtract" value='‑'  onClick={this.props.operators} style={operatorStyle}>-</button>
        <button id="four"     value='4'  onClick={this.props.numbers} >4</button>
        <button id="five"     value='5'  onClick={this.props.numbers} >5</button>
        <button id="six"      value='6'  onClick={this.props.numbers} >6</button>
        <button id="add"      value='+'  onClick={this.props.operators} style={operatorStyle}>+</button>
        <button id="one"      value='1'  onClick={this.props.numbers} >1</button>
        <button id="two"      value='2'  onClick={this.props.numbers} >2</button>
        <button id="three"    value='3'  onClick={this.props.numbers} >3</button>
        <button id="zero"     value='0'  onClick={this.props.numbers} className='jumbo'>0</button>
        <button id="decimal"  value='.'  onClick={this.props.decimal} >.</button>
        <button id="equals"   value='='  onClick={this.props.evaluate} style={equalsStyle}>=</button>
      </div>
    );
  }
}

export class Output extends Component {
  render () {
    return <div id="display" className="outputScreen">{this.props.currentValue}</div>
  }
};

export class Formula extends Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>
  }
};
