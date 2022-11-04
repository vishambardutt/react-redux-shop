import React from 'react'
// import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

export const HooksiceCreamContainer = (props) => {
  let numbOficeCream = useSelector(state => state.Ice.numOficeCream)
  let dispatch = useDispatch()
  return (
    <div>
      <h4>Hook Ice Cream :{numbOficeCream}</h4>
      <h4><button onClick={()=>dispatch(buyIceCream())}>BUY CAKE</button></h4>

    </div>
  )
}
export default HooksiceCreamContainer;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HooksCakeContainer)