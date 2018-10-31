import React from 'react';

import WithLoader from '../../../../components/WithLoader';

function Button() {
  return (
    <button className="button-style" type="submit">
      Submit
    </button>
  );
}

export default WithLoader(Button);
