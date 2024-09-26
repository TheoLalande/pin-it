import ProfilePicture from '../components/settings/ProfilePicture'
import SettingElement from '../components/settings/SettingElement'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { RiSettings2Line } from 'react-icons/ri'
import { FaRegMap, FaRegLightbulb } from 'react-icons/fa'
type dataType = {
  icon: JSX.Element
  title: string
  description: string
}

const page = () => {
  const data: dataType[] = [
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
    {
      icon: <RiSettings2Line size={25} />,
      title: 'Préférences',
      description: "Paramètres de l'application",
    },
    {
      icon: <FaRegMap size={25} />,
      title: 'Carte',
      description: 'Paramètres de la carte',
    },
    {
      icon: <FaRegLightbulb size={25} />,
      title: 'Aide et suggestions',
      description: 'À propos de l’application',
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
