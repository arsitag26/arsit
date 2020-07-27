import Header from './../components/header';

import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>INFORMASI BANYUWANGI</title>
            <meta meta="viewport" content="width=device-width, initial-scale=1.0" />
            
        </Head>
        <Header />
        
            <div>
                {props.children}
            </div>
            
        
    </div>
)

export default Layout;