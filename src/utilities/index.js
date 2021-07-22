import { address, contact, introduction, social } from "../data";

//// Introduction
export const getFullName = () =>
  `${introduction.lastName} ${introduction.firstName}`;
export const getFullNameWithMiddleName = () =>
  `${introduction.lastName} ${introduction.firstName} ${introduction.middleName}`;
export const getProfile = () => introduction.profile;

//// Contacts
export const getEmail = () => contact.emailId;
export const getMobileNumber = () => contact.mobileNumber;

//// Social Accounts
export const getSocial = (name) =>
  social.find((i) => i.name.toLowerCase().localeCompare(name.toLowerCase()));
export const getAllSocialAccounts = () =>
  social.sort((a, b) => a.rank - b.rank);

//// Address
export const getStreetAndLandmark = () =>
  `${address.street}, ${address.landmark}`;
export const getArea = () => address.area;
export const getCityAndState = () => `${address.city}, ${address.state}`;
