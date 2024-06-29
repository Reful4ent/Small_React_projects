import {useCallback, useEffect, useRef, useState} from "react";


export default function CanvasField({isDraw, isPlaying, speedGame, sizeField}) {
    const [widthCanvas, setWidthCanvas] = useState(window.innerWidth-40);
    const [heightCanvas, setHeightCanvas] = useState(window.innerHeight-200);
    let columns = Math.floor((window.innerWidth-40)/sizeField);
    let rows = Math.floor((window.innerHeight-200)/sizeField);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [field, setField] = useState(Array(rows*columns).fill(false));


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        for (let x = -0.5; x < widthCanvas; x += widthCanvas/columns) context.strokeRect(x, 0, 0.1, heightCanvas);
        for (let y = -0.5; y < heightCanvas; y += heightCanvas/rows) context.strokeRect(0, y, widthCanvas, 0.1);
        contextRef.current = context;

        window.addEventListener('resize', resizeBoard);

        if (!isPlaying) {
            return;
        }
        const ticking = setInterval(nextStep, speedGame);
        return () => {
            clearInterval(ticking);
            window.removeEventListener('resize', resizeBoard);
        }
    },[canvasRef,contextRef, isPlaying, nextStep,speedGame]);

    const handleFieldMove = (eventClick) =>  {

        if (!isDown) {
            return;
        }
        let {offsetX,offsetY} = eventClick.nativeEvent;

        offsetX = Math.floor(offsetX/sizeField);
        offsetY = Math.floor(offsetY/sizeField);

        setField(field.map((element, index) => {
            if(index === (offsetY * (columns) + offsetX) && isDraw) {
                return true;
            } else if (index === (offsetY * (columns) + offsetX) && !isDraw) {
                return false;
            } else {
                return element;
            }
        }));

        drawField();
    }

    function nextStep() {
        const fieldForChange = countStep(rows,columns,field.slice(),field.slice());
        setField(fieldForChange);
        drawField();
    }

    function drawField(){
        const tempContext = contextRef.current;
        tempContext.clearRect(0,0,widthCanvas,heightCanvas);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if(field[i * columns + j]) {
                    tempContext.fillStyle = "black";
                    tempContext.fillRect(j * widthCanvas/columns, i * heightCanvas/rows, widthCanvas/columns, heightCanvas/rows);
                } else  {
                    tempContext.fillStyle = "white";
                    tempContext.fillRect(j * widthCanvas/columns, i * heightCanvas/rows, widthCanvas/columns, heightCanvas/rows);
                }
            }
        }

    }

    const resizeBoard =  useCallback(() => {
        setWidthCanvas(window.innerWidth-40);
        setHeightCanvas(window.innerHeight-200)
        columns = Math.floor((window.innerWidth-40)/sizeField);
        rows = Math.floor((window.innerHeight-200)/sizeField);
        setField(Array((rows*columns)).fill(false))
    },[]);

    function drawGrid() {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        contextRef.current = context;
        return canvas.toDataURL();
    }

    return (
        <>
            <canvas className="game-field__canvas"
                    onMouseMove={(event) => handleFieldMove(event)}
                    onMouseDown={() => {setIsDown(true)}}
                    onMouseUp={() => {setIsDown(false)}}
                    ref={canvasRef}
                    width={widthCanvas}
                    height={heightCanvas}
            ></canvas>
        </>
    )
}


function countStep(rows, columns, tempField, fieldForChange){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let countNeighbour = 0;
            countNeighbour += tempField[getX(j-1,columns) + columns * getY(i-1,rows)];
            countNeighbour += tempField[getX(j,columns) + columns * getY(i-1,rows)];
            countNeighbour += tempField[getX(j+1,columns) + columns * getY(i-1,rows)];
            countNeighbour += tempField[getX(j-1,columns) + columns * getY(i,rows)];
            countNeighbour += tempField[getX(j+1,columns) + columns * getY(i,rows)];
            countNeighbour += tempField[getX(j-1,columns) + columns * getY(i+1,rows)];
            countNeighbour += tempField[getX(j,columns) + columns * getY(i+1,rows)];
            countNeighbour += tempField[getX(j+1,columns) + columns * getY(i+1,rows)];
            if ((tempField[i * columns + j] === false) && (countNeighbour === 3)) {
                fieldForChange[i * columns + j] = true;
            } else if (countNeighbour < 2 || countNeighbour > 3) {
                fieldForChange[i * columns + j] = false;
            }
        }
    }
    return fieldForChange;
}

const getX = (x, length) => (length + x) % length;
const getY = (y, width) => (width + y) % width;