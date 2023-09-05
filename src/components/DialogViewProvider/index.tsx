import { PortalProvider } from '@gorhom/portal';
import React, { ReactNode } from 'react';

const DialogViewProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  return <PortalProvider>{children}</PortalProvider>;
};

export default React.memo(DialogViewProvider);
