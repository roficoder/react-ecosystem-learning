import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import UseState from "../concepts/useState/UseState";
import Home from "../concepts/home/Home";
import { PATHSNAME } from "../enums/pathNames";
import { DATA_ARR } from "../assets/data";

const AppRoutes: FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
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