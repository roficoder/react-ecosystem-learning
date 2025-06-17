import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import LanguageContext from "../context/language";

// MyInputHandle.ts
export interface MyInputHandle {
    focus: () => void;
    clear: () => void;
}

const UserList = forwardRef(({ users, ref }: any) => {
    const langContext = useContext(LanguageContext);
    const internalRef = useRef<MyInputHandle>(null);

    useImperativeHandle(ref, () => ({
        focus: () => internalRef.current?.focus(),
        clear: () => {
            if (internalRef.current) internalRef.current.value = '';
        },
    }))

    return (
        <>
            <select name="" defaultValue={langContext.language} id="" onChange={(e) => {
                langContext.changeLanguage(e.target.value);
            }}>
                <option value="en">English</option>
                <option value="de">Dutch</option>
            </select>
            <input type="text" ref={internalRef} />
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </>
    );
});

export default UserList;