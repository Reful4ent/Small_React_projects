import {useEffect, useRef, useState} from "react";


export default function CanvasField({isDraw, isPlaying, speedGame}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [field, setField] = useState(Array(450).fill(false));

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        contextRef.current = context;
        if (!isPlaying) {
            return;
        }
        const ticking = setInterval(nextStep, speedGame);
        return () => clearInterval(ticking);
    },[canvasRef,contextRef, isPlaying, nextStep,speedGame]);

    const handleFieldMove = (eventClick) =>  {
        if (!isDown) {
            return;
        }
        let {offsetX,offsetY} = eventClick.nativeEvent;

        offsetX = Math.floor(offsetX/10);
        offsetY = Math.floor(offsetY/10);

        if( offsetX < 0 ) {
            offsetX = 0;
        } else if (offsetX >= 30) {
            offsetX = 30-1;
        }


        setField(field.map((element, index) => {
            if(index === (offsetY * 30 + offsetX) && isDraw) {
                return true;
            } else if (index === (offsetY * 30 + offsetX) && !isDraw) {
                return false;
            } else {
                return element;
            }
        }));

        drawField();
    }


    function drawField(){
        const tempContext = contextRef.current;
        tempContext.clearRect(0,0,300,150);
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 30; j++) {
                if(field[i * 30 + j] && isDraw) {
                    tempContext.fillRect(j * 10, i * 10, 10, 10);
                } else if (field[i * 30 + j] && !isDraw) {
                    tempContext.clearRect(j * 10, i * 10, 10, 10);
                }
            }
        }
    }

    function nextStep() {
        const fieldForChange = countStep(15,30,field.slice(),field.slice());
        setField(fieldForChange);
        drawField();
    }

    return (
        <>
            <canvas className="game-field__canvas"
                    onMouseMove={(event) => handleFieldMove(event)}
                    onMouseDown={() => {setIsDown(true)}}
                    onMouseUp={() => {setIsDown(false)}}
                    ref={canvasRef}
            ></canvas>
        </>
    )
}


function countStep(Y, X, tempField, fieldForChange){
    for (let i = 0; i < Y; i++) {
        console.log(i + "\n");
        for (let j = 0; j < X; j++) {
            let countNeighbour = 0;
            countNeighbour += tempField[getX(j-1,X) + X * getY(i-1,Y)];
            countNeighbour += tempField[getX(j,X) + X * getY(i-1,Y)];
            countNeighbour += tempField[getX(j+1,X) + X * getY(i-1,Y)];
            countNeighbour += tempField[getX(j-1,X) + X * getY(i,Y)];
            countNeighbour += tempField[getX(j+1,X) + X * getY(i,Y)];
            countNeighbour += tempField[getX(j-1,X) + X * getY(i+1,Y)];
            countNeighbour += tempField[getX(j,X) + X * getY(i+1,Y)];
            countNeighbour += tempField[getX(j+1,X) + X * getY(i+1,Y)];
            if ((tempField[i * X + j] === false) && (countNeighbour === 3)) {
                fieldForChange[i * X + j] = true;
            } else if (countNeighbour < 2 || countNeighbour > 3) {
                fieldForChange[i * X + j] = false;
            }
        }
    }
    return fieldForChange;
}

const getX = (x, length) => (length + x) % length;
const getY = (y, width) => (width + y) % width;