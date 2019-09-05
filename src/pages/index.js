import React from 'react';
import MessageForm from '../components/MessageForm';
import {connect} from 'react-redux';

function index(props) {
  return (
    <div>
      <MessageForm />
   <ul>
     {
       props.message.map(key=>{
         return <li>{key.message}</li>
       })
     }
   </ul>
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.messageReducer.message
  }
}

export default connect(mapStateToProps)(index);