import { ApiUser, UserProfile } from '@/types'
import Image from 'next/image'
import React from 'react'
import styles from './profile.module.css'
import Link from 'next/link'

export const ProfileCard = ({ data }: {data: UserProfile}) => {
  const { userProfile } = data
  return (
    <section>
      {/* <figure>
            <Image src={userProfile.profileImage} alt='user profile pic' width={150} height={150} />
      </figure>
      <p>{userProfile.aboutMe}</p>
      <ul>
          <li>{userProfile.name}</li>
          <li>{userProfile.contact.email}</li>
          <li>{userProfile.contact.phone}</li>
          <li>{userProfile.contact.github}</li>
          <li>{userProfile.contact.linkedin}</li>
      </ul> */}
      <article className={styles.container}>
        <div className={styles.box}>
          <section className={styles.box_info}>
            <div className={styles.image}>
              <Image src={userProfile.profileImage} alt='user profile pic' width={150} height={150} className={styles.profilePic}/>
            </div>
            <h2 className={styles.box_info_name}>{userProfile.name}</h2>
            <p className={styles.box_info_about}>{userProfile.aboutMe}</p>
          </section>
          <section className={styles.box_interest}>
            <h3 className={styles.box_interest_title}>Intereses</h3>
            <ul className={styles.box_interest_list}>
              {
                userProfile.interests.map(interest => (
                <li key={interest} className={styles.box_interest_item}>
                  {interest}
                </li>
              ))
              }
            </ul>
          </section>
        </div>
          <div className={styles.btns}>
            <Link href={'/contactme'} className={styles.button}>Contáctame</Link>
            <Link href={'/contactme'} className={styles.button}>Suscríbete a mi Newsletter</Link>
          </div>
      </article>
    </section>
  )
}
