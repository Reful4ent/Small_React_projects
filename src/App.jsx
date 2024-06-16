import './App.css'
import {useEffect, useState} from 'react'


export default function Game() {
    const [sizeField, setSizeField] = useState(50);
    const [field, setField] = useState(Array(sizeField * sizeField).fill(false));
    const [isPlaying, setIsPlaying] = useState(false);
    const [speedGame, setSpeedGame] = useState(250);


    useEffect(() => {
        if (!isPlaying) {
            return;
        }
        const ticking = setInterval(nextStep, speedGame);
        return () => clearInterval(ticking);
    }, [isPlaying, nextStep, speedGame])

    function handleCellClick(num) {
        const tempField = field.slice();
        tempField[num] = !tempField[num];
        setField(tempField);
    }

    function handleStartClick() {
        if (!isPlaying) {
            setIsPlaying(true);
            return;
        }
        setIsPlaying(false);
    }


    function handleSizeChanged(e) {
        if (isPlaying)
            setIsPlaying(!isPlaying);
        if (e.target.value < 5) {
            setSizeField(5);
            setField(Array(5 * 5).fill(false));
            return;
        } else if (e.target.value > 50) {
            setSizeField(50);
            setField(Array(50 * 50).fill(false));
            return;
        }
        setSizeField(e.target.value);
        setField(Array(e.target.value * e.target.value).fill(false));
    }

    function handleResetClick() {
        if (isPlaying)
            setIsPlaying(!isPlaying);
        setSpeedGame(250);
        setField(Array(sizeField * sizeField).fill(false));
    }

    function nextStep() {
        const tempField = field.slice();
        const fieldForChange = field.slice();
        for (let i = 0; i < sizeField; i++) {
            for (let j = 0; j < sizeField; j++) {
                let countNeighbour = 0;
                if (i === 0 && j === 0) {
                    countNeighbour += tempField[i * sizeField + (j + 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j + 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];

                } else if (i === 0 && j === sizeField - 1) {
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j - 1)];

                } else if (i === sizeField - 1 && j === 0) {
                    countNeighbour += tempField[i * sizeField + (j + 1)];
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[((i - 1) * sizeField) + (j + 1)];

                } else if (i === sizeField - 1 && j === sizeField - 1) {
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[((i - 1) * sizeField) + (j - 1)];

                } else if ((i !== 0 || i !== sizeField - 1) && j === 0) {
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[((i - 1) * sizeField) + (j + 1)];
                    countNeighbour += tempField[i * sizeField + (j + 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j + 1)];

                } else if ((i !== 0 || i !== sizeField - 1) && j === sizeField - 1) {
                    countNeighbour += tempField[((i - 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];

                } else if (i === 0 && (j !== 0 || j !== sizeField - 1)) {
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[i * sizeField + (j + 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j + 1)];

                } else if (i === sizeField - 1 && (j !== 0 || j !== sizeField - 1)) {
                    countNeighbour += tempField[((i - 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[((i - 1) * sizeField) + (j + 1)];
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[i * sizeField + (j + 1)];

                } else {
                    countNeighbour += tempField[((i - 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i - 1) * sizeField) + j];
                    countNeighbour += tempField[((i - 1) * sizeField) + (j + 1)];
                    countNeighbour += tempField[i * sizeField + (j - 1)];
                    countNeighbour += tempField[i * sizeField + (j + 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j - 1)];
                    countNeighbour += tempField[((i + 1) * sizeField) + j];
                    countNeighbour += tempField[((i + 1) * sizeField) + (j + 1)];
                }
                if ((tempField[i * sizeField + j] === false) && (countNeighbour === 3)) {
                    fieldForChange[i * sizeField + j] = true;
                } else if (countNeighbour < 2 || countNeighbour > 3) {
                    fieldForChange[i * sizeField + j] = false;
                }
            }
        }
        setField(fieldForChange);
    }



    return (
        <>
            <header className="header">Game Of Life</header>
            <main>
                <div className="game">
                    <div className="game__game-settings">
                        <button className="game-settings__start" onClick={handleStartClick}><IconForPlay isPlaying={isPlaying}></IconForPlay> </button>
                        <button className="game-settings__reset" onClick={handleResetClick}><img src="/public/Img/restart.svg" className="start__icon-settings"/></button>
                        <div className="game-settings__set-field">
                            <div className="set-field__size">
                                <text className="count-text">размер сетки {sizeField}:{sizeField}</text>
                                <input type="range" min={5} max={50} value={sizeField} onChange={handleSizeChanged}/>
                            </div>
                            <div className="set-field__speed">
                                <text className="count-text">скорость изменения: </text>
                                <input type="range" min={10} max={500} value={speedGame} onChange={e => {
                                    setSpeedGame(e.target.value)
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="game__game-main">
                        <div className="game-main__field">
                            <Field field={field} rows={sizeField} columns={sizeField} onCellClick={handleCellClick}></Field>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">asdasdasй</footer>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function Cell({state, onCellClick}) {
    let value = state ? "row__cell--Alive" : "row__cell--Dead";
    return (
        <button className={value} onClick={onCellClick} value={state}></button>
    )
}

// eslint-disable-next-line react/prop-types
function Field({field, rows, columns, onCellClick}) {
    let rowsElements = Array(rows);

    for (let i = 0; i < rows; i++) {
        let columnElements = Array(columns);
        for (let j = 0; j < columns; j++) {
            columnElements[j] =
                <Cell state={field[i * columns + j]} onCellClick={() => onCellClick(i * columns + j)}></Cell>
            if (j === columns - 1) {
                rowsElements[i] = <div className="game-field__row">{columnElements}</div>;
            }
        }
    }

    return (
        <>
            {rowsElements}
        </>
    )
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