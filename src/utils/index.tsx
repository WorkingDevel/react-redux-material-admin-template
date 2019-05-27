import * as React from 'react';
import {Link} from "react-router-dom";

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
export const AdapterLink = React.forwardRef(
  (props: any, ref: React.Ref<HTMLAnchorElement>) => <Link innerRef={ref} {...props} />
);
