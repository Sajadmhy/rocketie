import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Orbit from '../component/Orbit';
import Roadmap from '../component/Roadmap';
import RoadmapMobile from '../component/RoadmapMobile';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import "animate.css";
import Link from 'next/link';

export default function Home() {
  // initialize aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selected, setSelected] = useState([true, false, false, false, false]);
  const [nft1Position, setNft1Position] = useState({ x: 0, y: 0 });
  const [nft2Position, setNft2Position] = useState({ x: 0, y: 0 });
  const [nft3Position, setNft3Position] = useState({ x: 0, y: 0 });
  const [nft4Position, setNft4Position] = useState({ x: 0, y: 0 });
  const [nft5Position, setNft5Position] = useState({ x: 0, y: 0 });

  const [nft1Enter, setNft1] = useState(false);
  const [nft2Enter, setNft2] = useState(false);
  const [nft3Enter, setNft3] = useState(false);
  const [nft4Enter, setNft4] = useState(false);
  const [nft5Enter, setNft5] = useState(false);

  const [openseaIsHovered, setOpensea] = useState(false);

  const handleSelect = (index) => {
    const newSelected = [false, false, false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
  }

  const handleMouseEnter = (e) => {
      setNft1Position({ x: e.clientX, y: e.clientY });
      setNft2Position({ x: e.clientX, y: e.clientY });
      setNft3Position({ x: e.clientX, y: e.clientY });
      setNft4Position({ x: e.clientX, y: e.clientY });
      setNft5Position({ x: e.clientX, y: e.clientY });
  }


  const [width, setWidth] = useState(false);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  return (
    <div>
      <Head>
        <title>Rocketie</title>
        <meta name="description" content="Rocketie website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
    <CustomCursor
      targets={['button', 'li', 'a', 'p']}
      customClass='custom-cursor'
      dimensions={25}
      fill='rgba(255, 255, 255, 0.19)'
      smoothness={{
        movement: 0.2,
        scale: 0.05,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
      targetScale={2.8}
    />
     </div>
      
      { !width ? null : 
      <div style={{zoom: width > 1440 ? `${width/1440}` : `${1}`}} className={styles.body}>


      <main className={styles.container}>
        <div className={styles.heroBG}>
          <div className={styles.orbit1}><Orbit/></div>
          <div className='animate__animated animate__fadeInRight card2-animate'><div className={styles.card2}><Image unoptimized src="/card2.png" width={223} height={337} alt="card" /></div></div>
          <div className='animate__animated animate__fadeInRight card2-animate'><div className={styles.card2Mobile}><Image unoptimized src="/card2-mobile.png" width={200} height={270} alt="card" /></div></div>
          <div className='animate__animated animate__fadeInRight card1-animate'><div className={styles.card1Mobile}><Image unoptimized src="/card1-mobile.png" width={223} height={337} alt="card" /></div></div>
          <div className='animate__animated animate__fadeInRight card3-animate'><div className={styles.card3}><Image unoptimized src="/card3.png" alt="card" width={223} height={337} /></div></div>
          <div className='animate__animated animate__fadeInRight card1-animate'><div className={styles.card1}><Image unoptimized src="/card1.png" alt="card" width={294.14} height={481} /></div></div>

          <div className={styles.rocket}><img src="/Rocket.svg" alt="card" /></div>
          <div className={styles.rocketMobile}><img src="/Rocket-mobile.svg" alt="card" /></div>

          <div className='animate__animated animate__fadeInDown'>
          <nav className={styles.nav}>
            <div className={styles.logo}><Image priority src="/logo.png" height={75} width={75} alt="logo" /></div>
            <ul>
              <Link href='/'><li>Home</li></Link>
              <a href='#info'><li>Info</li></a>
              <a href='#roadmap'><li>Roadmap</li></a>
              <a href='#team'><li>Team</li></a>
              <a href='#mint'><li>Mint</li></a>
            </ul>
            <div className={styles.navEnd}>
            <a><div className={styles.openSeaFooter}></div></a>
              <div className={styles.appUpMobile}>
                <Image priority src="/app-store.png" width={121} height={35.85} alt="download from app store"/>
              </div>
              <button>Play now</button>
            </div>
          </nav>
          </div>

          <div className={styles.hero}>
            <div className='animate__animated animate__fadeInUp header-animate'><h2 className={styles.header}>Creating fun games to wager crypto with 
        <span className={styles.yourSkill}>{ width > 768 ? <br/> : null } &nbsp;your friends</span></h2></div>
            <div className='animate__animated animate__fadeInUp paragraph-animate animate__fa'>
              <p className={styles.headerPara}>
            Discover Rocketie studios with their first <span>exclusive NFT</span> release and have a say in a truly decentralised web3 game studio.
              </p>
            </div>
            <div className='animate__animated animate__fadeInUp hero-btn-animate'>
              <div className={styles.heroBtns}>
                <button>Play now</button>
                <button>View NFTs</button>
              </div>
            </div>
          </div>
          
          <div className={styles.appUp}>
            <a href='#'><Image unoptimized priority src="/app-store.png" width={101} height={30} alt="download from app store"/></a>
            <a href='#'><Image unoptimized priority src="/google-play.png" width={116} height={45} alt="download from app store"/></a>
          </div>
          <div className={styles.ellipse}>  
          </div>
        </div>

        <div id='info' className={styles.nftSection}>
          <h2>Play and earn collectible <div>items and NFTs</div></h2>
          <div data-aos="fade-right" className={styles.nftCards}>
            <div onMouseEnter={()=> setNft1(true)} onMouseLeave={() => setNft1(false)}
            style={{transform: nft1Enter ? `translate(${(nft1Position.x/40)-8}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter} className={styles.nftCard1} >
              <Image unoptimized src="/nft1.png" width={170} height={170} alt="nft card"/>
              <h3><div>0.64ETH&nbsp;<span>|&nbsp;$800</span></div> <a className={styles.openSeaNFT}></a></h3>
              <div className={styles.divider}><img src="/divider.svg" alt="" /></div>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft2(true)} onMouseLeave={() => setNft2(false)}
            style={{transform: nft2Enter ? `translate(${(nft2Position.x/40)-12}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard2}>
              <Image unoptimized src="/nft2.png" width={170} height={170} alt="nft card"/>
              <h3><div>0.64ETH&nbsp;<span>|&nbsp;$800</span></div> <a className={styles.openSeaNFT}></a></h3>
              <div className={styles.divider}><img src="/divider.svg" alt="" /></div>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft3(true)} onMouseLeave={() => setNft3(false)}
            style={{transform: nft3Enter ? `translate(${(nft3Position.x/40)-15}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard3}>
              <Image unoptimized src="/nft3.png" width={170} height={170} alt="nft card"/>
              <h3><div>0.64ETH&nbsp;<span>|&nbsp;$800</span></div> <a className={styles.openSeaNFT}></a></h3>
              <div className={styles.divider}><img src="/divider.svg" alt="" /></div>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft4(true)} onMouseLeave={() => setNft4(false)}
            style={{transform: nft4Enter ? `translate(${(nft4Position.x/40)-20}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard4}>
              <Image unoptimized src="/nft4.png" width={170} height={170} alt="nft card"/>
              <h3><div>0.64ETH&nbsp;<span>|&nbsp;$800</span></div> <a className={styles.openSeaNFT}></a></h3>
              <div className={styles.divider}><img src="/divider.svg" alt="" /></div>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft5(true)} onMouseLeave={() => setNft5(false)}
            style={{transform: nft5Enter ? `translate(${(nft5Position.x/40)-25}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard5}>
              <Image unoptimized src="/nft5.png" width={170} height={170} alt="nft card"/>
              <h3><div>0.64ETH&nbsp;<span>|&nbsp;$800</span></div> <a className={styles.openSeaNFT}></a></h3>
              <div className={styles.divider}><img src="/divider.svg" alt="" /></div>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <button>See All</button>
          </div>
        </div>

        <div id='roadmap' className={styles.roadmap}>
          <div className={styles.ellipse2}>  
          </div>
          <div data-aos="fade-left">
          <p className={styles.roadmapParagraph}>FOLLOW ALONG WITH OUR</p>
          <h2>Roadmap</h2>
            <div className={styles.emptyHeight}>
              <div className={styles.roadmapDesktop}><Roadmap /></div>
              <div className={styles.roadmapMobile}><RoadmapMobile /></div>
            </div>
            <div className={styles.roadmapBtns}>
              <button>Play now</button>
              <button>Mint NFT</button>
            </div>
          </div>
        </div>

        <div id='team' className={styles.team}>
            <div className={styles.ellipse3}>
            </div>
            <div data-aos="fade-right">

            <h2>Meet the <span>team</span></h2>
            <div className={styles.teamCards}>
              
              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/fmarek.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Co-Founder</p>
                  <h3>Marek Fröhlich
                <span></span><a target="_blank" rel="noopener noreferrer" href='https://instagram.com/fmarek' className={styles.instagram}>
                  </a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/marek-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div  className={styles.members}><Image src="/fanda.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Co-Founder</p>
                  <h3>František Henyš
                  <span></span><a target="_blank" rel="noopener noreferrer" href='https://instagram.com/fandah93' className={styles.instagram}>
                  </a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/fanda-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div  className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Investor & Founder of x</p>
                  <h3>Michal
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/michal-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div  className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Investor & Founder of x</p>
                  <h3>Radek
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/radek-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div  className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Advisor</p>
                  <h3>Alex
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/alex-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Main Artist</p>
                  <h3>Kay
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/kay-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Main Developer</p>
                  <h3>Ondra
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/ondra-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Smart Contract Developer</p>
                  <h3>Martin
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/martin-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>UI Designer</p>
                  <h3>Alenka
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/alenka-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/enrico.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Head of Marketing</p>
                  <h3>Enrico Miller <span></span><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/enczcrypto' className={styles.twitter}></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/enricomiller/' className={styles.linkedin}></a></h3>
                </div> 
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/enrico-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/joseph.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Head of Blockchain Strategy</p>
                  <h3>Joseph Moulton <span></span><a target="_blank" rel="noopener noreferrer" href='https://instagram.com/jwmoulton' className={styles.instagram}>
                  </a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/joseph-moulton-a860681a1/' className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/joseph-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/member5.png" width={54} height={54} alt="team member"/></div>
                </div>

                <div className={styles.cardText}>
                  <p>Marketing Strategist</p>
                  <h3>Daniel Zad <span></span><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/d_zadransky' className={styles.twitter}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/daniel-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div className={styles.members}><Image src="/kwesi.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Blockchain Strategist</p>
                  <h3>Kwesi Ashante <span></span><a target="_blank" rel="noopener noreferrer" href='https://instagram.com/kwesi.eth' className={styles.instagram}></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kwesi-adarkwa-34606ab6/' className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/kwesi-nft.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>
              </div>

            </div>
            <div className={styles.ellipse4}>
            </div>
        </div>  

        <div id='mint' className={styles.mint}>
          <div data-aos='fade-left'>

          <p id={styles.mintP}>300/6000 REMAINING</p>
          <h2>Mint now</h2>
          <div className={styles.banner}>
            <div className={styles.bannerOverlay1}>
            </div>
            <div className={styles.bannerPic1}><Image unoptimized src="/banner-pic-left.png" width={382} height={405} alt="banner picture"/></div>
          
            <div className={styles.bannerOverlay2}>
            </div>
            <div className={styles.bannerPic2}><Image unoptimized src="/banner-pic-right.png" width={382} height={405} alt="banner picture"/></div>
          
            <div className={styles.bannerText}>
              <button>Connect Wallet</button>
              <p>How many do you want?</p>
              <div className={styles.selection}>
                <li onClick={() => handleSelect(0)} id={`${selected[0]? styles.selected : styles.unselected }`}> 1</li>
                <li onClick={() => handleSelect(1)} id={`${selected[1]? styles.selected : styles.unselected }`}> 2</li>
                <li onClick={() => handleSelect(2)} id={`${selected[2]? styles.selected : styles.unselected }`}> 3</li>
                <li onClick={() => handleSelect(3)} id={`${selected[3]? styles.selected : styles.unselected }`}> 4</li>
                <li onClick={() => handleSelect(4)} id={`${selected[4]? styles.selected : styles.unselected }`}> 5</li>
              </div>
              <div className={styles.result}>{0.64 * (selected.indexOf(true)+1)}ETH <span>/ {(selected.indexOf(true)+1)} NFT</span></div>
              <p>Limit of 5 Rocketie per user on launch.</p>
              <div className={styles.emptyHeight2}></div>
              <button>Mint Now</button>            
            </div>
          </div>
          
          </div>
        <div className={styles.ellipse5}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        
        <div data-aos="fade-up" className={styles.footerContainer}>
          <div className={styles.footerLogo}><Image src="/logo.png" width={54} height={54} alt="logo"/></div>
        
        <div className={styles.footerLinks}>
          <div>
            <ul>
              <li>Sections</li>
              <li>Home</li>
              <li>Info</li>
              <li>Roadmap</li>
              <li>Team</li>
              <li>Mint</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Legal</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Blog</li>
              <li>What is Rocketie</li>
              <li>Blog 2 here</li>
              <li>View All</li>
            </ul>
          </div>
        </div> 
        <span></span>
        <div className={styles.socialLinks}>
          <a><div className={styles.discordFooter}></div></a>
          <a><div className={styles.twitterFooter}></div></a>
          <a><div className={styles.openSeaFooter}></div></a>
        </div>
        <div className={styles.app}>
          <button className={styles.gradient3}>Play now</button>
          <a><Image unoptimized src="/app-store.png" width={115} height={35} alt="download from app store"/></a>
          <a><Image unoptimized src="/google-play.png" width={132} height={51} alt="download from app store"/></a>
        </div>
        <div className={styles.orbit2}><Orbit/></div>
        </div>
      </footer>
      </div>}
    </div>
  )
}
