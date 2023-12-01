import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import API_URL from "../config";

function UserCheck() {

    // ejemplo capsula: Hacen post a localhost/scope-example/protecteduser
    const {token} = useContext(AuthContext);

    const config = {
        'method' : 'get',
        'url' : `${API_URL}` || "",
        'headers' : {
            'Authorization' : `Bearer ${token}`
        }
    }

    useEffect( () => {
        axios(config).then((response) => {
            console.log("Enviaste token bueno");
        }).catch((error) => {
            console.log(error);
        })
    },  [])

    return (
        <></>
    );
    // hay que añadirlo a las rutas como con Login
    // asi como con UserCheck se puede hacer AdminCheck-
    // 401 es error de token 403 es error de permiso
    // tambien se puede hacer un compon Logout. Ultimos 2-3 min capsu
}

export default UserCheck;