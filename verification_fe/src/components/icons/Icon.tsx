import MenuIcon from '../../assets/icons/MenuIcon.tsx';
import RestartIcon from '../../assets/icons/RestartIcon.tsx';

interface IconProps {
  icon: 'restart' | 'menu';
  onClick?: () => void;
}

function Icon({ icon, onClick }: IconProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'menu':
        return <MenuIcon />;
      case 'restart':
        return <RestartIcon />;
      default:
        throw Error('Invalid icon');
    }
  };

  return (
    <div role="presentation" className="border p-1 rounded-lg cursor-pointer hover:bg-content-hover" onClick={onClick}>
      {renderIcon()}
    </div>
  );
}

export default Icon;
