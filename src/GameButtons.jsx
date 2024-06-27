
export default function GameButtons({isPlaying,isDraw,handleSteplick,handleStartClick,handleClearClick,handleResetClick}){
    return (
        <>
            <button className="game-buttons__step" onClick={handleSteplick}>
                <img src="/public/Img/step-forward.svg" className="start__icon-settings-step"/>
            </button>
            <button className="game-buttons__start" onClick={handleStartClick}>
                <IconForPlay isPlaying={isPlaying}></IconForPlay>
            </button>
            <button className="game-buttons__clear" onClick={handleClearClick}>
                <IconForClear isDraw={isDraw}></IconForClear>
            </button>
            <button className="game-buttons__reset" onClick={handleResetClick}>
                <img src="/public/Img/restart.svg" className="start__icon-settings"/>
            </button>
        </>
    )
}

function IconForPlay({isPlaying}) {
    let icon = isPlaying ? "/public/Img/player-pause.svg" : "/public/Img/player-play.svg";
    return (
        <>
            <img src={icon} className="start__icon-settings" alt="play-pause button"/>
        </>
    )
}

function IconForClear({isDraw}) {
    let icon = isDraw ? "/public/Img/erase.svg" : "/public/Img/brush.svg";
    return (
        <>
            <img src={icon} className="start__icon-settings"/>
        </>
    )
}