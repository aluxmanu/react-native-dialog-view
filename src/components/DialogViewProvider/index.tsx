import { PortalProvider } from '@gorhom/portal';
import React, { ReactNode } from 'react';
import { PORTAL_HOST_NAME } from '../../constants/general';

const DialogViewProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <PortalProvider rootHostName={PORTAL_HOST_NAME}>{children}</PortalProvider>
  );
};

export default React.memo(DialogViewProvider);
