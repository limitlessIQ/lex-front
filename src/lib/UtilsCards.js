import { apiEndPoints } from "./apiEndPoints"

// make api calls associated with cards
export const UcardApiCalls = async (method,axios) => {
    if(method === 'GET'){
        const response = await axios.get(
            `${apiEndPoints.baseUrl}/users/cards`,
            {"headers": {'x-auth-token': sessionStorage.getItem('token')}}
        )

        if(response.data.error){
            return response.data.error
        }    

        if(response.data){
            return response.data
        }
    }
}