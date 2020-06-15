import * as React from 'react';
// import ReactDOM from 'react-dom';
import MessagesList from './MessagesList';
import { useMessagesListSubscription } from '../../generated/graphql';


interface OwnProps {
    chatId: number;
    userId: string;
}


const MessagesListContainer = ({ chatId, userId }: OwnProps) => {
// class MessagesListContainer extends React.Component {  
    // shouldScrollToBottom:boolean= true;
    // componentWillUpdate() {
    //     const node = ReactDOM.findDOMNode(this)
    //     if(node instanceof Element ){
    //         this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight    
    //     }
    // }
    
    // componentDidUpdate() {
    //     if (this.shouldScrollToBottom) {
    //         const node = ReactDOM.findDOMNode(this)
    //         if(node instanceof Element ){
    //             node.scrollTop = node.scrollHeight   
        
    //         }
    //     }
    // }
    
    // render(){
    const { data, loading, error} = useMessagesListSubscription({ variables: {chatId : chatId} });
    React.useEffect(() => {
        var elem = document.getElementById('scroll');
        if(!!elem){
            // console.log("scroll", elem.scrollHeight)
            elem.scrollTop = elem.scrollHeight;
        }
      }, [data])
    
    // console.log("chat id seen in Messages List", chatId)
    // console.log("messages_list", data);
    
    // React.useEffect(() => {
    //     refetch();
    //   }, [chat_id]);
    
    
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (!loading && !error && !!data){
		return (<MessagesList data={data} userId={userId}/>);
    }
    else {
        return (<div></div>)
    }
};

export default MessagesListContainer;