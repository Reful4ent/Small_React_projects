import {useEffect, useRef, useState} from "react";


export default function CanvasField({isDraw, isPlaying, speedGame, sizeField}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [field, setField] = useState(Array((300*150)/(sizeField*sizeField)).fill(false));

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

        offsetX = Math.floor(offsetX/sizeField);
        offsetY = Math.floor(offsetY/sizeField);

        if( offsetX < 0 ) {
            offsetX = 0;
        } else if (offsetX >= 300/sizeField) {
            offsetX = 300/sizeField - 1;
        }


        setField(field.map((element, index) => {
            if(index === (offsetY * (300/sizeField) + offsetX) && isDraw) {
                return true;
            } else if (index === (offsetY * (300/sizeField) + offsetX) && !isDraw) {
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
        for (let i = 0; i < 150/sizeField; i++) {
            for (let j = 0; j < 300/sizeField; j++) {
                if(field[i * 300/sizeField + j]) {
                    tempContext.fillStyle = "black";
                    tempContext.fillRect(j * sizeField, i * sizeField, sizeField, sizeField);
                } else  {
                    tempContext.fillStyle = "white";
                    tempContext.fillRect(j * sizeField, i * sizeField, sizeField, sizeField);
                }
            }
        }
    }

    function nextStep() {
        const fieldForChange = countStep(150/sizeField,300/sizeField,field.slice(),field.slice());
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