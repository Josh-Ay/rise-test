import { IoLogoApple } from 'react-icons/io'
import styles from './styles.module.css'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import CustomButton from '../../../../components/CustomButton/CustomButton'
import phone from '../../../../assets/landing/hero.svg'


const DownloadAppSection = () => {
    return <>
        <section className={styles.download__App__Section}>
            <section className={styles.download__Content}>
                <p className={styles.title}>Download the rise app</p>

                <h3 className={styles.content}>
                    Join our 100,000 users investing<br />and setting long term goals!
                </h3>

                <p className={styles.subtitle}>Dollar investments that help you grow.</p>

                
                <section className={styles.app__Action__Wrap}>
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
                src={phone}
                alt='phone'
                className={styles.phone__Img}
            />

        </section>
    </>
}

export default DownloadAppSection