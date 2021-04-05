import React, { useState, useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BsSliders } from "react-icons/bs";

import Click_1 from "../audio/click_1.wav";

function MainContainer() {

    //-------------------STATES_&_VARIABLES--------------------

    const [bpm, setBpm] = useState("100");
    const [on, setOn] = useState(false);
    const [mill, setMill] = useState(600);

    let click1 = new Audio(Click_1);

    //-------------------FUNCTIONS--------------------

    const handleChange = e => {
        e.preventDefault();
        setBpm(e.target.value);
        setMill(60000 / bpm);
    };

    const start = e => {
        e.preventDefault();
        setOn(true);
    }

    const stop = e => {
        e.preventDefault();
        setOn(false);
    };

    /*function player(state) {
        if (state) {
            setInterval(function() {click1.play()}, mill);
        } else {
            setInterval(function() {click1.play()}, 100);
        }
    };*/

    useEffect(() => {
        if (on) {
            var player = setInterval(function() {click1.play()}, mill);
        } else {
            clearInterval(player);
        }
        // eslint-disable-next-line
    }, [on]);

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
                    <input type="range" name="bpm" value={bpm} min="40" max="300" step="1" id="bpm_fader" onChange={handleChange} />
                </div>
                <div className="monitor">
                    <div className="screen">
                        <h1 id="bpm_value">{bpm}</h1>
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