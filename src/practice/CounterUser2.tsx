import { FC } from "react";
import Counter from "../faac/Counter";

const CounterUser2: FC = () => {
    return (
        <Counter>
            {({ count, increment, decrement }) => (
                <div>
                    <div>
                        <button onClick={decrement}>Decrement</button>
                        <button onClick={increment}>Increment</button>
                    </div>
                    <p>This is the example of FaaC, which I am trying to understand and learn actually</p>
                    <h1>{count}</h1>
                </div>
            )}
        </Counter>
    );
};

export default CounterUser2;