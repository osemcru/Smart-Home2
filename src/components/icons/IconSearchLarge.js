import React, { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

const IconSearchLarge = ({ color }) => {
  const theme = useContext(ThemeContext);

  const fill = color || theme.grey.alternative.light;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8226 18.98L14.9623 14.1197C16.2661 12.6208 17.0554 10.6652 17.0554 8.52772C17.0554 3.82262 13.2284 0 8.52772 0C3.82262 0 0 3.82705 0 8.52772C0 13.2284 3.82705 17.0554 8.52772 17.0554C10.6652 17.0554 12.6208 16.2661 14.1197 14.9623L18.98 19.8226C19.0953 19.9379 19.2506 20 19.4013 20C19.5521 20 19.7073 19.9424 19.8226 19.8226C20.0532 19.592 20.0532 19.2106 19.8226 18.98ZM1.1929 8.52772C1.1929 4.48337 4.48337 1.19734 8.52328 1.19734C12.5676 1.19734 15.8537 4.4878 15.8537 8.52772C15.8537 12.5676 12.5676 15.8625 8.52328 15.8625C4.48337 15.8625 1.1929 12.5721 1.1929 8.52772Z"
        fill={fill}
      />
    </svg>
  );
};

IconSearchLarge.defaultProps = {
  color: '#8A8A8A',
};

export default IconSearchLarge;
