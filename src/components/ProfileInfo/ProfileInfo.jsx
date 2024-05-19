import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ChartBlock } from "./ChartBlock/ChartBlock";
import { getUserInfo } from "../../api/getUserInfo";
import { UserInfo } from "./UserInfo/UserInfo";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';


export const ProfileInfo = () => {

    const queryClient = new QueryClient();

    const [user, setUser] = useState(null);

    const profileId = useParams().number;

    useEffect(() => {
        setUser(getUserInfo(profileId));
    } ,[])

    return (
        <QueryClientProvider client={queryClient}>
            <div className="profile-info" style={{display: 'flex', padding: '1em'}}>
                <UserInfo />
                <ChartBlock />
            </div>
        </QueryClientProvider>
    )
}