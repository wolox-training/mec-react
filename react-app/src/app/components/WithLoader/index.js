import React from 'react';

import Spinner from '../../components/WithLoader/components/Spinner';

function WithLoader(Component) {
  return function(props) {
    return props.userLoading ? <Spinner /> : <Component {...props} />;
  };
}

export default WithLoader;
