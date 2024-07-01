export default function GameSettings({sizeField,handleSizeChanged,speedGame,handleSpeedChanged}) {
    return (
        <>
            <div className="game__game-settings">
                <div className="game-settings__set-field">
                    <div className="set-field__size">
                        <text className="count-text">размер сетки</text>
                        <input type="range" className="field_slider" min={5} max={150} value={sizeField}
                               onChange={handleSizeChanged}/>
                    </div>
                    <div className="set-field__speed">
                        <text className="count-text">скорость изменения:</text>
                        <input type="range" className="field_slider" min={10} max={500} value={speedGame}
                               onChange={handleSpeedChanged}/>
                    </div>
                </div>
            </div>
        </>
    )
}