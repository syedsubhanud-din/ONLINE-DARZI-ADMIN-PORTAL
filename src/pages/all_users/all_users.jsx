import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import './all_users.css';

function All_users() {
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



    useEffect(() => {
        create_all_user_cards();
    }, []);



    const create_all_user_cards = () => {

        for (let i = 0; i < 0; i++) {

            const show_all_users_cards = document.getElementById('show_all_users_cards')

            const all_user_card_main_div = document.createElement('div')
            all_user_card_main_div.classList.add("all_user_card_main_div")

            const all_user_card_inner_div1 = document.createElement('div')
            all_user_card_inner_div1.classList.add("all_user_card_inner_div1")

            const all_user_card_inner_div1_body = document.createElement('div')
            all_user_card_inner_div1_body.classList.add("all_user_card_inner_div1_body")

            const all_user_count = document.createElement('div')
            all_user_count.classList.add("all_user_count")
            all_user_count.innerText = "1"

            const all_user_card_inner_div2 = document.createElement('div')
            all_user_card_inner_div2.classList.add("all_user_card_inner_div2")

            const all_user_card_inner_div2_inner_div1 = document.createElement('div')
            all_user_card_inner_div2_inner_div1.classList.add("all_user_card_inner_div2_inner_div")

            const all_user_card_inner_div2_body1 = document.createElement('div')
            all_user_card_inner_div2_body1.classList.add("all_user_card_inner_div2_body")

            const heading1 = document.createElement('div')
            heading1.classList.add("heading")
            heading1.innerText = "UserName:"

            const para1 = document.createElement('p')
            para1.classList.add("para")

            const all_user_card_inner_div2_body2 = document.createElement('div')
            all_user_card_inner_div2_body2.classList.add("all_user_card_inner_div2_body")

            const heading2 = document.createElement('div')
            heading2.classList.add("heading")
            heading2.innerText = "Email:"

            const para2 = document.createElement('p')
            para2.classList.add("para")

            const all_user_card_inner_div2_inner_div2 = document.createElement('div')
            all_user_card_inner_div2_inner_div2.classList.add("all_user_card_inner_div2_inner_div")

            const all_user_card_inner_div2_body3 = document.createElement('div')
            all_user_card_inner_div2_body3.classList.add("all_user_card_inner_div2_body")

            const heading3 = document.createElement('div')
            heading3.classList.add("heading")
            heading3.innerText = "Phone No#:"

            const para3 = document.createElement('p')
            para3.classList.add("para")

            const all_user_card_inner_div2_body4 = document.createElement('div')
            all_user_card_inner_div2_body4.classList.add("all_user_card_inner_div2_body")

            const heading4 = document.createElement('div')
            heading4.classList.add("heading")
            heading4.innerText = "Cnic No#:"

            const para4 = document.createElement('p')
            para4.classList.add("para")

            const all_user_card_inner_div2_inner_div3 = document.createElement('div')
            all_user_card_inner_div2_inner_div3.classList.add("all_user_card_inner_div2_inner_div")

            const all_user_card_inner_div2_body5 = document.createElement('div')
            all_user_card_inner_div2_body5.classList.add("all_user_card_inner_div2_body")
            all_user_card_inner_div2_body5.style.width = "100%"

            const heading5 = document.createElement('div')
            heading5.classList.add("heading")
            heading5.innerText = "Address:"

            const para5 = document.createElement('p')
            para5.classList.add("para")



            all_user_card_main_div.appendChild(all_user_card_inner_div1)
            all_user_card_inner_div1.appendChild(all_user_card_inner_div1_body)
            all_user_card_inner_div1_body.appendChild(all_user_count)

            all_user_card_main_div.appendChild(all_user_card_inner_div2)
            all_user_card_inner_div2.appendChild(all_user_card_inner_div2_inner_div1)
            all_user_card_inner_div2_inner_div1.appendChild(all_user_card_inner_div2_body1)
            all_user_card_inner_div2_body1.appendChild(heading1)
            all_user_card_inner_div2_body1.appendChild(para1)
            all_user_card_inner_div2_inner_div1.appendChild(all_user_card_inner_div2_body2)
            all_user_card_inner_div2_body2.appendChild(heading2)
            all_user_card_inner_div2_body2.appendChild(para2)
            all_user_card_inner_div2.appendChild(all_user_card_inner_div2_inner_div2)
            all_user_card_inner_div2_inner_div2.appendChild(all_user_card_inner_div2_body3)
            all_user_card_inner_div2_body3.appendChild(heading3)
            all_user_card_inner_div2_body3.appendChild(para3)
            all_user_card_inner_div2_inner_div2.appendChild(all_user_card_inner_div2_body4)
            all_user_card_inner_div2_body4.appendChild(heading4)
            all_user_card_inner_div2_body4.appendChild(para4)
            all_user_card_inner_div2.appendChild(all_user_card_inner_div2_inner_div3)
            all_user_card_inner_div2_inner_div3.appendChild(all_user_card_inner_div2_body5)
            all_user_card_inner_div2_body5.appendChild(heading5)
            all_user_card_inner_div2_body5.appendChild(para5)

            all_user_card_inner_div2.appendChild(all_user_card_inner_div2_inner_div3)
            all_user_card_inner_div2.appendChild(all_user_card_inner_div2_inner_div3)

            show_all_users_cards.appendChild(all_user_card_main_div)

        }

    }




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
                        <span className="text"> ALL USERS </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section" style={{ boxShadow: "0px 0px 0px 0px" }}>
                        <div className="main_all_users_card_div" id="show_all_users_cards">

                            <div className="all_user_card_main_div">

                                <div className="all_user_card_inner_div1">
                                    <div className="all_user_card_inner_div1_body">
                                        <div className="all_user_count">1</div>
                                    </div>
                                </div>

                                <div className="all_user_card_inner_div2">
                                    <div className="all_user_card_inner_div2_inner_div">
                                        <div className="all_user_card_inner_div2_body">
                                            <div className="heading"> UserName: </div>
                                            <p className="para">Lorem ipsum dolor sit,</p>
                                        </div>
                                        <div className="all_user_card_inner_div2_body">
                                            <div className="heading"> Email: </div>
                                            <p className="para">Lorem ipsum dolor sit,</p>
                                        </div>
                                    </div>
                                    <div className="all_user_card_inner_div2_inner_div">
                                        <div className="all_user_card_inner_div2_body">
                                            <div className="heading"> Phone No#: </div>
                                            <p className="para">Lorem ipsum dolor sit,</p>
                                        </div>
                                        <div className="all_user_card_inner_div2_body">
                                            <div className="heading"> Cnic No#: </div>
                                            <p className="para">Lorem ipsum dolor sit,</p>
                                        </div>
                                    </div>
                                    <div className="all_user_card_inner_div2_inner_div">
                                        <div className="all_user_card_inner_div2_body" style={{ width: "100%" }}>
                                            <div className="heading"> Address: </div>
                                            <p className="para">Lorem ipsum dolor sit, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae quis nam deserunt, blanditiis corrupti ratione, minima magni dolor similique incidunt quod recusandae temporibus. Consequatur dolore debitis est eaque commodi!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default All_users;