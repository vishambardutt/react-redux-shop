import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
  return (
    <div>
        <h4>Number of IceCreams: {props.numOficeCream}</h4>
        <h4><button onClick={props.buyIceCream}>BUY ICE CREAM</button></h4>
    </div>
  )
}

let mapStateToProps = state => {
  return{
      numOficeCream: state.Ice.numOficeCream
  }
 
}

let mapDispatchToProps = dispatch => {
  return{
    buyIceCream: ()=> dispatch(buyIceCream())
  }
 
}
export default connect (mapStateToProps, mapDispatchToProps)(IceCreamContainer)