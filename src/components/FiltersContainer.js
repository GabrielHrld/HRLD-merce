import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { withStyles,makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/slider';

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
const FiltersContainer = ({click}) => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 18000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={click ? "side-filters_wrapper active" : "side-filters_wrapper"}>
      <div className="side-filters_container">
        <header>
          <a title="Close" className="close-icon_container">
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
              <li><a href="!">Categoría 1</a></li>
              <li><a href="!">Categoría 2</a></li>
              <li><a href="!">Categoría 3</a></li>
              <li><a href="!">Categoría 4</a></li>
              <li><a href="!">Categoría 1</a></li>
              <li><a href="!">Categoría 2</a></li>
              <li><a href="!">Categoría 3</a></li>
              <li><a href="!">Categoría 4</a></li>
            </ul>
          </div>
          <div className="color-fllter">
            <div>
              <h3>Filtra por color</h3>
            </div>
            <div>
              <ul className="colors-container">
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
                <li><a href="">Rojo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
