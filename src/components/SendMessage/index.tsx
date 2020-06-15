import * as React from 'react';
// import { useChatListQuery } from '../../generated/graphql';
import SendMessage, {OwnProps} from './SendMessage';

const SendMessageContainer = (props: OwnProps) => {

  return <SendMessage {...props}/>;
};

export default SendMessageContainer;

// class SendMessageForm extends React.Component {
    
//     constructor() {
//         super()
//         this.state = {
//             message: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    
//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }
    
//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.sendMessage(this.state.message)
//         this.setState({
//             message: ''
//         })
//     }
    
//     render() {
//         return (
            // <form
            //     onSubmit={this.handleSubmit}
            //     className="send-message-form">
            //     <input
            //         disabled={this.props.disabled}
            //         onChange={this.handleChange}
            //         value={this.state.message}
            //         placeholder="Type your message and hit ENTER"
            //         type="text" />
            // </form>
//         )
//     }
// }

// export default SendMessageForm