import styles from "../styles/Orbit.module.css";
import Image from "next/image";

export default function Orbit() {

    return (
        <div id={styles.container}>
            <div id={styles.innerOrbit}>
                <div className={styles.innerOrbitCirlces}></div>
            </div>

            <div id={styles.middleOrbit}>
                <div className={styles.middleOrbitCirlces}><Image src="/planet.svg" width={15} height={15} alt="planet"/></div>
            </div>

            <div id={styles.outerOrbit}>
                <div className={styles.outerOrbitCirlces}></div>
            </div>
        </div>
    )
}