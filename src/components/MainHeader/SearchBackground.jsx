import React from "react";
import { SearchStory } from "./SearchStory/SearchStory";
import { Recommendations } from "./Recommendations/Recommendations";

export const SearchBackground = ({search, searchReq}) => {
    return (
    <div className={`search-body`} id={search ? "search-body-on" : ""}>
        <div className="div--body--section">

          <SearchStory />

        </div>
        
      </div>
    )
}