function Header1 ({setStarted}) {
    return <>
        <header className="header1">
            <img src="./images/logo.png" alt="zapLogo" />
            <h1>ZapRecall</h1>
        </header>

        <button onClick={() => setStarted(true)} >Iniciar Recall!</button>
    </>
}

export default Header1;