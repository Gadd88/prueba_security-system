'use client'
import { UserProfile } from '@/types'
import Image from 'next/image'
import styles from './profile.module.css'
import Link from 'next/link'
import { Interests } from './components/interests'
import { usePathname } from 'next/navigation'

export const ProfileCard = ({ data }: {data: UserProfile}) => {
  const { userProfile } = data
  const pathparam = usePathname()
  return (
    <section>
      <article className={styles.container}>
        <div className={styles.box}>
          <section className={styles.box_info}>
            <div className={styles.image}>
              <Image src={userProfile.profileImage} alt='user profile pic' width={150} height={150} className={styles.profilePic}/>
            </div>
            <h2 className={styles.box_info_name}>{userProfile.name}</h2>
            <p className={styles.box_info_about}>{userProfile.aboutMe}</p>
          </section>
          <Interests interests={userProfile.interests} />
        </div>
        {
          pathparam?.length > 1 &&
          <div className={styles.btns}>
            <Link href={'/contactme'} className={styles.button}>Contáctame</Link>
            <Link href={'/contactme'} className={styles.button}>Suscríbete a mi Newsletter</Link>
          </div>
        }
      </article>
    </section>
  )
}
