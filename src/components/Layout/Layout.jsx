import { useLocation } from 'react-router-dom';
const Layout = (props) => {
  const location = useLocation();
  return (
    <section
      className={`relative justify-between flex 2xl:w-[95.25rem] mx-auto ${
        location.pathname === '/advices'
          ? 'max-h-[51rem] overflow-y-scroll'
          : ''
      }`}
    >
      {props.children}
    </section>
  );
};
export default Layout;
