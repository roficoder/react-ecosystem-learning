import { APIS } from "../api/api"

const useData = () => {

    const getCommonData = async (setData: Function, file: string) => {
        const response = await APIS.getCommonData(file);
        console.log(response);
        
        setData(response?.data?.data)
    }
    
    return {
        getCommonData
    }
}

export default useData;