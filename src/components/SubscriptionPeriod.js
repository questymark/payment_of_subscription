import React from 'react';

const SubscriptionPeriod = props => {
  return (
    <div className={props.selectedSubscriptionPeriod === props.period ?
                              "col-md-4 col-sm-4 col-xs-12 subscription-period subscription-period_selected" :
                              "col-md-4 col-sm-4 col-xs-12 subscription-period"}
         onClick={props.selectSubscriptionPerion}
    >
      <div className="subscription-period__inner">
        <div className="subscription-period__total">
          {props.textYear}
        </div>
        <div className="subscription-period__month">
          {props.textMonth}
        </div>
      </div>
    </div>
  )
};

export default SubscriptionPeriod;
