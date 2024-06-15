import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
                projectId='cb4dfbeb-46d5-413d-9e07-493f6686c3b0'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
  };
  export default ChatsPage;