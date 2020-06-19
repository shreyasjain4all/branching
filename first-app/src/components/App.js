import React, {Component} from 'react'
import Header from './header'
import MemeGen from './memegenerator'
import './App.css'

class App extends Component{
    render(){
        return(
            <div>
            <Header/>
            <MemeGen/>
            </div>
        )
    }
}

export default App

// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             firstname:"",
//             lastname:"",
//             age:"",
//             gender:"",
//             travellingto:"",
//             isSpicy:false,
//             isNonVeg:false,
//             isJain:false
//             }
//         this.handleClick=this.handleClick.bind(this)
//         this.submit = this.submit.bind(this)
//     }

//     handleClick(event){
//         const {
//             type,name,value,checked
//         } = event.target
//         console.log(checked)
//         type==='checkbox'?this.setState({[name]:checked}):this.setState({[name]:value})
//     }

//     submit(){
//         let str = "First Name: "+this.state.firstname+
//         "\nLast Name: "+this.state.lastname+
//         "\nAge: "+this.state.age+
//         "\nGender: "+this.state.gender+
//         "\nTravelling To: "+this.state.travellingto+
//         "\nDietery Restrictions: "
//         if(this.state.isSpicy)str=str+"Spicy "
//         if(this.state.isNonVeg)str=str+"Non-Veg "
//         if(this.state.isJain)str=str+"Jain "
//         alert(
//             str
//         )
//     }

//     render(){
//         return(
//             <div>
//                 <form>
//                     <input type="text" name="firstname" onChange={this.handleClick} placeholder="First Name:" /><br/>
//                     <input type="text" name="lastname" onChange={this.handleClick} placeholder="Last Name:" /><br/>
//                     <input type="number" name="age" onChange={this.handleClick} placeholder="Enter Age:"/><br/>
//                     <label>Gender:</label><br/>
//                     <input type="radio" name="gender" value="Male" onClick={this.handleClick}  />
//                     <label>Male</label><br/>
//                     <input type="radio" name="gender" value="Female" onClick={this.handleClick} />
//                     <label>Female</label><br/>
//                     <label>Travelling to: </label>
//                     <select name="travellingto" onChange={this.handleClick}>
//                         <option value=""  >---Please Choose Destination---</option>
//                         <option value="Mumbai"  >Mumbai</option>
//                         <option value="Delhi"  >Delhi</option>
//                         <option value="Chennai" >Chennai</option>
//                     </select><br/>
//                     <label>Dietery Choice(if any): </label><br/>
//                     <input type="checkbox" name="isSpicy" onChange={this.handleClick} checked={this.state.isSpicy}/>
//                     <label > Spicy</label><br/>
//                     <input type="checkbox" name="isNonVeg" onChange={this.handleClick} checked={this.state.isNonVeg}/>
//                     <label> Veg-Only</label><br/>
//                     <input type="checkbox"  name="isJain" onChange={this.handleClick} checked={this.state.isJain}/>
//                     <label> Jain</label><br/>
//                     <button onClick={this.submit}>Submit</button>
//                 </form>
//             </div>
//         )
//     }

// }

//export default App


//ToDoArchieves

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             todo:ProductData
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(id){
//         this.setState(prevState=>{
//             const update = prevState.todo.map((element)=>{
//                 if(id===element.id){
//                     element.completed=!element.completed
//                     console.log(element.completed)
//                 }
//                 return element
//             })
            
//             return{
//                 todo:update
//             }
//         })

//         // console.log("checked ",id)
//     }
//     render(){
//         const todos = this.state.todo.map((element)=><Product key={element.id} id={element.id} name={element.item} 
//         handleClick={this.handleClick} isChecked={element.completed} style={{color:"#888888"}}/>)
//         return(
//             <div>
//                 {todos}
//             </div>
            
//         )
//     }
// }

// export default App