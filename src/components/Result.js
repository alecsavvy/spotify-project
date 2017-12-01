import React, { Component } from 'react'

class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
        }

    }

    render() {
        const content = this.props.content;
        return (
            <div>
            <div> Event Name: {content.displayName}   </div>
            <div> Location: {content.location.city}   </div>
            <div> Songkick Link: {content.uri}   </div>
            <div> ID: {content.id}   </div>
          </div>
        )
    }
}

export default Result