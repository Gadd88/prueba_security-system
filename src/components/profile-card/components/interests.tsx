import React from 'react'
import styles from '../profile.module.css'
import { UserProfileClass } from '@/types'
export const Interests = ({ interests }: {interests: UserProfileClass['interests']}) => {
  return (
    <section className={styles.box_interest}>
        <h3 className={styles.box_interest_title}>Intereses</h3>
        <ul className={styles.box_interest_list}>
            {
                interests.map(interest => (
                    <li key={interest} className={styles.box_interest_item}>
                        {interest}
                    </li>
                ))
            }
        </ul>
    </section>
  )
}
