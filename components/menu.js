import Link from 'next/link';

function Menu(){
  return (
    <body>
      <nav>
      <link rel="stylesheet" href="/css/navbar.css" />
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">welose</label>
          <ul>
          <li><Link href="/"><a class="active">Home</a></Link></li>
          <li><Link href="/seni"><a>Seni</a></Link></li>
          <li><Link href="/wisata"><a>Wisata</a></Link></li>
          <li><Link href="/berita"><a>Berita</a></Link></li>
          </ul>
      </nav>  
    </body>
  );
}

export default Menu;