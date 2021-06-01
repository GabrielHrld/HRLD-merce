import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { handleFilterClick} from '../actions'

import { FaTimes } from 'react-icons/fa';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/slider';

//SLIDER STYLES
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const CustomSlider =  withStyles({
  root:{
    color: '#2a2b2c'
  }
})(Slider)

import '../styles/components/FiltersContainer.scss';

const FiltersContainer = ({products, filterClick, handleFilterClick, admin = false}) => {
  const path = useLocation().pathname.toLowerCase()
  const classes = useStyles();
  const [value, setValue] = useState([0, 18000]);
  const activeFilterClick = () =>{
    handleFilterClick(!filterClick);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  //Category map
  const categories = []
  for (let i = 0; i < products.length; i++) {
    const category = products[i].category;
    if(!categories.includes(category)){
      categories.push(category)
    }
  }

  //Colors map
  const colors = []
  for (let i = 0; i < products.length; i++) {
    const category = products[i].color;
    if(!colors.includes(category)){
      colors.push(category)
    }
  }
  return (
    <div className={filterClick ? "side-filters_wrapper active" : "side-filters_wrapper"}>
      <div className="side-filters_container">
        <header>
          <a title="Close" className="close-icon_container" onClick={activeFilterClick}>
            <FaTimes className="icon" />
          </a>
        </header>
        <div className="filters-container">
          <div className="price-filter">
            <div><h3>Filtro de precio</h3></div>
            <div className={classes.root}>
              <CustomSlider
                value={value}
                onChange={handleChange}
                max={18000}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={()=> value}
              />
            </div>
          </div>
          <div className="category-filter">
            <div><h3>Filtra por categoría</h3></div>
            <ul className="categories-container">
              {
                categories.map((categorie)=> {
                  return(
                  <li onClick={activeFilterClick}>
                    <Link to={admin ? `/admin/profile/categories/${categorie.toLowerCase()}` : `/products/categories/${categorie.toLowerCase()}`}>
                      {categorie}
                    </Link>
                  </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="color-fllter">
            <div>
              <h3>Filtra por color</h3>
            </div>
            <div>
              <ul className="colors-container">
                {colors.map((color) => <li><Link key={color} to={`${path}?color=${color}`}>{color}</Link></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    filterClick: state.filterClick,
    products: state.products
  }
}

const mapDispatchToProps = {
  handleFilterClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
