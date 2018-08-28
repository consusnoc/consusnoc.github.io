import Head from 'next/head';

const Layout = (props) => (
    <div className="container">
        {props.children}
    </div>
);

export default Layout;