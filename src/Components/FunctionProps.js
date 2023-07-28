// import React from 'react'
// import FucntionparesentProps from './FucntionparesentProps'
// // import FucntionparesentProps from './FucntionparesentProps'


// const FunctionProps = () => {

//   function hazard() {

//     alert('do not this')
//   }

//   return (
//     <div>

//       <FucntionparesentProps data={hazard} />
//     </div>
//   )
// }

// export default 
import React from 'react'
import FucntionparesentProps from './FucntionparesentProps'

const FunctionProps = () => {
  const hazard = () => {
    alert('do not this')
  }
  return (
    <div><FucntionparesentProps data={hazard}/></div>
  )
}

export default FunctionProps