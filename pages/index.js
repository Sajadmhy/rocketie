import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Orbit from '../component/Orbit';

export default function Home() {

  // initialize aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  const [selected, setSelected] = useState([true, false, false, false, false]);
  
  const handleSelect = (index) => {
    const newSelected = [false, false, false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
  }


  return (
    <div>
      <Head>
        <title>Rocketie</title>
        <meta name="description" content="Rocketie website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.heroBG}>
          <div className={styles.orbit1}><Orbit/></div>
          <nav className={styles.nav}>
            <Image src="/logo.png" height={75} width={75} alt="logo" />
            <ul>
              <li>Home</li>
              <li>Info</li>
              <li>Roadmap</li>
              <li>Team</li>
              <li>Mint</li>
            </ul>
            <div className={styles.navEnd}>
              <div className={styles.openSea}><Image src="/opensea.png" width={18} height={18} alt="opensea logo" /></div>
              <div className={styles.appUpMobile}>
                <Image src="/app-store.png" width={121} height={35.85} alt="download from app store"/>
              </div>
              <button>Play now</button>
            </div>
          </nav>

          <div className={styles.hero}>
            <h2 className={styles.header}>Fun crypto betting based on <span className={styles.yourSkill}>your skill</span></h2>
            <p className={styles.headerPara}>
              Enter the NFT universe<span> and experience the most fun crypto betting App available. This description should be roughly two lines.</span>
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
            <div className={styles.nftCard1}>
              <Image src="/nft1.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.05ETH</div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div className={styles.nftCard2}>
              <Image src="/nft2.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.05ETH</div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div className={styles.nftCard3}>
              <Image src="/nft3.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.05ETH</div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div className={styles.nftCard4}>
              <Image src="/nft4.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.05ETH</div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <div className={styles.nftCard5}>
              <Image src="/nft5.png" width={150} height={150} alt="nft card"/>
              <h3><div>0.05ETH</div> <Image src="/opensea.png" width={18} height={18} alt="nft card title"/></h3>
              <p>&quot;MOONBEAM 3000&quot;</p>
            </div>
            <button>See All</button>
          </div>
          <div className={styles.ellipse2}>  
          </div>
        </div>

        <div className={styles.roadmap}>
          <div data-aos="fade-left">
          <p>FOLLOW ALONG WITH OUR</p>
          <h2>Roadmap</h2>
            <div className={styles.emptyHeight}>
              <div className={styles.bigRoadmap}></div>
              <div className={styles.smallRoadmap}></div>
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
                  <h3>Michael Doe <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                  <h3>Jones Matthew <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                  <p>Lead Developer</p>
                  <h3>John Michael <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                  <p>Blockchain Strategist</p>
                  <h3>Joseph Doe <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                  <p>Designer</p>
                  <h3>Katy Doe <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                  <p>Marketer</p>
                  <h3>Michelle Doe <span></span><Image src="/twitter.svg" height={13} width={16} alt="twitter icon"/><Image src="/linkedin.svg" height={13} width={14} alt="linkedin icon"/></h3>
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
                <div onClick={() => handleSelect(0)} id={`${selected[0]? styles.selected : styles.unselected }`}> 1</div>
                <div onClick={() => handleSelect(1)} id={`${selected[1]? styles.selected : styles.unselected }`}> 2</div>
                <div onClick={() => handleSelect(2)} id={`${selected[2]? styles.selected : styles.unselected }`}> 3</div>
                <div onClick={() => handleSelect(3)} id={`${selected[3]? styles.selected : styles.unselected }`}> 4</div>
                <div onClick={() => handleSelect(4)} id={`${selected[4]? styles.selected : styles.unselected }`}> 5</div>
              </div>
              <div className={styles.result}>{0.11 * (selected.indexOf(true)+1)}ETH <span>/ 1 Rocketie</span></div>
              <p>Limit of 5 Rocketie per user on launch.</p>
              <div className={styles.emptyHeight2}></div>
              <button>Mint Now</button>            
            </div>
          </div>
          
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.ellipse5}></div>

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
          <Image src="/discord.svg" height={16} width={19} alt="discord icon"/>
          <Image src="/twitter-white.svg" height={16} width={19} alt="twitter icon"/>
          <Image src="/opensea.svg" height={18} width={18} alt="opensea icon"/>
        </div>
        <div className={styles.app}>
          <button>Play now</button>
          <Image src="/app-store.png" width={115} height={35} alt="download from app store"/>
          <Image src="/google-play.png" width={132} height={51} alt="download from app store"/>
        </div>
        <div className={styles.orbit2}><Orbit/></div>
        </div>
      </footer>
      
    </div>
  )
}
