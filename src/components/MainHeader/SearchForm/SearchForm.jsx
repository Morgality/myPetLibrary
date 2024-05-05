import React, { useState, useContext, createContext } from "react";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import "./SearchForm.scss"
import { SearchDropdown } from "./SearchDropdown/SearchDropdown";
export const IsOpenChildStatus = createContext(false); 


export const SearchForm = () => {

    const isPhone = navigator.userAgent.match(/android/gi) || navigator.userAgent.match(/iphone/gi)

    const [onSearch, setOnSearch] = useState(false)

    const [searchReq, setSearchReq] = useState('')

    return (
        
        <div className="search-from">
            <div className="search--main--section">
                <form id="search--input" action="">
                    <Input 
                        style={{
                            border: '2px solid rgb(11, 90, 218)',
                            minWidth: '300px'
                        }}
                        size="large"
                        placeholder="Введите поисковый запрос"
                        allowClear
                        value={searchReq} 
                        onFocus={() => setOnSearch(true)}
                        onChange={(e) => setSearchReq(e.target.value) } 
                    />
                </form>
            </div>

            
            
            <IsOpenChildStatus.Provider value={{
                onSearch : onSearch,
                setOnSearch : setOnSearch,
                searchReq : searchReq
            }}>
                { onSearch ? <><SearchDropdown /> <div onClick={() => setOnSearch(false)} className="search--background"/></>: null }

            </IsOpenChildStatus.Provider>
                


            
        </div>
        
    )
}