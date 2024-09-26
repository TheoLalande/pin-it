import Image from 'next/image'

type propsType = {
  imagePath: string
}

const ProfilePicture = (props: propsType) => {
  return <Image src={props.imagePath} alt="profile picture" width={75} height={75} className="rounded-full border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]" />
}

export default ProfilePicture
