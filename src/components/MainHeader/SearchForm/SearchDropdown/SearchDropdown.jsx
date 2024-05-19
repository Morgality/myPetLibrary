import React, { useContext } from "react";
import { Recommendations } from "./Recommendations/Recommendations";
import { IsOpenChildStatus } from "../SearchForm";
import { SearchStory } from "./SearchStory/SearchStory";
import { ResultList } from "./ResultList/ResultList";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

export const SearchDropdown = (props) => {

    const resultClient = new QueryClient()

    const {searchReq} = useContext(IsOpenChildStatus);
    
        return (
            <div id="search--list">

                <div className="serach--story">
                    <div className="serach--story--history">
                        <h3> { searchReq.trim().length < 1 ? 'История' : 'Результаты поиска' } </h3>
                        <span id="serach--story---span">Очистить</span>
                    </div>

                    { searchReq.trim().length < 1 ? 
                    <QueryClientProvider client={resultClient}>
                        <SearchStory />
                    </QueryClientProvider> :
                    <ResultList searchReq={searchReq} /> }

                    

                    <Recommendations />
                </div>

            </div>
        )
}