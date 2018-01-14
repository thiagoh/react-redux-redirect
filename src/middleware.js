export const createMiddlewares = redirector => {
  const promiseFlattenMiddleware = ({ dispatch }) => {
    return next => {
      console.log('install promiseFlattenMiddleware');

      return action => {
        console.log('redirectMiddleware');
        if (typeof action === 'function') {
          console.log('resolving promise action');
          action(dispatch);
          return;
        }
        return next(action);
      };
    };
  };
  const redirectMiddleware = ({ dispatch }) => {
    return next => {
      console.log('install redirectMiddleware');

      return action => {
        let fun;
        if (action.payload && typeof action.payload.redirect === 'function') {
          fun = () => {
            action.payload.redirect(redirector);
          };
        }

        console.log('before next');
        const value = next(action);
        console.log('after next');
        if (fun) fun();
        return value;
      };
    };
  };

  const firstMiddleware = ({ dispatch }) => {
    return next => {
      console.log('install firstMiddleware');

      return action => {
        console.log('firstMiddleware');
        return next(action);
      };
    };
  };

  const lastMiddleware = ({ dispatch }) => {
    return next => {
      console.log('install lastMiddleware');

      return action => {
        console.log('lastMiddleware');
        return next(action);
      };
    };
  };

  return [firstMiddleware, promiseFlattenMiddleware, redirectMiddleware, lastMiddleware];
};
