import React, { useMemo, useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'


function Paginations({total=0, itemsPerPage=3, currentPage=1, onPageChange}) {
    const [totalPage, setTotalPage] = useState(0)
    useEffect(()=>{
        if(total > 0 && itemsPerPage > 0)
        setTotalPage(Math.ceil(total/itemsPerPage));
    }, [total, itemsPerPage])

    const paginationItems = useMemo(()=>{
    const pages = [];

    for(let i = 1; i<= totalPage; i++){
        pages.push(<Pagination.Item key={i} active={i===currentPage} onClick={()=> onPageChange(i)}>
            {i}
        </Pagination.Item>);
    }
    return pages;
    }, [totalPage, currentPage]);
    if(totalPage === 0) return null;
    return (
        <Pagination>
            <Pagination.Prev onCLick={ ()=> onPageChange(currentPage -1 )} disabled={currentPage ===1} />
                {paginationItems}
            <Pagination.Next onCLick={ ()=> onPageChange(currentPage +1 )} disabled={currentPage ===totalPage} />

        </Pagination>
    )
}

export default Paginations
