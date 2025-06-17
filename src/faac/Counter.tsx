import { FC, ReactNode, useState } from "react";

interface CounterProps {
    children: (props: { count: number, increment: () => void, decrement: () => void }) => ReactNode
}

const Counter: FC<CounterProps> = ({ children }) => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
            <div>
                <header style={{height: '40px', background: 'gray'}}>This is the header</header>
                <div style={{ height: 'calc(100vh - 80px)'}}>
                    {children({ count, increment, decrement })}
                </div>
                <footer style={{ height: '40px', background: 'orangered' }}>This is the footer</footer>
            </div>  
        </>
    );
};

export default Counter;