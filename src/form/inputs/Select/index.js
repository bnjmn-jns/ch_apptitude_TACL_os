import React from 'react';
import MobileSelect from './MobileSelect';
import DesktopSelect from './DesktopSelect';
import MobileDetect from 'mobile-detect';

const Select = props => {
  const md = new MobileDetect(window.navigator.userAgent);
  return md.mobile() !== null ? <MobileSelect {...props} /> : <DesktopSelect {...props} />;
};

export default Select;
