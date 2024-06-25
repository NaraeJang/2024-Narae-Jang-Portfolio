import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeSEOImg from '../assets/website_assets/website_thumb.webp';

const DynamicPreview = ({ pageTitle, pageDescription, pageImage }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {pageImage ? (
          <meta property="og:image" content={pageImage} />
        ) : (
          <meta property="og:image" content={HomeSEOImg} />
        )}
        <meta property="og:type" content="website" />
      </Helmet>
    </HelmetProvider>
  );
};
export default DynamicPreview;
