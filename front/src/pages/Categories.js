import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import '../style/pagination.css';
import CategoriesComponent from '../components/component_categories';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = { category: [], title: "", start: 0, limit: 10, };
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    callAPI() {
        axios.get("http://localhost:9000/categories/" + this.props.match.params.name)
            .then(res => this.setState({ category: res.data }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }

    handleCategoryClick(e) {
        let text = e.target.textContent || e.srcElement.textContent;
        this.setState({ category: [], title: text }, () => {
            this.callAPI();
        })
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);
        this.props.match.params.id = selected;
        console.log(this.props.match.params.id);
        this.setState({ start: offset });
    };

    render() {
        const listCategory = this.state.category
            .filter((d, index) => index >= this.state.start && index <= this.state.start + 10)
            .map((d, index) => {
                return <CategoriesComponent key={index} category={this.props.match.params.name} name={d} />
            });
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Link to="/categories/manufacturing_places" onClick={this.handleCategoryClick} className="nav-link"><button type="button" className="btn btn-secondary mr-2 p-4">Fabrication</button></Link>
                    <Link to="/categories/labels_fr" onClick={this.handleCategoryClick} className="nav-link"><button type="button" className="btn btn-success mr-2 p-4">Label</button></Link>
                    <Link to="/categories/origins" onClick={this.handleCategoryClick} className="nav-link"><button type="button" className="btn btn-warning mr-2 p-4">Origine</button></Link>
                    <Link to="/categories/packaging_tags" onClick={this.handleCategoryClick} className="nav-link"><button type="button" className="btn btn-danger mr-2 p-4">Emballage</button></Link>
                    <Link to="/categories/brands" onClick={this.handleCategoryClick} className="nav-link"><button type="button" className="btn btn-dark mr-2 p-4">Marque</button></Link>
                </div>
                {listCategory.length > 0 &&
                    <div className="jumbotron container mt-5 bg-dark ">
                        <h2 className="mb-3 text-white">{this.state.title.toUpperCase() || this.props.match.params.name.toUpperCase()}</h2>
                        <div className="list-group mb-5 container">
                            {listCategory}
                        </div>
                        <nav aria-label="Page navigation">
                            <ReactPaginate
                                previousLabel={'Précédent'}
                                nextLabel={'Suivant'}
                                breakLabel={'...'}
                                breakClassName={'page-item disabled'}
                                breakLinkClassName={'page-link'}
                                pageCount={Math.ceil(this.state.category.length / 10)}
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
                    </div>
                }
            </div>
        );
    }
}

export default Categories;
