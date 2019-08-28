import React, { Component } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import '../style/pagination.css';
import ComponentsProducts from '../components/component_products'

class Labels extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [], dataCount: 0, offset: 0 };
    }

    callApiData() {
        axios.get("http://localhost:9000/labels/" + this.props.match.params.name + "/" + this.props.match.params.id)
            .then(res => this.setState({ apiResponse: res.data }))
            .catch(err => err);
    }

    callApiCount() {
        axios.get("http://localhost:9000/count/labels/" + this.props.match.params.name)
            .then(res => this.setState({ dataCount: res.data[0].total }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callApiData();
        this.callApiCount();
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);
        this.props.match.params.id = selected;
        this.setState({ offset: offset }, () => {
            this.callApiData();
        });
    };

    render() {
        const listProducts = this.state.apiResponse.map((d, index) =>
            <ComponentsProducts key={index} {...d} />
        );
        return (
            <>
                <ul className="row p-5">
                    {listProducts}
                </ul>

                <nav aria-label="Page navigation">
                    <ReactPaginate
                        previousLabel={'Précédent'}
                        nextLabel={'Suivant'}
                        breakLabel={'...'}
                        breakClassName={'page-item disabled'}
                        breakLinkClassName={'page-link'}
                        pageCount={Math.ceil(this.state.dataCount / 10)}
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
            </>
        );
    }
}

export default Labels;
