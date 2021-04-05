import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BsSliders } from "react-icons/bs";

function MainContainer() {
    const [bpm, setBpm] = useState("100");

    const handleChange = e => {
        e.preventDefault();
        setBpm(e.target.value);
        console.log(bpm);
    };

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
                        <button id="play"><AiFillCaretRight /></button>
                        <button id="stop"><BsSliders id="stopIcon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;