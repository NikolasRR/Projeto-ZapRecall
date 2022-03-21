import reactDom from "react-dom";
import Junction from "./Components/Junction";

function App () {
    return (
        <>
            <Junction />
        </>
    )
}

const page = document.querySelector(".root");
reactDom.render(<App />, page);