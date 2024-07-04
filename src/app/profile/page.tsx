import { ProfileCard } from '@/components'
import { ApiUser } from '@/types'
import React from 'react'
import userData from '@/userData.json'

const getProfile = async (): Promise<ApiUser> => {
    const response = await fetch('https://randomuser.me/api/?nat=mx')
    const result = await response.json()
    return result.results[0]
}
export default async function Profile({...props}) {

    const data = await getProfile()

  return (
    <main>
        <h1>Mi Perfil</h1>
        <ProfileCard data={userData} />
    </main>
  )
}
