import "/sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import Links from "./links/Links"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links></Links>
      </div>
      <ToggleButton></ToggleButton>
    </div>
  )
}
