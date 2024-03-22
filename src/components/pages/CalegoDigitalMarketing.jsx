import { Loading } from '../';
import {
  CTitle,
  CEmailNewsletter,
  CSocialMedia,
  Cbanners,
  CCooperated,
  CEnding,
} from './CalegoMarketing';

const CalegoDigitalMarketing = () => {
  return (
    <main id="digital-marketing">
      <Loading />
      <div className="w-full h-full hero"></div>
      <CTitle />
      <CEmailNewsletter />
      <CSocialMedia />
      <Cbanners />
      <CCooperated />
      <CEnding />
    </main>
  );
};
export default CalegoDigitalMarketing;
