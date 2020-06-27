export const fakeAsyncCall = async amount => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return amount;
};
