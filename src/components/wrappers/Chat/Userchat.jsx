import React, {useState} from "react";
import axios from 'axios'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const queryClient = new QueryClient();

async function getClienBase() {
    return (await axios.get('https://jsonplaceholder.typicode.com/users')).data
}


export const Userchat = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

const Example = () => {

    const query = useQuery({queryKey: ['clients'] , queryFn: getClienBase})

    console.log(query.data)

    return (
        <>
            { query.isLoading ? <p>Loading</p> : 
            query.data.map(item => {
                return ( <li> {item.name} </li> )
            }) }
        </>
    )

}