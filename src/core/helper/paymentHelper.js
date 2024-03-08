import{API} from "../../backend"

export const getmeToken = (userID, token ) => {
    return fetch(`${API}payment/gettoken/${userID}/${token}`,{
        method:"GET",
    })
    .then(Response => {
        return Response.json()
    })
    .catch(err => console.log(err))
};

export const processPayment = (userId, token , paymentInfo ) => {
    const formData = new FormData();

    for(const name in paymentInfo){
        formData.append(name , paymentInfo[name])
    }
    return fetch(`${API}payment/process/${userId}/${token}/`,{
        method:"POST",
        body:formData
    })
    .then(Response => {
        console.log("p-0" ,Response)
        Response.json()
    })
    .catch(err => console.log(err))
}