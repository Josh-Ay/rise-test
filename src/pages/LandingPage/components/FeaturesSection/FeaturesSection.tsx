import CustomButton from '../../../../components/CustomButton/CustomButton'
import { IoIosArrowRoundForward } from 'react-icons/io'
import styles from './styles.module.css'
import React from 'react'
import { featuresList, smallFeaturesList } from './utils'


const FeaturesSection = () => {
    return <>
        <section className={styles.features__Wrap}>
            {
                React.Children.toArray(featuresList.map(feature => {
                    return <section className={`${styles.features__Section} ${styles.large}`}>
                        {
                            feature.imageIsLeading === true &&
                            <img 
                                src={feature.image}
                                alt='feature illustration'
                            />
                        }

                        <section className={`${styles.feature__Content}`}>
                            <section className={styles.feature__detail}>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </section>
        
                            <CustomButton 
                                title='Start Investing Now'
                                icon={IoIosArrowRoundForward}
                                isLeadingIcon={false}
                                fontSize='1.125rem'
                                color='#07969E'
                            />
                        </section>
        
                        {
                            feature.imageIsLeading !== true &&
                            <img 
                                src={feature.image}
                                alt='feature illustration'
                            />
                        }
                    </section>
                }))
            }

            
            {
                React.Children.toArray(smallFeaturesList.map(feature => {
                    return <section className={`${styles.features__Section} ${styles.mini}`}>
                        <img 
                            src={feature.image}
                            alt='feature illustration'
                            className={styles.feature__img}
                        />

                        <section className={`${styles.feature__Content}`}>
                            <section className={styles.feature__detail}>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </section>
                        </section>
                    </section>
                }))
            }
        </section>
    </>
}

export default FeaturesSection