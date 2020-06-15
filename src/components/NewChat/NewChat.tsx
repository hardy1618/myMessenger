import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import { UsersListSubscription, Chat_To_User_Insert_Input } from '../../generated/graphql';
import { useCreateChatMutation } from '../../generated/graphql';
import { useAddUsersMutation } from '../../generated/graphql';

export interface OwnProps {
    userId: string;
    passChatId: (chat_id: number) => void;
}

interface Props extends OwnProps {
    data: UsersListSubscription;
}

interface user {
    name: string;
    user_id: string;
};

interface chatUser {
    user_id: string;
    chat_id: number;
}

const className = 'NewChatForm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 500,
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

// const NewChat: React.FC = () => (
const NewChat = (props: Props) => {
    const [createChat] = useCreateChatMutation();
    const [addUser] = useAddUsersMutation();
    const classes = useStyles();
    const [value, setValue] = React.useState<Array<user>>();
    // [props.data.users[0]]
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const create_chat = (e: any) => {
        var cid: number = 0;
        var chat_users: Array<Chat_To_User_Insert_Input> = [];
        createChat({ variables: {} }).then((e: any) => {
            cid = e.data.insert_chats_one.chat_id
            if (!!value) {
                if (value.length === 0) { return; }
                value.map(value => { chat_users.push({ "user_id": value.user_id, "chat_id": cid }) })
            }
            // console.log("chat_users", chat_users)
            chat_users.push({ "user_id": props.userId, "chat_id": cid })
            // console.log("chat_users", chat_users)
            addUser({ variables: { chatUsers: chat_users } })
            props.passChatId(cid)
        });
        handleClose();
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Autocomplete
                multiple
                id="tags-standard"
                options={props.data.users}
                getOptionLabel={(option) => option.name}
                // defaultValue={[props.data.users[0]]}
                value={value}
                onChange={(event: any, newValue: Array<user>) => {
                    setValue(newValue);
                    // console.log(value)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select chat participant(s)"
                        placeholder=""
                    />
                )}
            />
            <br></br>
            <Button size="small" variant="outlined"
                onClick={create_chat}>
                Create Chat
            </Button>
        </div>
    )

    return (
        <div className={className}>
            <Button variant="outlined"
                onClick={handleOpen} className="NewChatFormButton">
                Create Chat
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default NewChat;

