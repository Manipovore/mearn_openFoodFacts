import React, { Component } from 'react';
import axios from "axios";
import ComponentsProducts from "../components/component_products";
import Pagination from "../utils/Pagination"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [], pageCount: 10 };
    if (this.props.match.params.id === undefined) {
      this.props.match.params.id = 0;
    }
    this.handleClick = this.handleClick.bind(this);
  }

  callDataAPI(id) {
    axios.get("http://localhost:9000/products/" + id)
      .then(res => this.setState({ apiResponse: res.data }))
      .catch(err => err);
  }

  callCountApi() {
    axios.get("http://localhost:9000/count/")
      .then(res => this.setState({ pageCount: res.data }))
      .catch(err => err);
  }

  componentWillMount() {
    this.callDataAPI(this.props.match.params.id);
    this.callCountApi();
  }

  handleClick(e) {
    this.callDataAPI(e)
  }

  render() {
    const listProducts = this.state.apiResponse.map((d, index) =>
      <ComponentsProducts key={index} {...d} />
    );
    return (
      <>
        <ul className="row p-5">
          {listProducts}
        </ul>
        <Pagination pageCount={this.state.pageCount} props={this.props} callData={this.handleClick} />
      </>
    );
  }
}

export default Products;
