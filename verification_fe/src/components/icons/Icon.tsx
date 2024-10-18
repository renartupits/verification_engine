import { MenuIcon } from '../../assets/icons/MenuIcon.tsx'
import { RestartIcon } from '../../assets/icons/RestartIcon.tsx'

interface IconProps {
  icon: 'restart' | 'menu';
  onClick?: () => void;
}

export const Icon = ({icon, onClick}: IconProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'menu':
        return <MenuIcon />
      case 'restart':
        return <RestartIcon />
    }
  }

  return (
    <div className="border p-1 rounded-lg cursor-pointer hover:bg-content-hover" onClick={onClick}>
      {renderIcon()}
    </div>
  )
}
