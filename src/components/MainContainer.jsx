import React, { useState, useRef } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BsSliders } from "react-icons/bs";

import Click_1 from "../audio/click_1.wav";
import Click_2 from "../audio/click_2.wav";

function MainContainer() {

    //-------------------STATES_&_VARIABLES--------------------

    const [rhythm, setRhythm] = useState({
        playing: false,
        bpm: 100,
        counter: 4
    })

    let click1 = new Audio(Click_1);
    let click2 = new Audio(Click_2);

    var player = useRef(null);

    //-------------------FUNCTIONS--------------------

    const handleBpmChange = e => {
        e.preventDefault();
        if (player.current != null) {
            clearInterval(player.current);
            setRhythm({...rhythm, bpm: e.target.value});
            player.current = setInterval(
                () => {
                    if (rhythm.counter % 4 === 0) {
                        click1.play();
                    } else {
                        click2.play();
                    };
                    setRhythm({...rhythm, counter: rhythm.counter++});
                }, 60000 / rhythm.bpm
            );
        } else {
            setRhythm({...rhythm, bpm: e.target.value});
        };
    };

    const start = e => {
        e.preventDefault();
        if (!rhythm.playing) {
            setRhythm({...rhythm, playing: true});
            clearInterval(player.current);
            player.current = setInterval(
                () => {
                    if (rhythm.counter % 4 === 0) {
                        click1.play();
                    } else {
                        click2.play();
                    };
                    setRhythm({...rhythm, counter: rhythm.counter++});
                }, 60000 / rhythm.bpm
            );
        };
    };

    const stop = e => {
        e.preventDefault();
        setRhythm({...rhythm, counter: 4, playing: false});
        clearInterval(player.current);
    };

    //-------------------RETURN--------------------

    return(
        <div className="main_container">
            <div className="box">
                <div className="logo">
                    <h1>Metronome</h1>
                    <p>by Fabio Lorenzi</p>
                </div>
                <div className="input_fader">
                    <label htmlFor="bpm">BPM</label>
                    <input type="range" name="bpm" value={rhythm.bpm} min="40" max="300" step="1" id="bpm_fader" onChange={handleBpmChange} />
                </div>
                <div className="monitor">
                    <div className="screen">
                        <h1 id="bpm_value">{rhythm.bpm}</h1>
                    </div>
                    <div className="buttons">
                        <button id="play" onClick={start}><AiFillCaretRight /></button>
                        <button id="stop" onClick={stop}><BsSliders id="stopIcon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;