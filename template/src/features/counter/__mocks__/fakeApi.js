// The api is fake, so it doesn't really need mocking!
// This is one way to do it when you do need to.
// https://jestjs.io/docs/en/manual-mocks
export const fakeAsyncCall = jest.fn(amount => Promise.resolve(amount));
