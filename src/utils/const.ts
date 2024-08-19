export const COVID_COUNTRY_DATA_URL =
  "https://disease.sh/v3/covid-19/countries";
export const COVID_COUNTRY_HISTORICAL_URL = (countryCode: any) =>
  `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=all`;
