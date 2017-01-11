import React, { Component } from 'react';

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      selectedSubscriptionForPresent: false,
      selectedSubscriptionForPresentVisible: true,
      selectedPaymentMethod: '',
      selectedSubscriptionPeriod: '',
      costOfSelectedSubscriptionPeriod: '',
      automaticRenewals: false,
      subscriptionDiscount: false
    }
  }

  selectSubscriptionForPresent(event) {
    this.setState({
      selectedSubscriptionForPresent: event.target.checked
    });
  }

  selectPaymentMethod(type, event) {
    this.setState({
      selectedPaymentMethod: type
    }, () => {
      if (this.state.selectedPaymentMethod === 'Present') {
        this.setState({
          selectedSubscriptionForPresentVisible: false
        })
      } else {
        this.setState({
          selectedSubscriptionForPresentVisible: true
        })
      }
    });
  }

  selectSubscriptionPerion(type, price, event) {
    this.setState({
      selectedSubscriptionPeriod: type,
      costOfSelectedSubscriptionPeriod: price
    })
  }

  selectAutomaticRenewals(event) {
    this.setState({
      automaticRenewals: event.target.checked
    })
  }

  selectSubscriptionDiscount(event) {
    this.setState({
      subscriptionDiscount: event.target.checked
    })
  }

  render() {
    return (
      <div className="app">
        <div className={this.state.selectedPaymentMethod !== "" ? "payment-method-wrp payment-method-wrp_selected" : "payment-method-wrp"}>
          <div className="container">
            <h2>Выберите способ оплаты</h2>
            <div className="row">
              <div className={this.state.selectedPaymentMethod === "Visa" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "Visa")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">Visa</h4>
                </div>
              </div>
              <div className={this.state.selectedPaymentMethod === "Yandex" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "Yandex")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">Яндекс-деньги</h4>
                </div>
              </div>
              <div className={this.state.selectedPaymentMethod === "PayPal" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "PayPal")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">PayPal</h4>
                </div>
              </div>
              <div className={this.state.selectedPaymentMethod === "WebMoney" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "WebMoney")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">WebMoney</h4>
                </div>
              </div>
              <div className={this.state.selectedPaymentMethod === "SMS" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "SMS")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">SMS</h4>
                  <span className="payment-method__descr">Только для России</span>
                </div>
              </div>
              <div className={this.state.selectedPaymentMethod === "Qiwi" ?
                            "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                            "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.selectPaymentMethod.bind(this, "Qiwi")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">Qiwi</h4>
                </div>
              </div>
              <div className=
                     {this.state.selectedSubscriptionForPresent ?
                     "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_disabled" :
                     this.state.selectedPaymentMethod === "Present" ?
                              "col-md-3 col-sm-3 col-xs-12 payment-method payment-method_selected" :
                              "col-md-3 col-sm-3 col-xs-12 payment-method"}
                   onClick={this.state.selectedSubscriptionForPresent ? '' : this.selectPaymentMethod.bind(this, "Present")}>
                <div className="payment-method__inner">
                  <h4 className="payment-method__title">Подарочный код</h4>
                </div>
              </div>
            </div>
            <div className={this.state.selectedSubscriptionForPresentVisible ? "form-check" : "hidden"}>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.selectSubscriptionForPresent.bind(this)}
                  checked={this.state.selectedSubscriptionForPresent}
                />
                Покупаю подписку в подарок
              </label>
            </div>
          </div>
        </div>
        <div className={this.state.selectedPaymentMethod ?
                        this.state.selectedSubscriptionPeriod ?
                        "subscription-period-wrp subscription-period-wrp_selected" :
                        "subscription-period-wrp" :
                        "hidden"}
        >
          <div className="container">
            <h2>Выберите срок оплаты</h2>
            <div className="row">
              <div className={this.state.selectedSubscriptionPeriod === 2 ?
                              "col-md-4 col-sm-4 col-xs-12 subscription-period subscription-period_selected" :
                              "col-md-4 col-sm-4 col-xs-12 subscription-period"}
                   onClick={this.selectSubscriptionPerion.bind(this, 2, 2880)}
              >
                <div className="subscription-period__inner">
                  <div className="subscription-period__total">
                    2 года: 2880 руб.
                  </div>
                  <div className="subscription-period__month">
                    120 руб. в месяц
                  </div>
                </div>
              </div>
              <div className={this.state.selectedSubscriptionPeriod === 1 ?
                              "col-md-4 col-sm-4 col-xs-12 subscription-period subscription-period_selected" :
                              "col-md-4 col-sm-4 col-xs-12 subscription-period"}
                   onClick={this.selectSubscriptionPerion.bind(this, 1, 1500)}
              >
                <div className="subscription-period__inner">
                  <div className="subscription-period__total">
                    1 год: 1500 руб.
                  </div>
                  <div className="subscription-period__month">
                    125 руб. в месяц
                  </div>
                </div>
              </div>
              <div className={this.state.selectedSubscriptionPeriod === 0.5 ?
                              "col-md-4 col-sm-4 col-xs-12 subscription-period subscription-period_selected" :
                              "col-md-4 col-sm-4 col-xs-12 subscription-period"}
                   onClick={this.selectSubscriptionPerion.bind(this, 0.5, 780)}
              >
                <div className="subscription-period__inner">
                  <div className="subscription-period__total">
                    6 месяцев: 780 руб.
                  </div>
                  <div className="subscription-period__month">
                    130 руб. в месяц
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.selectedPaymentMethod !== "WebMoney" &&
                            this.state.selectedPaymentMethod !== "Qiwi" &&
                            this.state.selectedPaymentMethod !== "Present" &&
                            !this.state.selectedSubscriptionForPresent
                            ?
                            "form-check" :
                            "hidden"}>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.selectAutomaticRenewals.bind(this)}
                  checked={this.state.automaticRenewals}
                />
                Продлевать подписку автоматически
              </label>
            </div>
          </div>
        </div>
        <div className={this.state.selectedSubscriptionPeriod ? "payment" : "hidden"}>
          <div className="container">
            <h2>Итого к оплате (за&nbsp;
              {this.state.selectedSubscriptionPeriod == 1 ?
                '1 год' :
                this.state.selectedSubscriptionPeriod == 2 ?
                '2 года' :
                '6 месяцев'})</h2>
            <h1>{this.state.costOfSelectedSubscriptionPeriod}&nbsp;
              {this.state.subscriptionDiscount ?
              this.state.selectedSubscriptionPeriod === 2 ?
                `+ ${150 * 4} = ${2880 + 150 * 4}` :
                this.state.selectedSubscriptionPeriod === 1 ? `+ ${150 * 2} = ${150 * 2 + 1500}` :
                `+ ${150} = ${780 + 150}` : ""
              }&nbsp;руб.</h1>
            {this.state.automaticRenewals ? <div>Далее 120 руб. в месяц</div> : ""}
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={this.selectSubscriptionDiscount.bind(this)}
                checked={this.state.subscriptionDiscount}
              />
              Добавить подписку на скидку 5%
            </label>

          </div>
        </div>
        <div className={this.state.selectedPaymentMethod ? "payment-btn" : "hidden"}>
          <div className="container">
            <button className="btn btn-primary" disabled={!this.state.selectedSubscriptionPeriod}>Оплатить</button> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
