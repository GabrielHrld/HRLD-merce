import React from 'react';

import '../styles/components/Pagination.scss'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-wrapper">
      <ul className="pagination">
        {
          pageNumbers.map(number =>(
            <li key={number} className="pagination-item" onClick={() => paginate(number)}>
              <a className="page-link" >
                {number}
              </a>
            </li>
          ))
        }
      </ul>
      <span>{`Usted está viendo ${productsPerPage} de ${totalProducts} productos`}</span>
    </nav>
  );
};

export default Pagination;
