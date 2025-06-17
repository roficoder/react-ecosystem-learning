import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import LanguageContext from "../context/language";

// MyInputHandle.ts
export interface MyInputHandle {
    focus: () => void;
    clear: () => void;
}

const UserList = forwardRef(({ users, error, ref, }: any) => {

    // const [error, setError] = useState(true);
    if (error) {
        throw new Error("this is an intentional user service unavailbility error")
    }

    const langContext = useContext(LanguageContext);
    const internalRef = useRef<MyInputHandle>(null);

    useImperativeHandle(ref, () => ({
        focus: () => internalRef.current?.focus(),
        clear: () => {
            // if (internalRef.current) internalRef.current = '';
        },
    }))

    // useEffect(() => {
    //     setTimeout(() => {
    //         setError(false);
    //     }, 3000);
    // }, [])

    return (
        <>
            <select name="" defaultValue={langContext.language} id="" onChange={(e) => {
                langContext.changeLanguage(e.target.value);
            }}>
                <option value="en">English</option>
                <option value="de">Dutch</option>
            </select>
            <input type="text" ref={ref} />
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
            {/* <button>Set Erro to False</button> */}
        </>
    );
});

export default UserList;