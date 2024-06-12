import './App.css'
import { useState } from 'react'





export default function Field() {
    const [rowsCount, setRowsCount] = useState(5);
    const [columnsCount, setColumnsCount] = useState(5);
    const [field, setField] = useState(Array(rowsCount * columnsCount).fill(false));

    function handleCellClick(num) {
        const tempField = field.slice();
        tempField[num] = !tempField[num];
        setField(tempField);
    }

    function handleStartClick() {
        console.log(field);
    }

    function handleRowsChanged(e){
        if(e.target.value<5) {
            setRowsCount(5);
            setField(Array(5 * columnsCount).fill(false));
            return;
        } else if (e.target.value > 50) {
            setRowsCount(50);
            setField(Array(50 * columnsCount).fill(false));
            return;
        }
        setRowsCount(e.target.value);
    }


    function handleColumnsChanged(e){
        if(e.target.value<5) {
            setColumnsCount(5);
            CreateNewField();
            return;
        } else if (e.target.value > 50) {
            setColumnsCount(50);
            CreateNewField();
            return;
        }
        setColumnsCount(e.target.value);
        CreateNewField();
    }

    function CreateNewField(){
        setField(Array(rowsCount * columnsCount).fill(false));
    }

    return(
        <>
            <div className="game">
                <div className="game__game-field">
                    <div className="game-field__row">
                        <Cell state={field[0]} onCellClick={() => handleCellClick(0)}></Cell>
                        <Cell state={field[1]} onCellClick={() => handleCellClick(1)}></Cell>
                        <Cell state={field[2]} onCellClick={() => handleCellClick(2)}></Cell>
                        <Cell state={field[3]} onCellClick={() => handleCellClick(3)}></Cell>
                        <Cell state={field[4]} onCellClick={() => handleCellClick(4)}></Cell>
                    </div>
                    <div className="game-field__row">
                        <Cell state={field[5]} onCellClick={() => handleCellClick(5)}></Cell>
                        <Cell state={field[6]} onCellClick={() => handleCellClick(6)}></Cell>
                        <Cell state={field[7]} onCellClick={() => handleCellClick(7)}></Cell>
                        <Cell state={field[8]} onCellClick={() => handleCellClick(8)}></Cell>
                        <Cell state={field[9]} onCellClick={() => handleCellClick(9)}></Cell>
                    </div>
                    <div className="game-field__row">
                        <Cell state={field[10]} onCellClick={() => handleCellClick(10)}></Cell>
                        <Cell state={field[11]} onCellClick={() => handleCellClick(11)}></Cell>
                        <Cell state={field[12]} onCellClick={() => handleCellClick(12)}></Cell>
                        <Cell state={field[13]} onCellClick={() => handleCellClick(13)}></Cell>
                        <Cell state={field[14]} onCellClick={() => handleCellClick(14)}></Cell>
                    </div>
                    <div className="game-field__row">
                        <Cell state={field[15]} onCellClick={() => handleCellClick(15)}></Cell>
                        <Cell state={field[16]} onCellClick={() => handleCellClick(16)}></Cell>
                        <Cell state={field[17]} onCellClick={() => handleCellClick(17)}></Cell>
                        <Cell state={field[18]} onCellClick={() => handleCellClick(18)}></Cell>
                        <Cell state={field[19]} onCellClick={() => handleCellClick(19)}></Cell>
                    </div>
                    <div className="game-field__row">
                        <Cell state={field[20]} onCellClick={() => handleCellClick(20)}></Cell>
                        <Cell state={field[21]} onCellClick={() => handleCellClick(21)}></Cell>
                        <Cell state={field[22]} onCellClick={() => handleCellClick(22)}></Cell>
                        <Cell state={field[23]} onCellClick={() => handleCellClick(23)}></Cell>
                        <Cell state={field[24]} onCellClick={() => handleCellClick(24)}></Cell>
                    </div>
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
