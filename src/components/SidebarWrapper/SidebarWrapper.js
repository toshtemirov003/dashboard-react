import './sidebarWrapper.css'

export const SidebarWrapper = ({children}) => {
  return (
    <ul className='sidebar__list'>
      {children}
    </ul>
  )
}
