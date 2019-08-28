import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import '../style/products.css'

const ComponentProducts = (props) => {
  console.log(props)
  return (
    <div className="card-product col-md-2">
      <Card>
        <CardImg src={props.image_small_url} alt={props.product_name} />
        <a href={'/product/' + props.code}>
          <CardBody>
            <CardTitle>{props.product_name}</CardTitle>
          </CardBody>
        </a>
      </Card>
    </div>
  );
};

export default ComponentProducts;