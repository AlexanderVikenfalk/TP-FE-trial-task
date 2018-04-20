import React, { Component } from "react";


export default class Start extends Component {

state = {
       posts: {
       }

       }


  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/posts/')
     .then(response => response.json())
//     .then(json => console.log(json))
     .then(json => this.setState({
     posts: json})
     )
    }






    render(){

    console.log(this.state.posts)
    return(

    <main className="posts">
    <ul className="posts__list">
    </ul>
    Test
    </main>

    )

    }


  }





