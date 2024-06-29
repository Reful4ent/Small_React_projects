import './App.css'
import {useState} from 'react'
import CanvasField from "./CanvasField.jsx";
import GameButtons from "./GameButtons.jsx";
export default function Game() {
    const [sizeField, setSizeField] = useState(20);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedGame, setSpeedGame] = useState(10);
    const [isDraw,setIsDraw] = useState(true);

    function handleSizeChanged(e) {
        setSizeField(e.target.value);
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
            <header className="header">
                <ul className="header__list">
                    <li className="list__item">
                        <button className="list__item options">
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
                    <div className="game-settings__game-buttons">
                        <GameButtons isPlaying={isPlaying}
                                     isDraw={isDraw}
                                     handleSteplick={handleSteplick}
                                     handleResetClick={handleResetClick}
                                     handleStartClick={handleStartClick}
                                     handleClearClick={handleClearClick}></GameButtons>
                    </div>
                </div>
            </main>
            <footer className="footer">asdasdasй</footer>
        </>
    );
}
