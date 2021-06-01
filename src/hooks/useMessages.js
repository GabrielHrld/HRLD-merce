import React from 'react'
// import {useHistory} from 'react-router-dom'

const useMessages = (setState) => {
    setState(true)
    setTimeout(()=> setState(false), 2500)
  //   setTimeout(()=>{
  //     window.location.replace("../")
      
  //     window.location.reload()
  // }, 3000)
    
   
}

export default useMessages
