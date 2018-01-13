export const createMiddlewares = redirector => {
  const promiseFlattenMiddleware = ({ dispatch }) => {
    return next => action => {
      console.log('redirectMiddleware');
      if (typeof action === 'function') {
        console.log('resolving promise action');
        action(dispatch);
        return;
      }
      return next(action);
    };
  };
  const redirectMiddleware = ({ dispatch }) => {
    return next => action => {
      let fun;
      if (action.payload && typeof action.payload.redirect === 'function') {
        fun = () => {
          action.payload.redirect(redirector);
        };
      }

      const value = next(action);
      console.log('after next');
      if (fun) fun();
      return value;
    };
  };

  const firstMiddleware = ({ dispatch }) => {
    return next => action => {
      console.log('firstMiddleware');
      return next(action);
    };
  };

  const lastMiddleware = ({ dispatch }) => {
    return next => action => {
      console.log('lastMiddleware');
      return next(action);
    };
  };

  return [firstMiddleware, redirectMiddleware, lastMiddleware, promiseFlattenMiddleware];
};
