import {useEffect, useState} from "react";
import CakeShop from "../api/CakeShop";

export default (id) => {
    const [allCakesList, setAllCakesList] = useState([]);
    const [cakeById, setCakeById] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    async function allCakesApi(){
        try {
            const response = await CakeShop.get("/get-all-cakes");
            setAllCakesList(response.data.cake_list);
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    }

    async function getCakeByIdApi(id){
        try {
            const response = await CakeShop.get(`/cake/${id}`);
            setCakeById(response.data);
        } catch (e) {
            setErrorMessage("Something went wrong");
        }
    }



    useEffect((id) => {
        allCakesApi();
        getCakeByIdApi(id)
    }, []);

    return [allCakesApi, allCakesList, errorMessage, getCakeByIdApi, cakeById];

}