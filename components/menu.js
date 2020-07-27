import Link from 'next/link';

function Menu(){
  return (
    <div>
        <link rel="stylesheet" href="/css/navbar.css" />
        <input type="checkbox" id="menuShowHide" />
        <label for="menuShowHide"></label>
        <ul id="mainMenu">
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/seni"><a>SENI</a></Link></li>
            <li><Link href="/wisata"><a>WISATA</a></Link></li>
            <li><Link href="/berita"><a>BERITA</a></Link></li>

        </ul> 
        </div> 
    // <body>
    //   <nav>
    //   <link rel="stylesheet" href="/css/navbar.css" />
    //     <input type="checkbox" id="check" />
    //     <label for="check" class="checkbtn">
    //       <i class="fas fa-bars"></i>
    //     </label>
    //     <label class="logo">welose</label>
    //       <ul>
    //       <li><Link href="/"><a class="active">Home</a></Link></li>
    //       <li><Link href="/seni"><a>Seni</a></Link></li>
    //       <li><Link href="/wisata"><a>Wisata</a></Link></li>
    //       <li><Link href="/berita"><a>Berita</a></Link></li>
    //       </ul>
    //   </nav>  
    // </body>
  );
}

export default Menu;