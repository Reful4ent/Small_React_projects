import {useMemo, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";


function CanvasField({isDraw, isPlaying, speedGame, sizeField}, ref) {

    const [widthCanvas, setWidthCanvas] = useState(window.innerWidth-44);
    const [heightCanvas, setHeightCanvas] = useState(window.innerHeight-204);
    const [isDown, setIsDown] = useState(false);

    let columns = Math.floor((window.innerWidth-44)/sizeField);
    let rows = Math.floor((window.innerHeight-204)/sizeField);
    const [field, setField] = useState(Array(rows*columns).fill(false));

    const canvasRef = useRef(null);
    const contextRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
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
                    tempContext.fillStyle = "transparent";
                    tempContext.fillRect(j * widthCanvas/columns, i * heightCanvas/rows, widthCanvas/columns, heightCanvas/rows);
                }
            }
        }

    }

    const resizeBoard =  useCallback(() => {
        setWidthCanvas(window.innerWidth-44);
        setHeightCanvas(window.innerHeight-204)
        columns = Math.floor((window.innerWidth-44)/sizeField);
        rows = Math.floor((window.innerHeight-204)/sizeField);
        setField(Array((rows*columns)).fill(false));
    },[]);



    const clearField = () =>  {
        setField(Array((rows*columns)).fill(false));
        const tempContext = contextRef.current;
        tempContext.clearRect(0,0,widthCanvas,heightCanvas);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                tempContext.fillStyle = "transparent";
                tempContext.fillRect(j * widthCanvas/columns, i * heightCanvas/rows, widthCanvas/columns, heightCanvas/rows);
            }
        }
    }


    const drawGrid = useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.height = heightCanvas;
        canvas.width = widthCanvas;
        const context = canvas.getContext("2d");
        for (let x = 1.5; x < widthCanvas; x += widthCanvas/columns) context.strokeRect(x, 0, 0.1, heightCanvas);
        for (let y = 1.5; y < heightCanvas; y += heightCanvas/rows) context.strokeRect(0, y, widthCanvas, 0.1);
        return canvas.toDataURL();
    },[widthCanvas,heightCanvas,columns,rows]);


    useImperativeHandle(ref,() => ({clearField,nextStep,resizeBoard}));

    return (
        <>
            <div className="game-main__field" >
                <div className="bacl" style={{height: heightCanvas + 4+"px",background: "url('" + drawGrid + "')"}}>
                    <canvas className="game-field__canvas"
                            onMouseMove={(event) => handleFieldMove(event)}
                            onMouseDown={() => {
                                setIsDown(true)
                            }}
                            onMouseUp={() => {
                                setIsDown(false)
                            }}
                            ref={canvasRef}
                            width={widthCanvas}
                            height={heightCanvas}
                    ></canvas>
                </div>
            </div>
        </>
    )
}


function countStep(rows, columns, tempField, fieldForChange) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let countNeighbour = 0;
            countNeighbour += tempField[getX(j - 1, columns) + columns * getY(i - 1, rows)];
            countNeighbour += tempField[getX(j, columns) + columns * getY(i - 1, rows)];
            countNeighbour += tempField[getX(j + 1, columns) + columns * getY(i - 1, rows)];
            countNeighbour += tempField[getX(j - 1, columns) + columns * getY(i,rows)];
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


export default forwardRef(CanvasField);