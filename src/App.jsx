import './App.css'
import {useEffect, useState} from 'react'
import CanvasField from "./CanvasField.jsx";
export default function Game() {
    const [sizeField, setSizeField] = useState(50);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedGame, setSpeedGame] = useState(250);
    const [isCycle, setIsCycle] = useState(false);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }
        const ticking = setInterval(nextStep, speedGame);
        return () => clearInterval(ticking);
    }, [isPlaying, nextStep, speedGame])

    const handleCycleClick = () => setIsCycle(!isCycle);


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

    function handleResetClick() {
        if (isPlaying)
            setIsPlaying(!isPlaying);
        setSpeedGame(250);
    }

    function handleSteplick() {
        if (!isPlaying) {
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
                <div className="game__game-settings">
                    <div className="game-settings__game-buttons">
                        <button className="game-buttons__step" onClick={handleSteplick}>
                            <img src="/public/Img/step-forward.svg" className="start__icon-settings-step"/>
                        </button>
                        <button className="game-buttons__start" onClick={handleStartClick}>
                            <IconForPlay isPlaying={isPlaying}></IconForPlay>
                        </button>
                        <button className="game-buttons__reset" onClick={handleResetClick}>
                            <img src="/public/Img/restart.svg" className="start__icon-settings"/>
                        </button>
                    </div>
                    <div className="game-settings__set-field">
                        <div className="set-field__size">
                            <text className="count-text">размер сетки {sizeField}:{sizeField}</text>
                            <input type="range" className="field_slider" min={5} max={50} value={sizeField} onChange={handleSizeChanged}/>
                            </div>
                            <div className="set-field__speed">
                                <text className="count-text">скорость изменения:</text>
                                <input type="range" className="field_slider" min={10} max={5000} value={speedGame} onChange={e => {
                                    setSpeedGame(e.target.value)
                                }}/>
                            </div>
                            <div className="set-field__cycle">
                                <text className="count-text">цикличность поля:</text>
                                <input type="checkbox" value={isCycle} onChange={handleCycleClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="game__game-main">
                        <div className="game-main__field">
                            <CanvasField isDraw={true} isPlaying={isPlaying} speedGame={speedGame}></CanvasField>

                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">asdasdasй</footer>
        </>
    );
}



// eslint-disable-next-line react/prop-types
function IconForPlay({isPlaying}) {
    let value = isPlaying ? "/public/Img/player-pause.svg" : "/public/Img/player-play.svg";
    return(
        <>
            <img src={value} className="start__icon-settings" alt="play-pause button"/>
        </>
    )
}
