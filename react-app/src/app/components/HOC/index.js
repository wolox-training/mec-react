import React from 'react';

import Spinner from '../../screens/Login/components/Spinner';

function WithLoader(Component) {
  return function(props) {
    return props.isLoading ? <Spinner /> : <Component {...props} />;
  };
}

export default WithLoader;
