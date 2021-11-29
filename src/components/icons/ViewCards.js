import React from 'react';
import themes from '@styles/themes';

const theme = themes('white');

const ViewCards = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2853 2H19.5519C20.9035 2 21.9998 3.1059 21.9998 4.47018V7.7641C21.9998 9.12735 20.9035 10.2343 19.5519 10.2343H16.2853C14.9328 10.2343 13.8364 9.12735 13.8364 7.7641V4.47018C13.8364 3.1059 14.9328 2 16.2853 2Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44892 2H7.71449C9.06703 2 10.1634 3.1059 10.1634 4.47018V7.7641C10.1634 9.12735 9.06703 10.2343 7.71449 10.2343H4.44892C3.09638 10.2343 2 9.12735 2 7.7641V4.47018C2 3.1059 3.09638 2 4.44892 2Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44892 13.7657H7.71449C9.06703 13.7657 10.1634 14.8716 10.1634 16.2369V19.5298C10.1634 20.8941 9.06703 22 7.71449 22H4.44892C3.09638 22 2 20.8941 2 19.5298V16.2369C2 14.8716 3.09638 13.7657 4.44892 13.7657Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2853 13.7657H19.5519C20.9035 13.7657 21.9998 14.8716 21.9998 16.2369V19.5298C21.9998 20.8941 20.9035 22 19.5519 22H16.2853C14.9328 22 13.8364 20.8941 13.8364 19.5298V16.2369C13.8364 14.8716 14.9328 13.7657 16.2853 13.7657Z"
      stroke={theme.grey.secondary.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ViewCards;
