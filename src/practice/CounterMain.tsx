import { FC, useState } from "react";
import CounterUser from "./CounterUser";
import CounterUser2 from "./CounterUser2";

const CounterMain: FC = () => {

    const [isGridLayout, setIsGridLayout] = useState(true);

    return (
        <>
            <button onClick={() => setIsGridLayout(!isGridLayout)}>{isGridLayout ? 'Block': 'Grid'}</button>
            {
                isGridLayout ? 
                    <CounterUser/>: <CounterUser2/>
            }
        </>
    )
}

export default CounterMain;