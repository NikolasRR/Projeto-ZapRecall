import Main from "./Components/Main";
import reactDom from "react-dom";
import Footer from "./Components/Footer";

function App () {
    return (
        <>
            <Main />
            {/* <Footer /> */}
        </>
    )
}

const page = document.querySelector(".root");
reactDom.render(App(), page);