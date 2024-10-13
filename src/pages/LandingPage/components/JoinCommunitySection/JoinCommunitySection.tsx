import CustomButton from '../../../../components/CustomButton/CustomButton'
import joinLines from '../../../../assets/landing/join-lines.svg'
import person1 from '../../../../assets/landing/person1.jpeg'
import person2 from '../../../../assets/landing/person5.jpeg'
import person3 from '../../../../assets/landing/person3.jpeg'
import person4 from '../../../../assets/landing/person4.jpeg'
import styles from './styles.module.css'


const JoinCommunitySection = () => {
    return <>
        <section className={styles.join__Wrap}>
            <section className={styles.join__Content}>
                <h3>Join The Rise Community</h3>
                
                <p className={styles.large}>
                    If you want to go far, go together. Our Telegram community<br/>surrounds you with others who can help you along your financial<br/>journey with tips, support, advice and learning. It's completely<br/>free and open to new and seasoned investors.
                </p>

                <p className={styles.mini}>
                    If you want to go far, go together. 
                </p>
                
                <CustomButton 
                    title='Join our Community'
                    backgroundColor='#A0DDE2'
                    borderRadius='5px'
                    fontSize='1.125rem'
                    padding='0.875rem 1.8rem'
                    width='max-content'
                    className={styles.join__Btn}
                />
            </section>
            
            <section className={styles.connect__Illus__Wrap}>
                <img 
                    src={joinLines}
                    alt='connect illus'
                    className={styles.lines}
                />

                <img 
                    src={person1}
                    alt='person'
                    className={`${styles.person} ${styles.one}`}
                />
                <img 
                    src={person2}
                    alt='person'
                    className={`${styles.person} ${styles.two}`}
                />
                <img 
                    src={person3}
                    alt='person'
                    className={`${styles.person} ${styles.three}`}
                />
                <img 
                    src={person4}
                    alt='person'
                    className={`${styles.person} ${styles.four}`}
                />
            </section>
        </section>
    </>
}

export default JoinCommunitySection