import Menu from '../components/menu'
import Layout from '../layouts/layout';

 function Beranda(){
  return (
    <Layout>
      <Menu />
      <link rel="stylesheet" href="/css/index.css" />
      <main>  
        <p>Selamat datang di web INFORMASI BANYUWANGI, web ini berisi tentang informasi banyuwangi, baik seni, wisata, dll.</p>
        
      </main>
    </Layout>
  );
 }
 export default Beranda;