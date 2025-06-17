import { FC } from "react";

const withLoading = (WrapperComponent: FC<any>) => {
    return ({ isLoading, ...rest }: any) => {
        if (isLoading) {
            return <p>Loading ...</p>
        }
        return <WrapperComponent {...rest} />
    }
} 

export default withLoading;