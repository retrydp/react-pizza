import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="136" cy="134" r="110" />
      <rect x="0" y="270" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="414" rx="6" ry="6" width="90" height="30" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="136" y="405" rx="20" ry="20" width="140" height="51" />
    </ContentLoader>
  );
};

export default LoadingBlock;
