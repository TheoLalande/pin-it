import ProfilePicture from '../components/settings/ProfilePicture'
import SettingElement from '../components/settings/SettingElement'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'

const page = () => {
  const data = [
    {
      icon: <FaRegUser size={25} strokeWidth={1} />,
      title: 'Profil',
      description: 'Paramètres de compte',
    },
    {
      icon: <FaRegHeart size={25} strokeWidth={1} />,
      title: 'Favoris',
      description: 'Cartes, points, personnes',
    },
  ]

  return (
    <div className="w-screen h-screen bg-[#fafafa]">
      <div className="w-full  flex items-center justify-center flex-col ">
        <ProfilePicture imagePath="/assets/profilePicture.jpeg" />

        {data.map(d => (
          <SettingElement key={d.title} title={d.title} description={d.description} icon={d.icon} />
        ))}
      </div>
    </div>
  )
}

export default page
