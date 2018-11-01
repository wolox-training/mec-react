import React from 'react';

import Spinner from '../../components/WithLoader/components/Spinner';

function WithLoader(Component) {
  return function(props) {
    return props.isLoading ? <Spinner /> : <Component {...props} />;
  };
}

export default WithLoader;
