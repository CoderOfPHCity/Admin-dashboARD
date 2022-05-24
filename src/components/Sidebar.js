import './Sidebar.css'

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <div className='sidebarW'>
                <div className='sidebarM'>
                    <h3 className='sidebarT'>Dashboard</h3>
                    <ul className='sidebarL'>
                        <li className='sidebarlistI active'>
                            Home

                        </li>
                        <li className='sidebarlistI'>
                            Analytics

                        </li>
                        <li className='sidebarlistI'>
                            Graphs

                        </li>

                    </ul>
                    
                </div>
                <div className='sidebarM'>
                    <h3 className='sidebarT'>Team Members</h3>
                    <ul className='sidebarL'>
                        <li className='sidebarlistI'>
                            Users

                        </li>
                        <li className='sidebarlistI'>
                            Products

                        </li>
                        <li className='sidebarlistI'>
                            Reports

                        </li>

                    </ul>
                    
                </div>
                <div className='sidebarM'>
                    <h3 className='sidebarT'>Notifications</h3>
                    <ul className='sidebarL'>
                        <li className='sidebarlistI'>
                            Mail

                        </li>
                        <li className='sidebarlistI'>
                            Feedback

                        </li>
                        <li className='sidebarlistI'>
                            Messages

                        </li>

                    </ul>
                    
                </div>
            </div>
        </div>
    )
}