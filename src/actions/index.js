export const signInUser = param => {
  const expensiveSearchOnDatabase = param => {
    return new Promise(resolve => {
      setTimeout(() => resolve(param), 1000 + Math.random() * 1000);
    });
  };
  return dispatch =>
    expensiveSearchOnDatabase(param).then(result =>
      dispatch({
        type: 'SIGN_IN_USER',
        payload: {
          payload: result,
          redirect: redirector => {
            redirector('/signed-in');
          }
        }
      })
    );
};

export const addClaps = () => {
  return {
    type: 'ADD_CLAPS',
    payload: {
      // payload: '',  // no need for payload
      redirect: redirector => {
        redirector('/thank-you-for-the-claps');
      }
    }
  };
};
