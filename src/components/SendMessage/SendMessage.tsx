import * as React from 'react';
import { useSendMessageMutation } from '../../generated/graphql';

export interface OwnProps {
    userId: string;
    chatId: number;
}

const SendMessage = (props: OwnProps) => {
    const [value, setValue] = React.useState<string>("");
    const [sendMessage] = useSendMessageMutation()
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        // console.log("value", value)
        sendMessage({variables: {
            "chatId": props.chatId,
            "senderId": props.userId,
            "content": value
        }}).then((e:any)=>{
            // console.log(e)
            setValue("")
        })
    };

    const handleChange=(event: any)=>{setValue(event.target.value)}

    return (<form
        onSubmit={handleSubmit}
        className="SendMessageForm">
        <input
            onChange={handleChange}
            value={value}
            placeholder="Type your message and hit ENTER"
            type="text" />
    </form>)
};

export default SendMessage;


