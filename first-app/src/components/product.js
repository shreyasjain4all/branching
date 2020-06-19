import React from 'react'

function product(props){
    const completedStyle ={
        color:"#888888"
    }
    return(
        <div>
            <h1>{props.id}</h1>
            <input type="checkbox" checked={props.completed} onChange={()=>console.log("I m clicked.")} onClick={()=>props.handleClick(props.id)} ></input>
            <h2 style={props.isChecked?completedStyle:null}>{props.name}</h2>
        </div>
    )
}

// class product extends React{
//     render(props){

//         return(
//             <div>
//                 <h1>{props.id}</h1>
//                 <h2>{props.name}</h2>
//             </div>
//         )

//     }

// }

export default product