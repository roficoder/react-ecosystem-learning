import { FC } from "react";
import { CommonButton, ConceptDiv } from "../../style";
import { Link } from "react-router-dom";
import { PATHSNAME } from "../../enums/pathNames";
import { DATA_ARR } from "../../assets/data";

const Home: FC = () => {
    return (
        <>
            {
                DATA_ARR.map((path, index) => {
                    return (
                        <>
                            <ConceptDiv>
                                <h1>{path}</h1>
                                <Link to={'/' + path}> <CommonButton>Go to Details</CommonButton></Link>
                            </ConceptDiv>
                        </>
                    )
                })
            }

        </>
    )
}

export default Home;