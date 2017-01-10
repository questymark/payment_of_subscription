import React, { Component } from 'react';

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  selectSubscriptionForPresent(event) {
    console.log(event.target.checked);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <h2>Выберите способ оплаты</h2>
          <div className="row">
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">Visa</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">Яндекс-деньги</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">PayPal</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">WebMoney</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">SMS</h4>
                <span className="payment-method__descr">Только для России</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">Qiwi</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 payment-method">
              <div className="payment-method__inner">
                <h4 className="payment-method__title">Подарочный код</h4>
              </div>
            </div>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={this.selectSubscriptionForPresent.bind(this)}
              />
                Покупаю подписку в подарок
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
