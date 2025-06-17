import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import LanguageContext from "../context/language";

const UserList = forwardRef(({ users, ref }: any) => {
    const langContext = useContext(LanguageContext);
    const internalRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => internalRef?.current?.focus(),
        clear: () => internalRef?.current?.clear()
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