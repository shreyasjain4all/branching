import React from 'react'

function Joke(props){
    console.log(props)
    return(
        <div>
            <h1 style={{backgroundColor:"#FF0000"}}>Question: {props.joke.question}</h1>
            <h2>Answer: {props.joke.punchline}</h2>
        </div>
    )
}

export default Joke