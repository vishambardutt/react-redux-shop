import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
        <h4>Number of Cakes: {props.numOfCake}</h4>
        <h4><button onClick={props.buyCake}>BUY ICE CAKE</button></h4>
    </div>
  )
}

let mapStateToProps = state => {
  return{
    numOfCake: state.Cake.numOfCake
  }
 
}

let mapDispatchToProps = dispatch => {
  return{
    buyCake: ()=> dispatch(buyCake())
  }
 
}
export default connect (mapStateToProps, mapDispatchToProps)(CakeContainer)