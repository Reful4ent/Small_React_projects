import './Styles/App.css'
import {useRef, useState} from 'react'
import CanvasField from "./Components/CanvasField.jsx";
import GameButtons from "./Components/GameButtons.jsx";
import SocialLinks from "./Components/SocialLinks.jsx";
import GameSettings from "./Components/GameSettings.jsx";


export default function Game() {
    const [sizeField, setSizeField] = useState(7);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedGame, setSpeedGame] = useState(50);
    const [speedSliderGame, setSpeedSliderGame] = useState(390);
    const [isDraw,setIsDraw] = useState(true);
    const [isClosed, setIsClosed] = useState(true);
    const maxSpeed = 400;
    const minSpeed = 10;
    const canvasFieldRef = useRef(null);


    function handleSizeChanged(e) {
        setSizeField(e.target.value);
        if(canvasFieldRef.current) {
            canvasFieldRef.current.clearField();
            canvasFieldRef.current.resizeBoard();
        }
    }

    function handleClosedClick() {
        setIsClosed(!isClosed);
    }

    function handleSpeedChanged(e) {
        if (e.target.value <= (maxSpeed - minSpeed) / 2){
            setSpeedGame( maxSpeed - e.target.value + 10);
        } else {
            setSpeedGame(Math.abs(e.target.value - maxSpeed) + 10);
        }
        setSpeedSliderGame(e.target.value);
    }


    function handleStartClick() {
        if (!isPlaying) {
            setIsPlaying(true);
            return;
        }
        setIsPlaying(false);
    }

    function handleClearClick() {
        setIsDraw(!isDraw);
    }

    function handleResetClick() {
        if (isPlaying)
            setIsPlaying(!isPlaying);
        setSpeedGame(50);
        setSpeedSliderGame(340)
        setIsDraw(true);
        if(canvasFieldRef.current) {
            canvasFieldRef.current.clearField();
        }
    }

    function handleSteplick() {
        if (isPlaying) {
            return;
        }
        if(canvasFieldRef.current) {
            canvasFieldRef.current.nextStep();
        }
    }

    return (
        <>
            <GameSettings speedGame={speedSliderGame}
                          maxSpeed={maxSpeed}
                          minSpeed={minSpeed}
                          sizeField={sizeField}
                          isClosed={isClosed}
                          handleSizeChanged={handleSizeChanged}
                          handleSpeedChanged={handleSpeedChanged}
                          handleClosedClick={handleClosedClick}></GameSettings>
            <header className="header">
                <ul className="header__list">
                    <li className="list__item">
                        <button className="list__item options" onClick={handleClosedClick}>
                            <img src="/public/Img/menu.svg" className="options__menu"/></button>
                    </li>
                    <li className="list__item header-text">Game Of Life</li>
                </ul>
            </header>
            <main>
                <div className="game">
                    <div className="game__game-main">
                            <CanvasField isDraw={isDraw}
                                         isPlaying={isPlaying}
                                         speedGame={speedGame}
                                         ref = {canvasFieldRef}
                                         sizeField={sizeField}></CanvasField>
                    </div>
                    <div className="game__game-buttons">
                        <GameButtons isPlaying={isPlaying}
                                     isDraw={isDraw}
                                     handleSteplick={handleSteplick}
                                     handleResetClick={handleResetClick}
                                     handleStartClick={handleStartClick}
                                     handleClearClick={handleClearClick}></GameButtons>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <SocialLinks></SocialLinks>
            </footer>
        </>
    );
}
