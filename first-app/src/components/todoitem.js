import React from 'react'

// function todoitem(){
//     return(
//         <div >
//             <input type="checkbox" name="" id=""/>
//             <p style={{backgroundColor:"#04756F",fontStyle:"italic", fontSize:20}}>cb1</p>
//         </div>
//     )
// }

class todoitem extends React.Component{
    render(){
        return(
            <div >
                <input type="checkbox" name="" id=""/>
                <h2 style={{backgroundColor:"#04756F",fontStyle:"italic", fontSize:20}}>cb1</h2>
            </div>
        )
    }
}

export default todoitem