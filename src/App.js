import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App=()=>{

    if (!localStorage.getItem('username')) return <LoginForm />;

return(
    <ChatEngine
         height="100vh"
         projectID="527ae59c-55b4-494d-b745-848d296dd6e7"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps)=><ChatFeed{ ...chatAppProps}/>}
     />
);
}

export default App;