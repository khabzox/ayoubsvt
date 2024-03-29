// import { Helmet } from 'react-helmet';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


type Props = {  
  keywords?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const PageContainer = ({ title, description, keywords, children }: Props) => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      {children}
    </div>
  </HelmetProvider>
);

export default PageContainer;
