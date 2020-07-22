import Header from './../components/header';
import Footer from './../components/footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>latihan next js</title>
            <meta meta="viewport" content="width=device-width, initial-scale=1.0" />
            
        </Head>
        <Header />
        
            <div>
                {props.children}
            </div>
            
        <Footer />
    </div>
)

export default Layout;