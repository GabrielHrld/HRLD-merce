import React from 'react';
import NumberFormat from 'react-number-format';

import '../styles/components/MonthlyFees.scss';
const MonthlyFees = ({ fees, price }) => {
  return (
    <div className="card-fees">
      <div>
        <strong>{fees}</strong> cuotas sin interés de{' '}
        <strong>
          <NumberFormat
            value={price / fees}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
          />
        </strong>
      </div>
    </div>
  );
};

export default MonthlyFees;
