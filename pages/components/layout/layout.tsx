import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }: any) => {
  return (
    <div className='relative min-w-screen min-h-screen overflow-hidden bg-[url(../public/dotbg_2.png)]'>
      <Header />
      <div className='px-[5%] pt-48 pb-40'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
