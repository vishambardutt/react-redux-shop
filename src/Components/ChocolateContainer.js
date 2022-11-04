import React from 'react'
import { connect } from 'react-redux';
import { buyChocolate } from '../redux';

const ChocolateContainer = (props) => {
  return (
    <div>
        <h4>Number of Chocolates: {props.numOfChocolate}</h4>
        <h4><button onClick={props.buyChocolate}>BUY CHOCOLATE</button></h4>
    </div>
  )
}

let mapStateToProps = state => {
  return{
    numOfChocolate: state.Choco.numOfChocolate
  }
 
}

let mapDispatchToProps = dispatch => {
  return{
    buyChocolate: ()=> dispatch(buyChocolate())
  }
 
}
export default connect (mapStateToProps, mapDispatchToProps)(ChocolateContainer)