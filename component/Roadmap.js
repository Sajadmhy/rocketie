import styles from "../styles/Roadmap.module.css";

export default function Roadmap() {
    
    return (
        <div className={styles.container}>
            
            <div className={styles.shape1}>
                <h3><span>1</span><span>Browser Launch</span><img src="/rm-icon1.svg" alt="" /></h3>
                <p>The browser game Beta will go live allowing for players to set highscores and compete online against each other. Crypto bets will be available instantly; players can wage bets and gain winnings. May the best player win!
</p>
            </div>

            <div className={styles.shape2}>
            <h3><span>2</span><span>NFT Passes</span><img src="/rm-icon2.svg" alt="" /></h3>
                <p>The release will give holders access to exclusive skins, early access, events and the Rocketie DAO voting rights while doubling down as playable avatars.
</p>
            </div>

            <div className={styles.shape3}>
                <div className={styles.shape31}></div>
                <h3><span>3</span><span>Tournament</span><img src="/rm-icon3.svg" alt="" /></h3>
                <p>Commencing with participation exclusive to NFT holders. Each round will have USDT rewards! The further you get the more you make. With finalist taking the majority of the prize pool.
</p>
            </div>

            <div className={styles.shape4}>
            <h3><span>4</span><span>Mobile App</span><img src="/rm-icon4.svg" alt="" /></h3>
                <p>Live on both the Google Play and Apple Store, with crypto betting only available via the browser version.
</p>
            </div>

            <div className={styles.shape5}>
                <div className={styles.shape51}></div>
                <h3><span>5</span><span>Merch</span><img src="/rm-icon5.svg" alt="" /></h3>
                <p>Premium streetwear apparel will be launched for Rocketie with our web 3.0 partners. In addition to plush Rocketie physical collectables.
</p>
            </div>

            <div className={styles.shape6}>
                <div className={styles.shape61}></div>
                <h3><span>6</span><span>In-Game Marketplace</span><img src="/rm-icon6.svg" alt="" /></h3>
                <p>Creating an opportunity to generate revenue for Rocketie through the sale of in game items and perks. The funds will be reinvested in the community.</p>
            </div>

            <div className={styles.shape7}>
            <h3><span>7</span><span>Holder Rewards</span><img src="/rm-icon7.svg" alt="" /></h3>
                <p>Airdrop date is TBA, the pot will consist of funds from the treasury and shopping revenue generated.
</p>
            </div>
        </div>

    )   
}
