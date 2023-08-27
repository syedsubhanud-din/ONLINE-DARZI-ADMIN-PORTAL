import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import './dashboard.css';


function Dashboard() {

    const [sidebarClosed, setSidebarClosed] = useState(true);

    const handleArrowClick = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    };

    const handleSidebarToggle = () => {
        setSidebarClosed(!sidebarClosed);
    };

    useEffect(() => {
        const arrow = document.querySelectorAll(".arrow");
        arrow.forEach((el) => el.addEventListener("click", handleArrowClick));

        return () => {
            arrow.forEach((el) => el.removeEventListener("click", handleArrowClick));
        };
    }, []);

    return (
        <>

            <div className={`sidebar ${sidebarClosed ? "" : "close"}`}>
                <div className="logo-details">
                    <i className='bx bx-cut'></i>
                    <span className="logo_name">Online Darzi</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/Dashboard">
                            <i className='bx bx-home'></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/Dashboard">Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/Darzi-Request">
                            <i className='bx bx-compass'></i>
                            <span className="link_name">Darzi Request </span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/Darzi-Request">Darzi Request </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/User-Request">
                            <i className='bx bxs-credit-card' ></i>
                            <span className="link_name">User Request </span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/User-Request">User Request </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/All-Darzi">
                            <i className='bx bx-compass'></i>
                            <span className="link_name"> All Darzi </span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/All-Darzi"> All Darzi </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/All-Users">
                            <i className='bx bxs-credit-card' ></i>
                            <span className="link_name"> All User </span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/All-Users"> All User </a></li>
                        </ul>
                    </li>
                    {/* <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className="link_name">Setting</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Setting</a></li>
                        </ul>
                    </li> */}
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src="https://sachinsamal.netlify.app/static/media/sachin-samal.49dcbac0df474f805299.png" alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">John Doe</div>
                                <div className="job">Crypto Expert</div>
                            </div>
                            <a href="/">
                                <i className='bx bx-log-out'></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <section className="home-section">

                <div className="home-header">
                    <div className="home-header-inner-div">
                        <i className='bx bx-menu' onClick={handleSidebarToggle}></i>
                        <span className="text"> ADMIN DASHBOARD </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section" style={{ boxShadow: "0px 0px 0px 0px" }}>

                        <div className="main_over_all_states">
                            <div className="inner_over_all_states">
                                <i style={{ color: "rgb(215 67 76)" }} className="bx bx-git-pull-request">  </i>
                                <div className="inner_over_all_states_number"> 2688 </div>
                                <div className="inner_over_all_states_heading"> Request To Join Darzi </div>
                            </div>
                            <div className="inner_over_all_states">
                                <i style={{ color: "rgb(215 67 76)" }} className="bx bx-git-pull-request">  </i>
                                <div className="inner_over_all_states_number"> 896 </div>
                                <div className="inner_over_all_states_heading"> Request To Join User </div>
                            </div>
                            <div className="inner_over_all_states">
                                <i style={{ color: "#067481" }} className="bx bx-male">  </i>
                                <div className="inner_over_all_states_number"> 896 </div>
                                <div className="inner_over_all_states_heading"> Total Darzi </div>
                            </div>
                            <div className="inner_over_all_states">
                                <i style={{ color: "#067481" }} className="bx bx-male">  </i>
                                <div className="inner_over_all_states_number"> 896 </div>
                                <div className="inner_over_all_states_heading"> Total Users </div>
                            </div>
                        </div>

                        <div className="main_graph_div">
                            <h1> Graph Div </h1>
                        </div>



                    </div>
                </div>

            </section>

        </>
    );
}

export default Dashboard;
