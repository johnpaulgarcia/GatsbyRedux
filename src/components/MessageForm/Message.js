import React, { Component } from 'react'
import {connect} from 'react-redux';
import {sendMessage} from '../../actions';
class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          message: '',
          ok: false
        }
      }
    
      handleInput = e => {
         this.setState({
           [e.target.name]: e.target.value
         })
      }
    
      handleButtonClick = e => {
        e.preventDefault();
        let {username,message} = this.state;
        this.props.dispatch(sendMessage({username,message}));
      }

      promptUser = () => {
          let username =  prompt("Username");
         this.setState({username,ok:true});
      }

    render() {
        return (
            <div>
                {!this.state.ok && this.promptUser()}
            <form onSubmit={this.handleButtonClick}>
              <input onInput={this.handleInput} type="textarea" value={this.state.message} name="message" placeholder="Message..."/>
              <button type="submit">Send</button>
            </form>
    
            <div style={{display: 'flex',flexDirection: 'column'}}>
    
              <ul>
                {
                  this.props.message.map(key=>{
                      return(
                        <li>{key.username} says "{key.message}"</li>
                      )
                  })
                }
              </ul>
    
            </div>
          </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        message: state.messageReducer.message
    }
}

export default connect(mapStateToProps)(Message);
