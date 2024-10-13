import styles from './styles.module.css'
import heroImg from '../../../../assets/landing/hero.svg'
import CustomButton from '../../../../components/CustomButton/CustomButton'
import { IoLogoApple } from 'react-icons/io'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import Bubble from '../Bubble/Bubble'

const HeroSection = () => {
    return <>
        <section className={styles.hero__Section__Wrap}>
            <section className={styles.hero__Content}>
                <h1>
                    Dollar investments<br />that help you grow
                </h1>

                <p className={styles.large}>We put your money in high quality assets that help<br />you build wealth and achieve your financial goals.</p>
                <p className={styles.mini}> Your personal wealth manager. Get<br/>started with a minimum of $10 and</p>
                
                <section className={styles.hero__Action__Wrap}>
                    <CustomButton 
                        icon={IoLogoApple}
                        title='Download on the'
                        subtitle='App Store'
                        backgroundColor='#2D2D2D'
                        color='#fff'
                        iconSize='2rem'
                        borderRadius='10px'
                        padding='0.875rem 1rem'
                        subtitleFontWeight='600'
                        fontSize='0.8125rem'
                        titleClassName={styles.btn__Title}
                        className={styles.action__Btn}
                    />

                    <CustomButton 
                        icon={IoLogoGooglePlaystore}
                        title='Download on the'
                        subtitle='Google Play'
                        backgroundColor='#2D2D2D'
                        color='#fff'
                        iconSize='2rem'
                        borderRadius='10px'
                        padding='0.875rem 1rem'
                        subtitleFontWeight='600'
                        fontSize='0.8125rem'
                        titleClassName={styles.btn__Title}
                        className={styles.action__Btn}
                    />
                </section>
            </section>

            <img 
                src={heroImg}
                alt='pic showcasing risevest app'
                className={styles.hero__Img}
            />

            <Bubble 
                size='2.5rem'
                top='10%'
                left='12%'
            />

            <Bubble 
                size='4rem'
                top='3%'
                left='51%'
            />
            
            <Bubble 
                size='4rem'
                bottom='10%'
                left='19%'
            />

            <Bubble
                size='2.5rem'
                bottom='10%'
                right='36%'
            />
            
            <Bubble 
                size='4rem'
                bottom='10%'
                right='7%'
            />
        </section>    
    </>
}

export default HeroSection