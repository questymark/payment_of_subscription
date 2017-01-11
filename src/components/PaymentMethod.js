import React from 'react';

const PaymentMethod = props => {
  return (
    <div className={props.selectedPaymentMethod === props.label ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
         onClick={props.selectPaymentMethod}>
      <div className="payment-method__inner">
        <h4 className="payment-method__title">{props.name}</h4>
        <span className="payment-method__descr">{props.descr}</span>
      </div>
    </div>
  )
};

export default PaymentMethod;
