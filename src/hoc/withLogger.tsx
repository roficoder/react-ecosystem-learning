import { FC } from "react";

const withLogger = (WrapperComponent: FC<any>) => {
    return (props: any) => {
        console.log(props)
        return <WrapperComponent {...props} />
    }
}

export default withLogger;