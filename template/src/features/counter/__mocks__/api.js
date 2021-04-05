// This is one way to mock the api method
// https://jestjs.io/docs/en/manual-mocks
export const getRandomNumber = jest.fn(amount => Promise.resolve(amount));
