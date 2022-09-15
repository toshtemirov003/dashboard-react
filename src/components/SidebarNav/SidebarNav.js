import { Link } from 'react-router-dom'
import './sidebarNav.css'

export const SidebarNav = ({ title, icons, active, setActive, status, path = "/" }) => {

  const handleClickNav = () => {
    setActive(status)
  }

  return (
    <li onClick={handleClickNav}>
      <Link to={path} className={active === status ? "sidebar-nav active" : "sidebar-nav"} >
        {icons}
        <h4 className='sidebar__nav-title'>{title}</h4>
      </Link>
    </li>
  )
}
