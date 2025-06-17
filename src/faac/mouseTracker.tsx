import { useState } from "react";

const MouseTracker = ({ children }: any) => {

    const [position, setPosition] = useState<any>();

    const handleMouseMove = (e: any) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div style={{ height: '100vh', background: 'seagreen' }} onMouseMove={handleMouseMove}>
            {children(position)}
        </div>
    );
}

export default MouseTracker;