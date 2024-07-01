import './App.css'
import {useState} from 'react'
import CanvasField from "./CanvasField.jsx";
import GameButtons from "./GameButtons.jsx";
import SocialLinks from "./SocialLinks.jsx";
import GameSettings from "./GameSettings.jsx";
export default function Game() {
    const [sizeField, setSizeField] = useState(5);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedGame, setSpeedGame] = useState(10);
    const [speedSliderGame, setSpeedSliderGame] = useState(10);
    const [isDraw,setIsDraw] = useState(true);
    const [isClosed, setIsClosed] = useState(true);
    const maxSpeed = 400;
    const minSpeed = 10;

    function handleSizeChanged(e) {
        setSizeField(e.target.value);
    }

    function handleClosedClick() {
        setIsClosed(!isClosed);
    }

    function handleSpeedChanged(e) {
        if (e.target.value <= (maxSpeed - minSpeed) / 2){
            setSpeedGame( maxSpeed - e.target.value + 10);
            setSpeedSliderGame(e.target.value);
            console.log(maxSpeed - e.target.value + 10);
        }
        else {
            console.log(Math.abs(e.target.value - maxSpeed) + 10);
            setSpeedGame(Math.abs(e.target.value - maxSpeed) + 10);
            setSpeedSliderGame(e.target.value)
        }
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
        setSpeedGame(250);
    }

    function handleSteplick() {
        if (!isPlaying) {
            return;
        }
    }

    return (
        <>
            <GameSettings speedGame={speedSliderGame}
                          maxSpeed={maxSpeed}
                          minSpeed={minSpeed}
                          sizeField={sizeField}
                          handleSizeChanged={handleSizeChanged}
                          handleSpeedChanged={handleSpeedChanged} isClosed={isClosed} handleClosedClick={handleClosedClick}></GameSettings>
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
                        <div className="game-main__field">
                            <CanvasField isDraw={isDraw}
                                         isPlaying={isPlaying}
                                         speedGame={speedGame}
                                         sizeField={sizeField}></CanvasField>
                        </div>
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
