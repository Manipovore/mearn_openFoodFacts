import React from 'react';
import { Jumbotron, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import '../style/products.css';

const SliceArrayAndAddLink = (props) => {
  if (props.array !== undefined) {
    let array = props.array;
    let link = props.link;
    return array.map((element) =>
      <a key={element} href={link + element}>{element} </a>
    );
  }
  return false;
}

const Ingredients = (props) => {
  return (
    <>
      <p className="lead">→ Les ingrédients sont listés par ordre d'importance (quantité).</p>
      <ListGroupItem active>
        <ListGroupItemHeading>Liste des ingrédients :</ListGroupItemHeading>
        <ListGroupItemText>
          {props.ingredients_text}
        </ListGroupItemText>
      </ListGroupItem>
      <p className="font-weight-bolder bg-danger text-white">Traces éventuelles : {props.traces_fr}</p>
    </>
  )
}

const Nova = (props) => {
  return (
    <>
      <h3>Groupe NOVA</h3>
      <div className="bg-warning p-3 border rounded shadow-lg" >
        <img src={'https://static.openfoodfacts.org/images/misc/nova-group-' + props.nova_group + '.svg'} alt={'Nova ' + props.nova_group} />
        <p>Groupe: {props.nova_group}</p>
      </div>
    </>
  )
}

const ComponentProduct = (e) => {
  return (
    <div id="product">
      <Jumbotron className="container" style={{ background: "#d2d2d2" }}>
        <h1 className="display-3">{e.props.product_name}</h1>
        <p>Code barre: {e.props.code}</p>
        <hr />
        <h2 className="title-separated">Caractéristiques du produit</h2>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <ListGroup className="shadow-lg">
              {e.props.quantity !== undefined && e.props.quantity !== "" &&
                <ListGroupItem><span className="font-weight-bold text-left">Quantité : </span>{e.props.quantity}</ListGroupItem>
              }
              {e.props.packaging_tags !== undefined &&
                <ListGroupItem><span className="font-weight-bold">Conditionnement  : </span> <SliceArrayAndAddLink array={e.props.packaging_tags} link={"/packaging/"} /> </ListGroupItem>
              }
              {e.props.brands !== undefined &&
                <ListGroupItem><span className="font-weight-bold">Marques  : </span>{e.props.brands}</ListGroupItem>
              }
              <ListGroupItem><span className="font-weight-bold">Catégorie: </span>{e.props.categories}</ListGroupItem>
              {e.props.labels !== undefined || e.props.labels !== "" &&
                <ListGroupItem><span className="font-weight-bold">Labels, certifications, récompenses : </span>{e.props.labels}</ListGroupItem>
              }
              <ListGroupItem><span className="font-weight-bold">Origine des ingrédients : </span>{e.props.origins}</ListGroupItem>
              <ListGroupItem><span className="font-weight-bold">Lieux de fabrication ou de transformation : </span>{e.props.manufacturing_places}</ListGroupItem>
              <ListGroupItem><span className="font-weight-bold">Magasins : </span>{e.props.stores}</ListGroupItem>
              {e.props.countries_fr !== undefined &&
                <ListGroupItem><span className="font-weight-bold">Pays de vente : </span><SliceArrayAndAddLink array={e.props.countries_fr} link={"/countries/"} /></ListGroupItem>
              }
            </ListGroup>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-item-center">
            <img className="rounded shadow-lg" src={e.props.image_url} alt={'Produit ' + e.props.product_name} />
          </div>
        </div>
        <hr />
        <h2 className="title-separated">Ingrédients</h2>
        <hr />
        <div className="row">
          <div className="col-md-8">

            {e.props.ingredients_text !== "" &&
              <Ingredients {...e.props} />
            }

            {e.props.nova_group !== "" &&
              <Nova {...e.props} />
            }

          </div>
          {e.props.image_ingredients_url !== "" &&
            <div className="col-md-4 d-flex flex-column justify-content-center align-item-center">
              <img className="rounded shadow-lg" src={e.props.image_ingredients_url} alt={'Ingrédient du produit ' + e.props.product_name} />
            </div>
          }
        </div>
        <hr />

        <h2 className="title-separated">Informations nutritionnelles</h2>
        <hr />
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <p>Note nutritionnelle de couleur NutriScore </p>
            <img src={'https://static.openfoodfacts.org/images/misc/nutriscore-' + e.props.nutrition_grade_fr + '.svg'} alt={'Nutriscore ' + e.props.nutrition_grade_fr} />
          </div>
          <div className="col-md-4">
            <img className="rounded" src={e.props.image_nutrition_url} alt={'Nutrition du produit ' + e.props.product_name} />
          </div>
        </div>
        <hr />

        <p className="lead">
          <Button color="success" href={e.props.url} className="">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default ComponentProduct;