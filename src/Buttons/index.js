import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDoneTasks} className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>

            <button
                onClick={setAllDoneTasks}
                className="buttons__button"
                autofocus
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;