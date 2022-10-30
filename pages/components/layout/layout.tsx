import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }: any) => {
  return (
    <div className='relative min-w-screen min-h-screen bg-[url(../public/dotbg_2.png)]'>
      <Header />
      {/* <div className='pt-[108px] p-[120px]'> */}
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
