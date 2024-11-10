export interface IName {
  first: string;
  last: string;
}

export interface IPhone {
  number: string;
  country_code: string;
}

export interface IAddress {
  street: string;
  city: string;
  state?: string;
  country: string;
}

export enum ESequence {
  YEAR = 'Yearly',
  MONTH = 'Monthly',
  WEEK = 'Weekly',
  HOUR = 'Hourly',
}

export enum EPropertyType {
  HOUSE = 'House',
  FLAT = 'Flat',
  OFFICE = 'Office',
  VILLA = 'Villa',
  APARTMENT = 'Apartment',
}

export enum ESortType {
  ASC = 'asc',
  DES = 'des',
}

export enum EPropertySortBy {
  VIEWS = 'views',
  price = 'price',
  DATE_ADDED = 'date_added',
}

export enum EPropertyListingType {
  RENT = 'Rent',
  SELL = 'Sell',
}

export enum ECurrency {
  BDT = 'BDT',
  USD = 'USD',
  EUR = 'EUR',
}
