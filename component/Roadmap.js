import styles from "../styles/Roadmap.module.css";
import { useState } from "react";


export default function Roadmap() {
    const [isHovered, setHover] = useState([false, false,false,false, false,false,false]);

    const hoverIn = (index) => {
        const newHove = [...isHovered];
        newHove[index] = true;
        setHover(newHove);
    };
    const hoverOut = () => {
        setHover([false, false,false,false, false,false,false]);
    };


    return (
        <div className={styles.container}>
            
            <div className={styles.shape1} onMouseEnter={()=> hoverIn(0)} onMouseLeave={() => hoverOut() }>
                <h3><span>1</span><span>Browser Launch</span>
                <svg  width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.74415 4.53472C5.74415 5.03555 5.33806 5.44164 4.83723 5.44164C4.3364 5.44164 3.93032 5.03555 3.93032 4.53472C3.93032 4.03369 4.3364 3.62781 4.83723 3.62781C5.33806 3.62781 5.74415 4.03369 5.74415 4.53472Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76703 4.53472C8.76703 5.03555 8.36115 5.44164 7.86012 5.44164C7.35929 5.44164 6.9532 5.03555 6.9532 4.53472C6.9532 4.03369 7.35929 3.62781 7.86012 3.62781C8.36115 3.62781 8.76703 4.03369 8.76703 4.53472Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7904 4.53472C11.7904 5.03555 11.3843 5.44164 10.8835 5.44164C10.3825 5.44164 9.9766 5.03555 9.9766 4.53472C9.9766 4.03369 10.3825 3.62781 10.8835 3.62781C11.3843 3.62781 11.7904 4.03369 11.7904 4.53472Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9987 14.2081V3.9299C25.9987 1.75937 24.2393 0 22.0688 0H3.93044C1.75991 0 0.000541687 1.75937 0.000541687 3.9299V22.0682C0.000541687 24.2388 1.75991 25.9981 3.93044 25.9981H12.9996C13.5002 25.9981 13.9065 25.5918 13.9065 25.0912C13.9065 24.5906 13.5002 24.1843 12.9996 24.1843H3.93044C2.7612 24.1843 1.81437 23.2375 1.81437 22.0682V3.9299C1.81437 2.76065 2.7612 1.81383 3.93044 1.81383H22.0688C23.238 1.81383 24.1848 2.76065 24.1848 3.9299V14.2081C24.1848 14.7087 24.5911 15.115 25.0918 15.115C25.5924 15.115 25.9987 14.7087 25.9987 14.2081Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.0915 7.25549H0.906917C0.406288 7.25549 0 7.66178 0 8.16241C0 8.66304 0.406288 9.06933 0.906917 9.06933H25.0915C25.5922 9.06933 25.9984 8.66304 25.9984 8.16241C25.9984 7.66178 25.5922 7.25549 25.0915 7.25549Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4349 24.5712L21.8944 20.9436C21.6077 20.5336 21.0419 20.4332 20.632 20.7211C20.2221 21.0077 20.1216 21.5735 20.4095 21.9835L22.9489 25.6111C23.2367 26.0211 23.8026 26.1215 24.2125 25.8336C24.6224 25.547 24.7228 24.9812 24.435 24.5712H24.4349Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.1729 17.9374C23.1076 16.7451 19.3676 14.5879 17.3496 13.4235C16.7933 13.103 16.1027 13.1332 15.5768 13.5008C15.0521 13.8684 14.7871 14.5081 14.8985 15.1393C15.3023 17.4343 16.0509 21.6872 16.4643 24.0354C16.5769 24.68 17.0617 25.1974 17.6978 25.3522C18.3338 25.5083 19.0012 25.2737 19.4003 24.7536L21.5212 21.9893L24.8442 20.9421C25.4693 20.7449 25.918 20.1971 25.9894 19.5467C26.0607 18.8961 25.7402 18.2637 25.1732 17.9371L25.1729 17.9374ZM23.9455 19.3231L20.7025 20.346C20.5247 20.4016 20.3687 20.5104 20.2563 20.6579L18.1862 23.3568L16.7449 15.1681L23.9458 19.3229L23.9455 19.3231Z" fill={isHovered[0]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
</svg>

                </h3>
                <p>The browser game <span className={styles.darker}>Beta will go live allowing for players to set highscores and compete online against each other. Crypto bets will be available instantly; players can wage bets and gain winnings. May the best player win!</span>
</p>
            </div>

            <div className={styles.shape2} onMouseEnter={()=> hoverIn(1)} onMouseLeave={() => hoverOut() }>
            <h3><span>2</span><span>NFT Passes</span>
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1549 3.84366L8.64522 3.17086C7.3871 2.83341 6.09208 3.58154 5.75462 4.83968L4.95825 7.81066H2.36033C1.05743 7.81066 0 8.86809 0 10.171V29.0536C0 30.3565 1.05743 31.414 2.36033 31.414H14.949C16.2519 31.414 17.3093 30.3565 17.3093 29.0536V28.5958L18.0559 25.8105L27.6759 9.84729C27.6783 9.84334 27.6814 9.83859 27.6838 9.83464C28.3353 8.7064 27.9475 7.26202 26.82 6.6105L15.918 0.31637C14.7897 -0.335095 13.3453 0.0518849 12.6938 1.18018L11.1556 3.84426L11.1549 3.84366ZM9.05909 14.2736C8.81041 14.1235 8.49877 14.1235 8.25037 14.2736L4.31657 16.634C4.07896 16.7757 3.93407 17.032 3.93407 17.3083V22.029C3.93407 22.3051 4.07896 22.5617 4.31657 22.7034L8.25037 25.0637C8.49905 25.2139 8.81069 25.2139 9.05909 25.0637L12.9929 22.7034C13.2305 22.5617 13.3754 22.3053 13.3754 22.029V17.3083C13.3754 17.0323 13.2305 16.7757 12.9929 16.634L9.05909 14.2736ZM8.65472 15.8653L11.8019 17.7536V21.5836L8.65472 23.4718L5.50752 21.5836V17.7536L8.65472 15.8653ZM11.3196 5.51626L8.23849 4.69095C7.81911 4.57847 7.38709 4.82793 7.2746 5.24732L6.58781 7.81077H14.9488C16.2517 7.81077 17.3091 8.8682 17.3091 10.1711V22.5156L20.9542 8.91338C21.0667 8.49321 20.8172 8.06198 20.3978 7.94949L11.3443 5.52381C11.3364 5.52144 11.3277 5.51907 11.319 5.5167L11.3196 5.51626ZM19.5268 20.3209C22.3782 15.5892 26.3252 9.03922 26.3286 9.0345C26.5354 8.66069 26.405 8.18708 26.0336 7.97235L15.1315 1.67823C14.7554 1.46116 14.2741 1.58998 14.0567 1.96615L12.7293 4.26431L20.8056 6.42866C22.0646 6.76533 22.8119 8.06114 22.4753 9.31926L19.5268 20.3209Z" fill={isHovered[1]? "#39BEF0" : "url(#paint2_linear_210_2)"} fill-opacity="0.27"/>
<defs>
<linearGradient id="paint0_linear_208_37" x1="14" y1="0" x2="22" y2="52.707" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
            </h3>
                <p>The release will give holders access to exclusive skins, early access, <span className={styles.darker}>events and the Rocketie DAO voting rights while doubling down as playable avatars.</span>
</p>
            </div>

            <div className={styles.shape3} onMouseEnter={()=> hoverIn(2)} onMouseLeave={() => hoverOut() }>
                <div className={styles.shape31}></div>
                <h3><span>3</span><span>Tournament</span>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3618 9.55269C18.5205 9.55292 18.6704 9.48003 18.7685 9.35524C19.221 8.76681 19.5993 8.12463 19.8948 7.44348C19.9552 7.31777 19.9621 7.17291 19.9139 7.04189C19.8657 6.91087 19.7668 6.805 19.6392 6.74825C19.5119 6.69127 19.3668 6.68851 19.2372 6.74017C19.1078 6.79207 19.0044 6.89403 18.9514 7.02297C18.69 7.62594 18.3558 8.19454 17.9561 8.71631C17.8341 8.87154 17.8112 9.08306 17.8975 9.26114C17.9838 9.43898 18.1641 9.55201 18.3618 9.55224L18.3618 9.55269Z" fill={isHovered[2]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path d="M29.4515 26.9412V24.8011C29.4515 24.6641 29.397 24.5326 29.3001 24.4357C29.2033 24.3389 29.0718 24.2844 28.9348 24.2844H24.8012V22.2176C24.8012 22.0806 24.7468 21.9492 24.6499 21.8523C24.553 21.7554 24.4216 21.701 24.2845 21.701H16.0175V20.6676C16.0175 20.3822 15.7861 20.1509 15.5008 20.1509C15.2154 20.1509 14.9841 20.3822 14.9841 20.6676V21.701H6.71701C6.43168 21.701 6.20032 21.9323 6.20032 22.2176V24.8011H2.06678C1.78145 24.8011 1.55009 25.0325 1.55009 25.3178V26.9412C0.894983 27.1103 0.364237 27.5894 0.12898 28.2237C-0.106301 28.8581 -0.0161075 29.5674 0.370254 30.1226C0.756622 30.678 1.39023 31.0093 2.06678 31.0093C2.74332 31.0093 3.37699 30.678 3.7633 30.1226C4.14966 29.5674 4.23985 28.8581 4.00457 28.2237C3.76929 27.5894 3.23851 27.1103 2.58346 26.9412V25.8345H10.8505V26.9412C10.1954 27.1103 9.66468 27.5894 9.42942 28.2237C9.19414 28.8581 9.28434 29.5674 9.6707 30.1226C10.0571 30.678 10.6907 31.0093 11.3672 31.0093C12.0438 31.0093 12.6774 30.678 13.0637 30.1226C13.4501 29.5674 13.5403 28.8581 13.305 28.2237C13.0697 27.5894 12.539 27.1103 11.8839 26.9412V25.3178C11.8839 25.1808 11.8295 25.0493 11.7326 24.9524C11.6357 24.8555 11.5042 24.8011 11.3672 24.8011H7.23368V22.7343H23.7678V24.2844H19.6343C19.349 24.2844 19.1176 24.5158 19.1176 24.8011V26.9412C18.4625 27.1103 17.9317 27.5894 17.6965 28.2237C17.4612 28.8581 17.5514 29.5674 17.9378 30.1226C18.3241 30.678 18.9577 31.0093 19.6343 31.0093C20.3108 31.0093 20.9445 30.678 21.3308 30.1226C21.7172 29.5674 21.8074 28.8581 21.5721 28.2237C21.3368 27.5894 20.806 27.1103 20.151 26.9412V25.3178H28.418V26.9412C27.7629 27.1103 27.2322 27.5894 26.9969 28.2237C26.7616 28.8581 26.8518 29.5674 27.2382 30.1226C27.6246 30.678 28.2582 31.0093 28.9347 31.0093C29.6113 31.0093 30.2449 30.678 30.6312 30.1226C31.0176 29.5674 31.1078 28.8581 30.8725 28.2237C30.6372 27.5894 30.1065 27.1103 29.4514 26.9412H29.4515ZM3.10017 28.9346C3.10017 29.2087 2.99129 29.4716 2.79753 29.6654C2.60378 29.8591 2.34081 29.968 2.06678 29.968C1.79275 29.968 1.52979 29.8591 1.33603 29.6654C1.14227 29.4716 1.0334 29.2087 1.0334 28.9346C1.0334 28.6606 1.14227 28.3976 1.33603 28.2039C1.52979 28.0101 1.79275 27.9013 2.06678 27.9013C2.34081 27.9013 2.60378 28.0101 2.79753 28.2039C2.99129 28.3976 3.10017 28.6606 3.10017 28.9346ZM12.4006 28.9346C12.4006 29.2087 12.2917 29.4716 12.098 29.6654C11.9042 29.8591 11.6413 29.968 11.3672 29.968C11.0932 29.968 10.8302 29.8591 10.6365 29.6654C10.4427 29.4716 10.3339 29.2087 10.3339 28.9346C10.3339 28.6606 10.4427 28.3976 10.6365 28.2039C10.8302 28.0101 11.0932 27.9013 11.3672 27.9013C11.6413 27.9013 11.9042 28.0101 12.098 28.2039C12.2917 28.3976 12.4006 28.6606 12.4006 28.9346ZM20.6677 28.9346C20.6677 29.2087 20.5588 29.4716 20.3651 29.6654C20.1713 29.8591 19.9083 29.968 19.6343 29.968C19.3603 29.968 19.0973 29.8591 18.9036 29.6654C18.7098 29.4716 18.6009 29.2087 18.6009 28.9346C18.6009 28.6606 18.7098 28.3976 18.9036 28.2039C19.0973 28.0101 19.3603 27.9013 19.6343 27.9013C19.9083 27.9013 20.1713 28.0101 20.3651 28.2039C20.5588 28.3976 20.6677 28.6606 20.6677 28.9346ZM28.9348 29.968C28.6607 29.968 28.3978 29.8591 28.204 29.6654C28.0103 29.4716 27.9014 29.2087 27.9014 28.9346C27.9014 28.6606 28.0103 28.3976 28.204 28.2039C28.3978 28.0101 28.6607 27.9013 28.9348 27.9013C29.2088 27.9013 29.4718 28.0101 29.6655 28.2039C29.8593 28.3976 29.9681 28.6606 29.9681 28.9346C29.9681 29.2087 29.8593 29.4716 29.6655 29.6654C29.4718 29.8591 29.2088 29.968 28.9348 29.968Z" fill={isHovered[2]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path d="M17.3089 10.3338C17.3089 10.6192 17.0775 10.8505 16.7922 10.8505C16.5069 10.8505 16.2755 10.6192 16.2755 10.3338C16.2755 10.0485 16.5069 9.81714 16.7922 9.81714C17.0775 9.81714 17.3089 10.0485 17.3089 10.3338Z" fill={isHovered[2]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path d="M5.08489 2.5535C4.79356 2.86328 4.64224 3.27917 4.66623 3.70362C4.7924 6.20034 5.85462 11.9754 11.848 11.9034C12.2733 12.2521 12.7423 12.5437 13.243 12.7709C13.0047 14.9327 12.2542 15.7878 12.003 16.0173C11.4494 15.9961 10.9262 16.2717 10.6307 16.7407C10.3355 17.2096 10.3127 17.8006 10.5712 18.2908C10.8296 18.7809 11.3299 19.0963 11.8838 19.1175H19.1174C19.6713 19.0962 20.1716 18.7812 20.4301 18.291C20.6887 17.8008 20.6659 17.2098 20.3706 16.7409C20.0754 16.272 19.5525 15.9961 18.9986 16.0173C18.7461 15.7878 17.9953 14.9323 17.7586 12.7709C18.2594 12.5437 18.7283 12.2521 19.1536 11.9034C25.1473 11.9751 26.2108 6.20016 26.3354 3.70362C26.3591 3.27782 26.2064 2.8608 25.9133 2.55096C25.6198 2.2414 25.2118 2.0661 24.7853 2.06679H23.2156C23.2255 1.91847 23.2414 1.77431 23.2481 1.62391C23.267 1.20064 23.1123 0.787758 22.8195 0.481167C22.5268 0.174612 22.1218 0.000921188 21.6981 0H9.30394C8.8802 0.000922664 8.47493 0.174612 8.18245 0.481167C7.88974 0.787722 7.73496 1.20064 7.75388 1.62391C7.76056 1.77431 7.77671 1.91847 7.7864 2.06679H6.21347C5.78627 2.06748 5.37802 2.24325 5.08413 2.5535H5.08489ZM19.1177 17.051C19.403 17.051 19.6343 17.2824 19.6343 17.5677C19.6343 17.853 19.403 18.0844 19.1177 18.0844H11.884C11.5986 18.0844 11.3673 17.853 11.3673 17.5677C11.3673 17.2824 11.5986 17.051 11.884 17.051H19.1177ZM13.3208 16.0176C13.8361 15.1219 14.153 14.1264 14.2508 13.0979C15.0729 13.3066 15.934 13.3066 16.7559 13.0979C16.8521 14.1259 17.1674 15.1215 17.6808 16.0176H13.3208ZM23.1285 3.10031H24.7877C24.9307 3.09961 25.0675 3.15843 25.1653 3.26316C25.2626 3.36488 25.3129 3.50282 25.3044 3.64329C25.1581 6.14969 24.2623 10.1707 20.2733 10.7807C21.7473 8.99055 22.7689 6.31964 23.1285 3.10003L23.1285 3.10031ZM8.92919 1.19475C9.02699 1.09164 9.16286 1.03328 9.30495 1.03351H21.6973C21.8394 1.03328 21.9755 1.09141 22.074 1.19405C22.1722 1.2967 22.2244 1.4351 22.2181 1.57696C21.7372 7.10929 20.3022 11.6823 15.5011 12.2208C10.7017 11.6824 9.26659 7.10929 8.78414 1.57696C8.77791 1.4351 8.83051 1.2967 8.92923 1.19475H8.92919ZM7.87367 3.10031C8.23535 6.31974 9.25492 8.99059 10.7289 10.781C6.73995 10.1709 5.84404 6.14991 5.69783 3.64357V3.64334C5.6893 3.50286 5.73958 3.36493 5.83693 3.2632C5.93473 3.15848 6.07152 3.09966 6.21452 3.10035L7.87367 3.10031Z" fill={isHovered[2]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<defs>
<linearGradient id="paint0_linear_210_2" x1="18.8957" y1="6.70337" x2="18.8957" y2="9.55269" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.33"/>
<stop offset="1" stop-color="white" stop-opacity="0.17"/>
</linearGradient>
<linearGradient id="paint1_linear_210_2" x1="15.5008" y1="20.1509" x2="15.5008" y2="31.0093" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.33"/>
<stop offset="1" stop-color="white" stop-opacity="0.17"/>
</linearGradient>
<linearGradient id="paint2_linear_210_2" x1="16.7922" y1="9.81714" x2="16.7922" y2="10.8505" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.33"/>
<stop offset="1" stop-color="white" stop-opacity="0.17"/>
</linearGradient>
<linearGradient id="paint3_linear_210_2" x1="15.5008" y1="0" x2="15.5008" y2="19.1175" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.33"/>
<stop offset="1" stop-color="white" stop-opacity="0.17"/>
</linearGradient>
</defs>
</svg>

                </h3>
                <p>Commencing with participation exclusive to NFT holders. <span className={styles.darker}>Each round will have USDT rewards! The further you get the more you make. With finalist taking the majority of the prize pool.</span>
</p>
            </div>

            <div className={styles.shape4} onMouseEnter={()=> hoverIn(3)} onMouseLeave={() => hoverOut() }>
            <h3><span>4</span><span>Mobile App</span><svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.96581 0C1.33414 0 0 1.3342 0 2.96582V26.0342C0 27.6659 1.3342 29 2.96581 29H14.8295C16.4612 29 17.7954 27.6658 17.7954 26.0342V2.96582C17.7954 1.33414 16.4612 0 14.8295 0H2.96581ZM2.96581 1.31807H14.8295C15.7539 1.31807 16.4773 2.04149 16.4773 2.96582V3.29546H1.31807V2.96582C1.31807 2.04149 2.04149 1.31807 2.96581 1.31807ZM1.31807 4.61356H16.4773V22.4092H1.31807V4.61356ZM8.56813 7.67229L3.95458 10.3087C3.75528 10.4232 3.62516 10.6469 3.62493 10.8749V16.1478C3.62516 16.3758 3.75527 16.5995 3.95458 16.7142L8.56813 19.3507C8.76766 19.4638 9.02765 19.4638 9.22717 19.3507L13.8407 16.7142C14.0403 16.5995 14.1704 16.3758 14.1706 16.1478V10.8749C14.1704 10.6469 14.0403 10.4232 13.841 10.3085L9.2274 7.67206C9.13315 7.6185 9.01178 7.57942 8.89776 7.57942C8.78374 7.57942 8.65547 7.62218 8.56811 7.67206L8.56813 7.67229ZM8.89777 9.00072L12.1829 10.8749L8.89777 12.7493L5.61265 10.8749L8.89777 9.00072ZM4.94326 12.008L8.23874 13.8925V17.6514L4.94326 15.7669V12.008ZM12.8524 12.008V15.7669L9.55693 17.6514V13.8925L12.8524 12.008ZM1.31823 23.7275H16.4774V26.0343C16.4774 26.9586 15.754 27.682 14.8297 27.682H2.96597C2.04164 27.682 1.31823 26.9586 1.31823 26.0343V23.7275ZM8.89783 24.7162C8.35188 24.7162 7.90913 25.159 7.90913 25.7049C7.90913 26.2509 8.35187 26.6936 8.89783 26.6936C9.4438 26.6936 9.88654 26.2509 9.88654 25.7049C9.88654 25.159 9.4438 24.7162 8.89783 24.7162Z" fill={isHovered[3]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<defs>
<linearGradient id="paint0_linear_210_88" x1="8.89768" y1="0" x2="8.89768" y2="29" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.22"/>
<stop offset="1" stop-color="white" stop-opacity="0.18"/>
</linearGradient>
</defs>
</svg>
</h3>
                <p><span className={styles.darker}>Live on both the</span> Google Play and Apple Store, <span className={styles.darker}>with crypto betting only available via the browser version.</span>
</p>
            </div>

            <div className={styles.shape5} onMouseEnter={()=> hoverIn(4)} onMouseLeave={() => hoverOut() }>
                <div className={styles.shape51}></div>
                <h3><span>5</span><span>Merch</span>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.2847 0.000431725C7.10416 0.00130366 6.92561 0.0815197 6.80725 0.215365L0.151218 7.60766C-0.0655235 7.84788 -0.0466493 8.25682 0.190969 8.47675L3.92177 11.9045C4.18381 12.1428 4.65502 12.0988 4.8669 11.8167L6.37924 9.77573V24.3751C6.37924 24.7022 6.68258 25 7.0159 25H20.984C21.3173 25 21.6207 24.7022 21.6207 24.3751V9.77573L23.133 11.8167C23.3449 12.099 23.8161 12.1428 24.0782 11.9045L27.809 8.47697C28.0468 8.25681 28.0654 7.8479 27.8487 7.60789L21.1932 0.21503C21.0749 0.0814083 20.8961 0.000972991 20.7158 9.6875e-05C16.2373 -0.000121094 11.763 9.6875e-05 7.28491 9.6875e-05L7.2847 0.000431725ZM7.57317 1.25032H10.3688V1.32836C10.3688 3.2865 12.0062 4.89281 14.0002 4.89281C15.9917 4.89281 17.6352 3.28779 17.6315 1.32836V1.25032H20.4271L26.4857 7.97856L23.7397 10.5176L21.5013 7.49027C21.3447 7.27622 21.0409 7.17856 20.7857 7.26074C20.5306 7.3427 20.3443 7.59796 20.3474 7.86152V11.6898H7.65271V7.86152C7.65582 7.59797 7.4695 7.34294 7.21434 7.26074C6.95918 7.17877 6.65517 7.27621 6.49883 7.49027L4.26035 10.5176L1.51442 7.97856L7.57317 1.25032ZM11.6422 1.25032H16.3578V1.32836C16.361 2.60358 15.2975 3.64292 13.9999 3.64292C12.6985 3.64292 11.6419 2.60508 11.6419 1.32836L11.6422 1.25032ZM7.65265 12.94H20.3473V14.4341H7.65265V12.94ZM7.65265 15.6842H20.3473V23.7506H7.65265V15.6842Z" fill={isHovered[4]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<defs>
<linearGradient id="paint0_linear_210_91" x1="14" y1="0" x2="14" y2="25" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.29"/>
<stop offset="1" stop-color="white" stop-opacity="0.16"/>
</linearGradient>
</defs>
</svg>

                </h3>
                <p>Premium streetwear apparel <span className={styles.darker}>will be launched for Rocketie with our web 3.0 partners. In addition to plush Rocketie physical collectables.</span>
</p>
            </div>

            <div className={styles.shape6} onMouseEnter={()=> hoverIn(5)} onMouseLeave={() => hoverOut() }>
                <div className={styles.shape61}></div>
                <h3><span>6</span><span>In-Game Marketplace</span>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8745 8.42647L27.1584 4.34209V3.08157C27.1584 1.38231 25.7761 0 24.0768 0H5.92318C4.22392 0 2.84161 1.38231 2.84161 3.08157V4.34209L0.12552 8.42647C0.0436903 8.54945 0 8.69392 0 8.84163V11.9974C0 13.4623 0.734383 14.7588 1.85436 15.5385V28.4006C1.85436 30.0999 3.23667 31.4822 4.93593 31.4822H25.0643C26.7636 31.4822 28.1459 30.0999 28.1459 28.4006V15.5385C29.2659 14.7588 30 13.4623 30 11.9974V8.84163C30.0002 8.69392 29.9565 8.54945 29.8747 8.42647H29.8745ZM4.34032 3.08163C4.34032 2.20901 5.05021 1.49912 5.92283 1.49912H24.0771C24.9497 1.49912 25.6596 2.20901 25.6596 3.08163V3.81927H4.34056L4.34032 3.08163ZM3.99266 5.31833H26.007L27.8517 8.092H2.14824L3.99266 5.31833ZM21.3752 9.59131V11.9974C21.3752 13.5483 20.1133 14.8102 18.5623 14.8102C17.0112 14.8102 15.7493 13.5483 15.7493 11.9974V9.59131H21.3752ZM14.2498 9.59131V11.9974C14.2498 13.5483 12.9879 14.8102 11.4368 14.8102C9.88572 14.8102 8.62383 13.5483 8.62383 11.9974V9.59131H14.2498ZM1.49836 11.9974V9.59131H7.12453V11.9974C7.12453 13.5483 5.86264 14.8102 4.31156 14.8102C2.76025 14.8102 1.49836 13.5483 1.49836 11.9974ZM12.6248 29.983H7.22673V21.1118C7.22673 20.6065 7.63773 20.1958 8.14278 20.1958H11.7087C12.214 20.1958 12.6247 20.6068 12.6247 21.1118L12.6248 29.983ZM26.6455 28.4005C26.6455 29.2731 25.9356 29.983 25.063 29.983H14.1236V21.1118C14.1236 19.7799 13.0401 18.6965 11.7082 18.6965H8.14237C6.81066 18.6965 5.72701 19.7799 5.72701 21.1118V29.983H4.93434C4.06172 29.983 3.35184 29.2731 3.35184 28.4005V16.2018C3.66043 16.2721 3.9813 16.3093 4.31068 16.3093C5.78915 16.3093 7.09612 15.5615 7.87329 14.4242C8.65046 15.5616 9.95744 16.3093 11.4359 16.3093C12.9144 16.3093 14.2214 15.5615 14.9985 14.4242C15.7757 15.5616 17.0827 16.3093 18.5611 16.3093C20.0396 16.3093 21.3466 15.5615 22.1238 14.4242C22.9009 15.5616 24.2079 16.3093 25.6864 16.3093C26.0158 16.3093 26.3368 16.2721 26.6452 16.2018L26.6455 28.4005ZM28.4996 11.9973C28.4996 13.5482 27.2378 14.81 25.6864 14.81C24.1354 14.81 22.8735 13.5482 22.8735 11.9973V9.59119H28.4996V11.9973Z" fill={isHovered[5]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<path d="M21.8561 18.6973H18.0621C16.7303 18.6973 15.6467 19.7807 15.6467 21.1126V22.7973C15.6467 24.1293 16.7302 25.2127 18.0621 25.2127H21.8558C23.1875 25.2127 24.2712 24.1292 24.2712 22.7973V21.1126C24.2712 19.7807 23.1877 18.6973 21.8561 18.6973ZM22.7721 22.7971C22.7721 23.3024 22.3611 23.7131 21.8561 23.7131L18.0621 23.7134C17.557 23.7134 17.146 23.3024 17.146 22.7973V21.1126C17.146 20.6073 17.557 20.1966 18.0621 20.1966H21.8558C22.3609 20.1966 22.7719 20.6076 22.7719 21.1126L22.7721 22.7971Z" fill={isHovered[5]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<defs>
<linearGradient id="paint0_linear_210_249" x1="15" y1="0" x2="15" y2="31.4822" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.26"/>
<stop offset="1" stop-color="white" stop-opacity="0.11"/>
</linearGradient>
<linearGradient id="paint1_linear_210_249" x1="19.9589" y1="18.6973" x2="19.9589" y2="25.2127" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.26"/>
<stop offset="1" stop-color="white" stop-opacity="0.11"/>
</linearGradient>
</defs>
</svg>

                </h3>
                <p><span className={styles.darker}>Creating an opportunity to </span>generate revenue <span className={styles.darker}>for Rocketie through the sale of in game items and perks. The funds will be reinvested in the community.</span></p>
            </div>

            <div className={styles.shape7} onMouseEnter={()=> hoverIn(6)} onMouseLeave={() => hoverOut() }>
            <h3><span>7</span><span>Holder Rewards</span><svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0074 22.186C14.0235 22.2357 14.0285 22.3087 13.9604 22.3748L12.4519 23.8413C12.1025 24.1811 11.9432 24.6702 12.0256 25.1497L12.3817 27.2206C12.3979 27.3138 12.3507 27.3699 12.3083 27.4008C12.266 27.4314 12.198 27.4588 12.1138 27.4148L10.249 26.437C10.0331 26.3237 9.79621 26.2671 9.55935 26.2671C9.32249 26.2671 9.08561 26.3237 8.86947 26.437L7.0049 27.4148C6.92088 27.4586 6.85275 27.4314 6.81039 27.4008C6.76803 27.3699 6.72085 27.3138 6.73696 27.2206L7.09306 25.1497C7.17547 24.6702 7.01618 24.1811 6.66675 23.8413L5.15805 22.3748C5.09015 22.3087 5.09521 22.2357 5.11132 22.186C5.12767 22.1363 5.16657 22.0742 5.26048 22.0606L7.34509 21.7586C7.82803 21.6886 8.24535 21.3863 8.46126 20.9499L9.39375 19.0657C9.43565 18.9808 9.50701 18.9631 9.55926 18.9631C9.61174 18.9631 9.68288 18.9808 9.72477 19.0657L10.6573 20.9499C10.8732 21.3863 11.2905 21.6886 11.7733 21.7586L13.8581 22.0606C13.952 22.0742 13.9909 22.1363 14.0073 22.186M11.8209 20.3772L10.8886 18.4931C10.637 17.9846 10.1276 17.669 9.55925 17.669C8.99088 17.669 8.4815 17.9846 8.23011 18.4931L7.29762 20.3772C7.27069 20.4315 7.21867 20.4693 7.15858 20.4778L5.07374 20.78C4.51138 20.8615 4.05286 21.2471 3.87719 21.7862C3.70155 22.3253 3.84519 22.9058 4.25217 23.3015L5.76087 24.7681C5.80437 24.8105 5.82417 24.8712 5.81404 24.9311L5.45793 27.0019C5.36172 27.5606 5.58776 28.1144 6.04746 28.4477C6.50738 28.7808 7.10564 28.8241 7.6086 28.5603L9.47317 27.5824C9.52703 27.5543 9.59149 27.5543 9.64535 27.5824L11.5099 28.5603C11.7288 28.6749 11.9655 28.7315 12.2012 28.7315C12.5071 28.7315 12.8112 28.636 13.0708 28.4477C13.5307 28.1144 13.7568 27.5605 13.6606 27.0019L13.3045 24.9311C13.2941 24.8712 13.3141 24.8105 13.3577 24.7681L14.8664 23.3015C15.2733 22.9058 15.417 22.3253 15.2413 21.7862C15.0657 21.2471 14.6071 20.8615 14.0448 20.78L11.9597 20.4778C11.8996 20.469 11.8478 20.4315 11.8209 20.3772M17.8016 26.8853L12.9676 31.7062H6.13126L1.29727 26.8853V20.0672L6.13126 15.2461H12.9676L17.8016 20.0672V26.8853ZM1.85662 1.29427H5.39005V11.4177L1.85662 9.3588V1.29427ZM12.2104 1.29427V12.2863L9.54571 13.8389L6.68743 12.1735V1.29404L12.2104 1.29427ZM17.235 9.35869L13.508 11.5303V1.29439H17.235V9.35869ZM18.9092 19.3418L13.6952 14.1418C13.5734 14.0205 13.4086 13.9521 13.2364 13.9521H11.9237L18.2114 10.2884C18.4105 10.1724 18.5329 9.95971 18.5329 9.72974V0.647039C18.5329 0.289553 18.2424 0 17.8842 0H1.20798C0.849571 0 0.559053 0.289582 0.559053 0.647039V9.72974C0.559053 9.9597 0.681513 10.1724 0.880627 10.2884L7.16833 13.9521H5.86271C5.69075 13.9521 5.52571 14.0205 5.40393 14.1418L0.18991 19.3418C0.0683694 19.4631 0 19.6277 0 19.7992V27.1529C0 27.3247 0.0683694 27.4892 0.18991 27.6106L5.40393 32.8106C5.52571 32.9319 5.69075 33 5.86271 33H13.2365C13.4087 33 13.5735 32.9319 13.6952 32.8106L18.9093 27.6106C19.0308 27.4892 19.0994 27.3247 19.0994 27.1529V19.7992C19.0994 19.6277 19.0308 19.4631 18.9093 19.3418H18.9092Z" fill={isHovered[6]? "#39BEF0" : "url(#paint2_linear_210_2)"}/>
<defs>
<linearGradient id="paint0_linear_210_317" x1="9.5497" y1="0" x2="9.5497" y2="33" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.26"/>
<stop offset="1" stop-color="white" stop-opacity="0.14"/>
</linearGradient>
</defs>
</svg>
</h3>
                <p><span className={styles.darker}>Airdrop date is TBA, the pot will consist of </span>funds from the treasury and shopping revenue <span className={styles.darker}>generated.</span>
</p>
            </div>
        </div>

    )   
}
