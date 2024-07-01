export default function GameSettings({sizeField,handleSizeChanged,maxSpeed, minSpeed, speedGame,handleSpeedChanged, isClosed, handleClosedClick}) {
    let value = isClosed ? "game__game-settings" : "game__game-settings-hidden";
    return (
        <>
            <div className={value}>
                <div className="game-settings-close">
                    <button className="close__button" onClick={handleClosedClick}>
                        <img src="/public/Img/close.svg" className="close__icon"/>
                    </button>
                </div>
                <div className="game-settings__set-field">
                    <div className="set-field__size">
                        <text className="count-text">Размер сетки</text>
                        <input type="range" className="field_slider" min={7} max={150} value={sizeField}
                               onChange={handleSizeChanged}/>
                    </div>
                    <div className="set-field__speed">
                        <text className="count-text">Скорость изменения:</text>
                        <input type="range" className="field_slider" min={minSpeed} max={maxSpeed} value={speedGame}
                               onChange={handleSpeedChanged}/>
                    </div>
                </div>
            </div>
        </>
    )
}
