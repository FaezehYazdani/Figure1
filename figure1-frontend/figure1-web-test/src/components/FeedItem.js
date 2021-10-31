import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends Component {

    render() {
        return (
            <div className='feed-container'>
            <h3>{this.props.title}</h3>
            <h4>{this.props.username}</h4>            
            <img  className='img' src={this.props.image} />
            <br/>

            <Link 
                to={{ pathname: '/detail', 
                state: { 
                    name:'this working',
                    title:this.props.title,
                    username:this.props.username,
                    image:this.props.image,
                    caption:this.props.caption }
                }}>
                        
                Details
            </Link>

            </div>
        )
    }
}

export default FeedItem;