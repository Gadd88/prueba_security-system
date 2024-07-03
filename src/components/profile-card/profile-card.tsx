import { ApiUser } from '@/types'
import Image from 'next/image'
import React from 'react'

export const ProfileCard = ({ data }: {data: ApiUser}) => {
  console.log(data.picture.large)
  return (
    <div>
      <figure>
            <Image src={data.picture.large} alt='user profile pic' width={150} height={150} />
        </figure>
        <ul>
            <li>{data.name.first} {data.name.last}</li>
            <li>{data.email}</li>
            <li>{data.location.country}</li>
            <li>{data.phone}</li>
        </ul>
    </div>
  )
}
