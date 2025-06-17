import { FC, useContext, useEffect, useRef, useState } from "react";
import css from "./Test.module.css";
import "./style.css";
import ComponentOne from "../components/ComponentOne";
import withLoading from "../hoc/withLoading";
import UserList from "../components/Userlist";
import withLogger from "../hoc/withLogger";
import LanguageContext from "../context/language";
import ServiceErrorBoundary from "../error-boundary/service-error-boundary";

const MyComponent: FC<{ name: string }> = ({ name }) => {

    // if (true) {
    //     throw new Error("This is an intentional test error!");
    // }
    const [error, setError] = useState(true);


    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const UserListWithLoading = withLogger(withLoading(UserList));
    const { language, translations } = useContext(LanguageContext);

    useEffect(() => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: 'Raouf' },
                { id: 2, name: 'Rehman' },
            ]);
            setLoading(false)
            setError(false);
        }, 2000)
    }, [])

    let inputRef = null;
    let input2Ref = useRef(null);

    const setRef = (el: any) => {
        if (el) {
            inputRef = el;
            el.focus();
        }
    }

    useEffect(() => {
        console.log(input2Ref)
    }, [])

    return (
        <>
            <h1>{name}</h1>
            {/* <UserListWithLoading ref={input2Ref} isLoading={loading} users={users} /> */}
            <ServiceErrorBoundary>
                <UserList users={users} ref={setRef} error={error} />
            </ServiceErrorBoundary>
            <h1>{translations.greeting}</h1>
            <h1>{language}</h1>
            <input type="text" placeholder="Enter you name ..." />

        </>
    );
}

export default MyComponent;
