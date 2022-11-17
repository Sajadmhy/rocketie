import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Orbit from '../component/Orbit';
import Roadmap from '../component/Roadmap';
import RoadmapMobile from '../component/RoadmapMobile';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

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


  return (
    <div>
      <Head>
        <title>Rocketie</title>
        <meta name="description" content="Rocketie website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
    <CustomCursor
      targets={['button', 'li', 'a']}
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

      <main className={styles.container}>
        <div className={styles.heroBG}>
          <div className={styles.orbit1}><Orbit/></div>
          <div className={styles.card2}><img src="/card2.png" alt="card" /></div>
          <div className={styles.card2Mobile}><img src="/card2-mobile.png" alt="card" /></div>
          <nav className={styles.nav}>
            <div className={styles.logo}><Image src="/logo.png" height={75} width={75} alt="logo" /></div>
            <ul>
              <li>Home</li>
              <li>Info</li>
              <li>Roadmap</li>
              <li>Team</li>
              <li>Mint</li>
            </ul>
            <div className={styles.navEnd}>
              <a href='#'><div onMouseEnter={() => setOpensea(true)} onMouseLeave={() => setOpensea(false)} className={styles.openSea}><Image src={openseaIsHovered? "/opensea-blue.png" : "/opensea.png"} width={18} height={18} alt="opensea logo" /></div></a>
              <div className={styles.appUpMobile}>
                <Image src="/app-store.png" width={121} height={35.85} alt="download from app store"/>
              </div>
              <button>Play now</button>
            </div>
          </nav>

          <div className={styles.hero}>
            <h2 className={styles.header}>Creating fun games to wager crypto with 
<span className={styles.yourSkill}>&nbsp;your friends</span></h2>
            <p className={styles.headerPara}>
            Discover Rocketie studios with their first <span>exclusive NFT</span> release and have a say in a truly decentralised web3 game studio.
            </p>
            <div className={styles.heroBtns}>
              <button>Play now</button>
              <button>View NFTs</button>
            </div>
          </div>
          
          <div className={styles.appUp}>
            <a href='#'><Image src="/app-store.png" width={101} height={30} alt="download from app store"/></a>
            <a href='#'><Image src="/google-play.png" width={116} height={45} alt="download from app store"/></a>
          </div>
          <div className={styles.ellipse}>  
          </div>
        </div>

        <div className={styles.nftSection}>
          <h2>Play and earn collectible <div>items and NFTs</div></h2>
          <div data-aos="fade-right" className={styles.nftCards}>
            <div onMouseEnter={()=> setNft1(true)} onMouseLeave={() => setNft1(false)}
            style={{transform: nft1Enter ? `translate(${(nft1Position.x/40)-8}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter} className={styles.nftCard1} >
              <Image src="/nft1.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.64ETH &nbsp; <span>| &nbsp; $800</span></div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft2(true)} onMouseLeave={() => setNft2(false)}
            style={{transform: nft2Enter ? `translate(${(nft1Position.x/40)-12}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard2}>
              <Image src="/nft2.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.64ETH &nbsp; <span>| &nbsp; $800</span></div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft3(true)} onMouseLeave={() => setNft3(false)}
            style={{transform: nft3Enter ? `translate(${(nft1Position.x/40)-15}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard3}>
              <Image src="/nft3.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.64ETH &nbsp; <span>| &nbsp; $800</span></div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft4(true)} onMouseLeave={() => setNft4(false)}
            style={{transform: nft4Enter ? `translate(${(nft1Position.x/40)-20}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard4}>
              <Image src="/nft4.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.64ETH &nbsp; <span>| &nbsp; $800</span></div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div 
            onMouseEnter={()=> setNft5(true)} onMouseLeave={() => setNft5(false)}
            style={{transform: nft5Enter ? `translate(${(nft1Position.x/40)-25}px,${(nft1Position.y/40)-15}px)` : 'translate(0,0)', 
          transition: "0.1s"}} 
            onMouseMove={handleMouseEnter}
            className={styles.nftCard5}>
              <Image src="/nft5.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.64ETH &nbsp; <span>| &nbsp; $800</span></div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <button>See All</button>
          </div>
        </div>

        <div className={styles.roadmap}>
          <div className={styles.ellipse2}>  
          </div>
          <div data-aos="fade-left">
          <p className={styles.roadmapParagraph}>FOLLOW ALONG WITH OUR</p>
          <h2>Roadmap</h2>
            <div className={styles.emptyHeight}>
              <div className={styles.roadmapDesktop}><Roadmap /></div>
              {/* <div className={styles.bigRoadmap}></div> */}
              <div className={styles.roadmapMobile}><RoadmapMobile /></div>
              {/* <div className={styles.smallRoadmap}></div> */}
            </div>
            <div className={styles.roadmapBtns}>
              <button>Play now</button>
              <button>Mint NFT</button>
            </div>
          </div>
        </div>

        <div className={styles.team}>
            <div className={styles.ellipse3}>
            </div>
            <div data-aos="fade-right">

            <h2>Meet the <span>team</span></h2>
            <div className={styles.teamCards}>
              
              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member1.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Co-Founder</p>
                  <h3>Marek Fröhlich
                <span></span><a className={styles.instagram}>
                  </a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member2.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Co-Founder</p>
                  <h3>František Henyš
                  <span></span><a className={styles.instagram}>
                  </a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Investor & Founder of x</p>
                  <h3>Michal
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Investor & Founder of x</p>
                  <h3>Radek
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Advisor</p>
                  <h3>Alex
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Main Artist</p>
                  <h3>Kay
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Main Developer</p>
                  <h3>Ondra
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Smart Contract Developer</p>
                  <h3>Martin
                  <span></span></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member3.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Head of Marketing</p>
                  <h3>Enrico Miller <span></span><a className={styles.twitter}></a><a className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member4.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Head of Blockchain Strategy</p>
                  <h3>Joseph Moulton <span></span><a className={styles.instagram}>
                  </a><a className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member5.png" width={54} height={54} alt="team member"/></div>
                </div>

                <div className={styles.cardText}>
                  <p>Marketing Strategist</p>
                  <h3>Daniel Zad <span></span><a className={styles.twitter}></a><a className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.cardHead}><Image src="/card-header.png" width={300} height={70} alt="team member"/></div>
                <div className={styles.profilePlaceholder}>
                  <div className={styles.overlay}></div>
                  <div><Image src="/member6.png" width={54} height={54} alt="team member"/></div>
                </div>
                <div className={styles.cardText}>
                  <p>Blockchain Strategist</p>
                  <h3>Kwesi Ashante <span></span><a className={styles.twitter}></a><a className={styles.linkedin}></a></h3>
                </div>
                <div className={styles.tags}>
                  <p>#2341</p>
                  <Image src="/Rocketie.png" width={59} height={59} alt="rocketie"/>
                </div>
              </div>
              </div>

            </div>
            <div className={styles.ellipse4}>
            </div>
        </div>  

        <div className={styles.mint}>
          <div data-aos='fade-left'>

          <p id={styles.mintP}>300/6000 REMAINING</p>
          <h2>Mint now</h2>
          <div className={styles.banner}>
            <div className={styles.bannerOverlay1}>
            </div>
            <div className={styles.bannerPic1}><Image src="/banner-pic-left.png" width={382} height={405} alt="banner picture"/></div>
          
            <div className={styles.bannerOverlay2}>
            </div>
            <div className={styles.bannerPic2}><Image src="/banner-pic-right.png" width={382} height={405} alt="banner picture"/></div>
          
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
              <div className={styles.result}>{0.64 * (selected.indexOf(true)+1)}ETH <span>/ 1 Rocketie</span></div>
              <p>Limit of 8 Rocketie per user on launch.</p>
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
          <a><Image src="/discord.svg" height={16} width={19} alt="discord icon"/></a>
          <a><Image src="/twitter-white.svg" height={16} width={19} alt="twitter icon"/></a>
          <a><Image src="/opensea.svg" height={18} width={18} alt="opensea icon"/></a>
        </div>
        <div className={styles.app}>
          <button>Play now</button>
          <a><Image src="/app-store.png" width={115} height={35} alt="download from app store"/></a>
          <a><Image src="/google-play.png" width={132} height={51} alt="download from app store"/></a>
        </div>
        <div className={styles.orbit2}><Orbit/></div>
        </div>
      </footer>
      
    </div>
  )
}
