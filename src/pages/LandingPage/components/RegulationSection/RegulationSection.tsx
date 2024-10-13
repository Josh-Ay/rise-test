import Bubble from '../Bubble/Bubble';
import styles from './styles.module.css'

const RegulationSection = () => {
    return <>
        <section className={styles.main__Wrap}>
            <div className={styles.content__Mask}></div>
            <h3>How we are Regulated</h3>

            <p className={styles.large}>
                Rise is registered and regulated both in the US and in Nigeria. Our<br />team is made up of US registered investment advisers, our<br />Nigerian users are covered by our SEC licensed trustees, ARM<br />Trustees and all our assets are held with regulated third parties, in<br />all relevant jurisdictions
            </p>

            <p className={styles.mini}>
                Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions
            </p>

            <div className={`${styles.bubble__Mask} ${styles.one}`}></div>
            <div className={`${styles.bubble__Mask} ${styles.two}`}></div>

            <Bubble 
                backgroundColor='rgba(255, 244, 240, 1)'
                size='17.25rem'
                left='-3rem'
                top='-3rem'
            />

            <Bubble 
                backgroundColor='#F6E4F0'
                size='20.3125rem'
                top='10rem'
                left='-6.4rem'
            />

            <Bubble 
                backgroundColor='#F6F2FF'
                size='14.3125rem'
                right='-6.4rem'
                top='-3rem'
            />

            <Bubble 
                backgroundColor='#ECFEFE'
                size='16.875rem'
                bottom='-4rem'
                right='-3rem'
            />
        </section>
    </>
}

export default RegulationSection;