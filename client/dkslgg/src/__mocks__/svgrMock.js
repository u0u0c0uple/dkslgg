// src/__mocks__/svgrMock.js
// https://github.com/gregberge/svgr/issues/83

import React from "react";

const SvgrMock = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} />
));

SvgrMock.displayName = "SvgrMock";

// export const ReactComponent = SvgrMock;
export default SvgrMock;