const toQueryString = params =>
  Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

const getUrl = amount => {
  const baseUrl = 'https://www.random.org/integers/';
  const params = {
    num: 1,
    min: 1,
    max: amount,
    base: 10,
    format: 'plain',
    rnd: 'new',
    col: 1,
  };
  return `${baseUrl}?${toQueryString(params)}`;
};

export const getRandomNumber = async amount => {
  const response = await fetch(getUrl(amount));
  const valueString = await response.text();
  return Number(valueString);
};
