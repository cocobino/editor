import {css} from "@emotion/css";
import Editor from "./component/editor";

const App = () => {

    return (
        <div className={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        `}>
            <Editor/>
        </div>
    )
}

export default App
