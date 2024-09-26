import Image from 'next/image'

type propsType = {
  imagePath: string
}

const ProfilePicture = (props: propsType) => {
  return (
    <div className="profile-picture-container">
      <Image src={props.imagePath} alt="profile picture" width={85} height={85} className="profile-picture mt-8 mb-2 rounded-full border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]" />
    </div>
  )
}

export default ProfilePicture
