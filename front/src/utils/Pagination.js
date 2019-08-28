import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';


class Pagination extends Component {

    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
        console.log(this.props.pageCount)
    }

    handlePageClick(e) {
        this.props.callData(e.selected)
    }

    render() {
        console.log(this.props.pageCount)
        return (
            <nav aria-label="Page navigation">
                <ReactPaginate
                    previousLabel={'Précédent'}
                    nextLabel={'Suivant'}
                    breakLabel={'...'}
                    breakClassName={'page-item disabled'}
                    breakLinkClassName={'page-link'}
                    pageCount={Math.ceil(this.props.pageCount / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination justify-content-center pagination-lg'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    disabledClassName={'disabled'}
                />
            </nav>
        );
    }

}

export default Pagination;
