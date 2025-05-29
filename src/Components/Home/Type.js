import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div>
            <h1 style={{ color: 'white', fontSize: '25px' }}>
                <Typewriter
                    options={{
                        strings: [
                            "I'M PRANAV DUNNA",
                            "WELCOME TO MY PORTFOLIO"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h1>
        </div>
    );
}

export default Type;
