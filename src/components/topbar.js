import React from "react";
import './topbar.css'




export default function topbar() {
    return(
        
        <div className="topbar">
            <div className="topbarW">
                <div className="topleft">
                    <span className="logo">Lamarin</span>
                </div>
                    <div className="topright">
                        <div className="topbarIconcontainer">
                        T
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconcontainer">
                            G
                            <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconcontainer">
                            F
                            <span className="topIconBadge">2</span>
                        </div>
                    </div>
                
            </div>

        </div>
    )
}