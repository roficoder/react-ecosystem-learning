import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import UseState from "../concepts/useState/UseState";
import Home from "../concepts/home/Home";
import { DATA_ARR } from "../assets/data";
import MyComponent from "../practice/MyComponent";
import ComponentOne from "../components/ComponentOne";
import MouseTrackerUser from "../practice/MouseTrackerUser";
import CounterUser from "../practice/CounterUser";
import CounterUser2 from "../practice/CounterUser2";
import CounterMain from "../practice/CounterMain";
const AppRoutes: FC = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faac" element={<MouseTrackerUser />} />
            <Route path="/counter" element={<CounterUser />} />
            <Route path="/counter2" element={<CounterUser2 />} />
            <Route path="/countermain" element={<CounterMain />} />
            <Route path={'/practice'} element={<MyComponent name="Raouf" />} />
            <Route path={'/cone'} element={<ComponentOne />} />
            {
                DATA_ARR.map((item, index) => {
                    return (
                        <>
                            <Route path={'/' + item} element={<UseState />} />
                        </>
                    )
                })
            }
        </Routes>
    )
}

export default AppRoutes;