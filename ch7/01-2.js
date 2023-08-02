import { readJSON } from '../fileController.js';

const customerData = readJSON('ch7/01-2.json');

const getRawDataOfCustomers = () => {
  return customerData;
};
const setRawDataOfCustomers = (arg) => {
  customerData = arg;
};

export const writeData = (customerId, year, month, amount) => {
  getRawDataOfCustomers()[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId, laterYear, month) => {
  const later = getRawDataOfCustomers()[customerId].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};
export const getCustomer = () => customerData;
