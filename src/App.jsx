import './App.css'
import { useState } from 'react'





export default function Game() {
    const [rowsCount, setRowsCount] = useState(5);
    const [columnsCount, setColumnsCount] = useState(5);
    const [field, setField] = useState(Array(rowsCount * columnsCount).fill(false));

    function handleCellClick(num) {
        const tempField = field.slice();
        tempField[num] = !tempField[num];
        setField(tempField);
    }

    function handleStartClick() {
        //console.log(field);
    }

    function handleRowsChanged(e){
        if(e.target.value < 5) {
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


    function handleColumnsChanged(e){
        if(e.target.value < 5) {
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


    return(
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
function Field({field, rows, columns, onCellClick}){
    let columnElements = Array(columns);
    let rowsElements = Array(rows);


    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            columnElements[j] = <Cell state={field[i]} onCellClick={() =>onCellClick(i)}></Cell>
            if(j === columns-1){
                rowsElements[i] = <div className="game-field__row">{columnElements}</div>;
            }
        }
    }

    return(
        <>
            {rowsElements}
        </>
    )
}