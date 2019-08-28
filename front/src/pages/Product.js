import React, { Component } from 'react';
import axios from "axios";
import ComponentProduct from "../components/component_product";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { product: {} };
    }

    callAPI() {
        axios.get("http://localhost:9000/product/" + this.props.match.params.code)
            .then(res => this.setState({ product: res.data }))
            .catch(err => err);
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <ComponentProduct props={this.state.product} />
        );
    }
}

export default Products;
