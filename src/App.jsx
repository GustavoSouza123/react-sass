import React from "react";
import "./css/index.scss";

export default function App() {
    return (
        <>
            <div className="title">
                <h1>Hello World!</h1>
            </div>

            <nav>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
            </nav>

            <div className="content">
                <div className="text-1">Text</div>
                <div className="text-2">Text</div>
                <div className="text-3">Text</div>
                <div className="text-4">Text</div>
            </div>

            <div className="squares">
                <div className="square blue-bg"></div>
                <div className="square orange-bg"></div>
                <div className="square green-bg"></div>
            </div>
        </>
    );
}