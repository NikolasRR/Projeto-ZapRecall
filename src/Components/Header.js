import react from "react";

function Header ({started, setStarted}) {
    
    return !started ? (
        <>
            <header className="header1">
                <img src="./images/logo.png" alt="zapLogo"/>
                <h1>ZapRecall</h1>
            </header>

            <button onClick={() => setStarted(true)} >Iniciar Recall!</button>
        </>
    ) : (
        <>
            <header className="header2">
                <img src="./images/logo.png" alt="zapLogo" />
                <h1>ZapRecall</h1>
            </header>
        </>
    );
}

export default Header;