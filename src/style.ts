import styled from "styled-components";



export const ConceptDiv = styled.div`
    border: thin solid gray;
    border-radius: 8px;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 1em;
`

export const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`

export const ImportantNotes = styled.ul`
    list-style: none;

    li {
        font-size: 18px;
        
        margin-block: 1em;
    }

`

export const CommonButton = styled.button`
        background-color: gray;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 0.5em 1em;
        color: white;
        cursor: pointer;
` 