import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!currency instanceof Currency) {
      throw new TypeError('currency must be a Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(NewAmount) {
    if (typeof NewAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = NewAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(NewCurrency) {
    if (!NewCurrency instanceof Currency) {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = NewCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice() {
    return amount * conversionRate;
  }
}
