import React, { Component } from 'react';
import PaymentMethod from './PaymentMethod';
import SubscriptionPeriod from './SubscriptionPeriod';

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
              <PaymentMethod 
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "Visa")}
                label="Visa"
                name="Visa"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "Yandex")}
                label="Yandex"
                name="Яндекс-деньги"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "PayPal")}
                label="PayPal"
                name="PayPal"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "WebMoney")}
                label="WebMoney"
                name="WebMoney"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "SMS")}
                label="SMS"
                name="SMS"
                descr="Только для России"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "Qiwi")}
                label="Qiwi"
                name="Qiwi"
              />
              <PaymentMethod
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                selectPaymentMethod={this.selectPaymentMethod.bind(this, "Present")}
                label="Present"
                name="Подарочный код"
              />
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
              <SubscriptionPeriod
                selectedSubscriptionPeriod={this.state.selectedSubscriptionPeriod}
                period={2}
                selectSubscriptionPerion={this.selectSubscriptionPerion.bind(this, 2, 2880)}
                textYear="2 года: 2880 руб."
                textMonth="120 руб. в месяц"
              />
              <SubscriptionPeriod
                selectedSubscriptionPeriod={this.state.selectedSubscriptionPeriod}
                period={1}
                selectSubscriptionPerion={this.selectSubscriptionPerion.bind(this, 1, 1500)}
                textYear="1 год: 1500 руб."
                textMonth="125 руб. в месяц"
              />
              <SubscriptionPeriod
                selectedSubscriptionPeriod={this.state.selectedSubscriptionPeriod}
                period={0.5}
                selectSubscriptionPerion={this.selectSubscriptionPerion.bind(this, 0.5, 780)}
                textYear="6 месяцев: 780 руб."
                textMonth="130 руб. в месяц"
              />
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
