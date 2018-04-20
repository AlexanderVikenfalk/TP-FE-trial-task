import React, { Component } from "react";
import _ from "lodash";

import Comments from "./partials/comments.js"

export default class Start extends Component {

state = {
       posts: {
       },
       toggleModal:false


       }


    // Fetch 100 posts
  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/posts/')
     .then(response => response.json())
     .then(json => this.setState({
     posts: json})
     )
    }

    // Fetch user name
    renderUser(userId) {
       let userinfo = null;
      fetch('https://jsonplaceholder.typicode.com/users/'+userId)
         .then(response => response.json())
        .then(json => console.log(json))
//         .then(json => {return (
//
//         json.name
//
//         )
         }

// Show modal
toggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  };






    renderPosts() {
        return _.map(this.state.posts, (post, key) => {
          return (
            <li key={key} className="start__list-item">
             <div className="start__list-content">
             <h3>

             </h3>
                <h2>
                {post.title}
                </h2>
                 <p className="start__list-paragraph">
                 {post.body}
                 </p>
                      <button type="button" onClick={this.toggleModal}>
                          show comments
                        </button>
{this.state.toggleModal ? <Comments postId={post.id} /> : null }
                </div>
            </li>
          );
        });
      }







    render(){

    console.log(this.state.posts)
    return(

    <main className="start">
        <ul className="start__list">
            {this.renderPosts()}
        </ul>
    </main>

    )

    }


  }





