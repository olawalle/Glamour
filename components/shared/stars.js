import React from 'react'


    
const filled = (n) => {
    let arr = []
    for (let index = 0; index < n; index++) {
        arr.push('o')  
    }
    return arr
}

const empty = (n) => {
    let arr = []
    for (let index = 0; index < n; index++) {
        arr.push('o')  
    }
    return arr
}
export default function stars(props) {
  return (
    <>
      {   
        filled(props.stars).map((elm, i) => <img key={`filled${i}`} src='/static/icons/filled-star.svg' />)
      }
      {
        empty(5 - props.stars).map((elm, i) => <img key={`empty${i}`} src='/static/icons/filled-star.svg' />)
    }
    </>
  )
}
