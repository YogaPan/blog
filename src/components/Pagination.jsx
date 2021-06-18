import React from 'react'
import { Flex } from 'rebass'
import ReactPaginate from 'react-paginate'
import { func, number } from 'prop-types'

export default function Pagination({ onPageChange, pageCount, ...restProps }) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-page-link"
        pageClassName="pagination-page"
        activeClassName="pagination-active"
        previousLabel="<"
        nextLabel=">"
        {...restProps}
      />
    </Flex>
  )
}

Pagination.propTypes = {
  onPageChange: func,
  pageCount: number.isRequired
}
