import './App.css'
import {useEffect, useState} from 'react'


export default function Game() {
    const [rowsCount, setRowsCount] = useState(50);
    const [columnsCount, setColumnsCount] = useState(50);
    const [field, setField] = useState(Array(rowsCount * columnsCount).fill(false));
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(()=>{
        if(!isPlaying) {
            return;
        }
        const  ticking = setInterval(nextStep,100);
        return () => clearInterval(ticking);
    },[isPlaying,nextStep])

    function handleCellClick(num) {
        const tempField = field.slice();
        tempField[num] = !tempField[num];
        setField(tempField);
    }

    function handleStartClick() {
        if(!isPlaying) {
            setIsPlaying(true);
            return;
        }
        setIsPlaying(false);
    }

    function handleRowsChanged(e) {
        if (e.target.value < 5) {
            setRowsCount(5);
            setField(Array(5 * columnsCount).fill(false));
            return;
        } else if (e.target.value > 50) {
            setRowsCount(50);
            setField(Array(50 * columnsCount).fill(false));
            return;
        }
        setRowsCount(e.target.value);
        setField(Array(e.target.value * columnsCount).fill(false));
    }

    function nextStep(){
        console.log(field);
        const tempField = field.slice();
        const fieldForChange = field.slice();
        for (let i = 0; i < rowsCount; i++) {
            for (let j = 0; j < columnsCount; j++) {
                let countNeighbour = 0;
                if (i === 0 && j === 0) {
                    countNeighbour += tempField[i * columnsCount + (j + 1)];
                    countNeighbour += tempField[((i + 1) * columnsCount) + (j + 1)];
                    countNeighbour += tempField[((i + 1) * columnsCount) + j];

                } else if (i === 0 && j === rowsCount - 1) {
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + j];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j - 1)];

                } else if (i === columnsCount - 1 && j === 0) {
                    countNeighbour += tempField[i * columnsCount + (j + 1)];
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j + 1)];

                } else if (i === columnsCount - 1 && j === rowsCount - 1) {
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j - 1)];

                } else if ((i !== 0 || i !== columnsCount - 1) && j === 0) {
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[((i- 1)* columnsCount) + (j + 1)];
                    countNeighbour += tempField[i * columnsCount + (j + 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + j];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j + 1)];

                } else if ((i !== 0 || i !== columnsCount - 1) && j === rowsCount - 1) {
                    countNeighbour += tempField[((i- 1)* columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[((i+ 1)* columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i+ 1)* columnsCount) + j];

                } else if (i === 0 && (j !== 0 || j !== rowsCount - 1)) {
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[i * columnsCount + (j + 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + j];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j + 1)];

                } else if (i === columnsCount - 1 && (j !== 0 || j !== rowsCount - 1)) {
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j + 1)];
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[i * columnsCount + (j + 1)];

                } else {
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i- 1) * columnsCount) + j];
                    countNeighbour += tempField[((i- 1) * columnsCount) + (j + 1)];
                    countNeighbour += tempField[i * columnsCount + (j - 1)];
                    countNeighbour += tempField[i * columnsCount + (j + 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j - 1)];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + j];
                    countNeighbour += tempField[((i+ 1) * columnsCount) + (j + 1)];

                }
                if ((tempField[i * columnsCount + j] === false) && (countNeighbour === 3)) {
                    fieldForChange[i * columnsCount + j] = true;
                } else if (countNeighbour < 2 || countNeighbour > 3) {
                    fieldForChange[i * columnsCount + j] = false;
                }
            }
        }
        setField(fieldForChange);
    }


    function handleColumnsChanged(e) {
        if (e.target.value < 5) {
            setColumnsCount(5);
            setField(Array(rowsCount * 5).fill(false));
            return;
        } else if (e.target.value > 50) {
            setColumnsCount(50);
            setField(Array(rowsCount * 50).fill(false));
            return;
        }
        setColumnsCount(e.target.value);
        setField(Array(rowsCount * e.target.value).fill(false));
    }


    return (
        <>
            <div className="game">
                <div className="game__game-field">
                    <Field field={field} rows={rowsCount} columns={columnsCount} onCellClick={handleCellClick}></Field>
                </div>
                <div className="game__game-settings">
                    <button className="game-settings__start" onClick={handleStartClick}>Начать игру</button>
                    <div className="game-settings__set-field">
                        <div className="set-field__rows-count">
                            <text className="count-text">Количество строк:</text>
                            <input type="number" value={rowsCount} onChange={handleRowsChanged}/>
                        </div>
                        <div className="set-field__columns-count">
                            <text className="count-text">Количество столбцов:</text>
                            <input type="number" value={columnsCount} onChange={handleColumnsChanged}/>
                        </div>
                    </div>
                </div>
            </div>
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