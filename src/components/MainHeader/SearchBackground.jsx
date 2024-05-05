import React from "react";
import { SearchStory } from "./SearchStory/SearchStory";
import { Recommendations } from "./Recommendations/Recommendations";
import { PhoneSearchDropdown } from "./PhoneSearchDropdown/PhoneSearchDropdown";

export const SearchBackground = ({search, searchReq}) => {

  if (navigator.userAgent.match(/android/ig) || navigator.userAgent.match(/iphone/ig)) {

    return <PhoneSearchDropdown  />

  } else {
    return (
      <div className={`search-body`} id={search ? "search-body-on" : ""}>
        <div className="div--body--section">

          <SearchStory />

        </div>
        
      </div>
    )
  }
}