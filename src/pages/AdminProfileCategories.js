import React from 'react';
import {connect} from'react-redux'
import {useParams} from 'react-router-dom'
import MenuContainer from '../components/MenuContainer';
import ProfileCardsContainer from '../components/ProfileCardsContainer';
import PanelProducts from '../components/PanelProducts';

const AdminProfileCategories = ({products}) => {
  const {category} = useParams()
  
  const productsByCategory = products.filter((product) => product.category[0].toLowerCase() == category.toLowerCase())

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <MenuContainer
          title1={'Productos'}
          comp1={<PanelProducts filteredProducts={productsByCategory}/>}
          title2={'Ordenes'}
          comp2={<ProfileCardsContainer />}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    products: state.products,
  }
}

export default connect(mapStateToProps, null)(AdminProfileCategories)
