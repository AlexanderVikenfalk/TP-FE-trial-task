 import React, { Component } from "react";
import _ from "lodash";


export default class Comment extends Component {
state = {
       comments: {
       }
       }

  componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/posts/"+this.props.postId+"/comments")
     .then(response => response.json())
      .then(json => this.setState({
          comments: json})
          )
    }

    render(){
     return _.map(this.state.comments, (comment, key) => {
     return(
     <div key={key}>
<p>
   {comment.body}
</p>
    </div>)
    }
    )
    }
    }