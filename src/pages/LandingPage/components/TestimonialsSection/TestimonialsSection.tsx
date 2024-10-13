import React from 'react';
import styles from './styles.module.css'
import { miniTestimonials, testimonials } from './utils';

const TestimonialsSection = () => {
    return <>
        <section className={styles.testimonials__Wrap}>
            <h3 className={styles.large}>From the people who use rise</h3>
            <h3 className={styles.mini}>What our customers are saying</h3>

            <p className={`${styles.testimonial__Subtitle} ${styles.large}`}>
                Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.
            </p>

            <p className={`${styles.testimonial__Subtitle} ${styles.mini}`}>
                We serve over 80,000 amazing users.
            </p>

            <section className={styles.all__Testimonials}>
                {
                    React.Children.toArray(testimonials.map((testimonial, index) => {
                        return <section 
                            className={`${styles.testimonial__Detail} 
                            ${
                                index === 0 ? styles.left :
                                index === 1 ? styles.inline : 
                                index === 2 ? styles.right :
                                ''
                            }
                            ${styles.large}
                            `}
                        >
                            <p>{testimonial.testimonial}</p>

                            <section className={styles.user__Wrap}>
                                <img 
                                    src={testimonial.pic}
                                    alt='person'
                                    className={styles.user__Pic}
                                />
                                <p>{testimonial.user}</p>
                            </section>
                        </section>
                    }))
                }

                {
                    React.Children.toArray(miniTestimonials.map((testimonial) => {
                        return <section 
                            className={`${styles.testimonial__Detail}
                            ${styles.inline}
                            ${styles.mini}
                            `}
                        >
                            <p>{testimonial.testimonial}</p>

                            <section className={styles.user__Wrap}>
                                <img 
                                    src={testimonial.pic}
                                    alt='person'
                                    className={styles.user__Pic}
                                />

                                <p>{testimonial.user}</p>
                                <p>{testimonial.userPosition}</p>
                            </section>
                        </section>
                    }))
                }
            </section>
        </section>
    </>
}

export default TestimonialsSection;