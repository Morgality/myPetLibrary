import React, { useEffect, useState } from "react";
import "./UserInfo.scss"
import { getUserInfo } from "../../../api/getUserInfo";
import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query';
import axios from "axios";

export const UserInfo = () => {

    const id = 10;

    const { isLoading, isError, data } = useQuery({
        queryKey: ['user', {id}],
        queryFn: getUserInfo
    });

    console.log(data)

    if (isLoading ) {
        return (
            <p> Loading </p>
        )
    }

    return (
        <div className="profile--stats">

            <div id="profile--avatar">
                {data[0].name.split(' ').map(item => item[0])}
            </div>
            
            <p style={{
                fontWeight: 'bold'
            }}> {data[0].name} </p>
            
            <div className="profile--contacts">
                <p> <strong>E-mail:</strong> {` ${data[0].website}`} </p>
                <p> <strong>Адрес:</strong> {` ${data[0].address.city}, ${data[0].address.street}`} </p>
                <p> <strong>Phone:</strong> {` +7-${data[0].phone}`} </p>
            </div>
            
            
        </div>
    )
}