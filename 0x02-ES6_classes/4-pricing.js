/* eslint-disable */
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currrency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency_name} ${this._currency_code}`
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
