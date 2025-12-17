// Task 1: The Toggle Switch (useState)
// Goal: Create a component that toggles between "ON" and "OFF" when a button is clicked.

// Bonus: Use useEffect to log the current status to the console every time it changes.

// ---

import useFetch from "./useFetch";

function Button(props) {
    const curentState = useFetch(curentState);

    return (
        <button onClick={curentState}>{curentState}</button>
    );
}

export default Button

// Task 2: Window Width Tracker (Custom Hook)
// Goal: Write a custom hook called useWindowWidth that returns the current window width.

// Requirements: * Use useEffect to add a resize event listener on mount.

// Clean up the event listener on unmount.

// Display the width in a component.
