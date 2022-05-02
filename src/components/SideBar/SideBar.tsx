import { Details } from '../Details/Details'
import './SideBar.scss'

export const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="SideBar__content-container">
        {<Details />}
      </div>
    </div>
  )
}
