import Cell from "./Cell.jsx";

// eslint-disable-next-line react/prop-types
export default function Field({field, rows, columns, onCellClick}) {
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
