import React, { useState } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

export const PagePagination = ({page, setPage}) => {

    return (
        <Pagination defaultCurrent={page} total={42} onChange={e => {
            setPage(e)
            window.location.href="#"
        }} />
    )
}