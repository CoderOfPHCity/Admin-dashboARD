import './widgetS.css'

export default function widgetSL() {
  return (
    <div className='widgetsm'>
        <span className="widgetsmT">New Members</span>
        <ul className="widgetsmL">
            <li className="widgetsmLI">
            <img src="www.nairaland.com" alt="photoo" className="widgetsimg" />img
           <div className="widgetuser">
            <span className="widgetsmuserN">Daniel agantem</span>
            <span className="widgetsmuserT">Sidehustle </span>
            </div>
            <button className="widgetsmBtn">
                Display

            </button>
            </li>
            <li className="widgetsmLI">
            <img src="www.nairaland.com" alt="photoo" className="widgetsimg" />img
           <div className="widgetuser">
            <span className="widgetsmuserN">Michael agantem</span>
            <span className="widgetsmuserT">Devops</span>
            </div>
            <button className="widgetsmBtn">
                Display

            </button>
            </li>
            <li className="widgetsmLI">
            <img src="www.nairaland.com" alt="photoo" className="widgetsimg" />img
           <div className="widgetuser">
            <span className="widgetsmuserN">Daniel agantem</span>
            <span className="widgetsmuserT">Software Dev</span>
            </div>
            <button className="widgetsmBtn">
                Display

            </button>
            </li> 
        </ul>
      
    </div>
  )
}
