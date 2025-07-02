import React, { useRef } from 'react';

function App() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); // Truy cập trực tiếp vào input DOM element
    };

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={handleFocus}>Focus vào ô nhập liệu</button>
        </div>
    );

}

export default App;