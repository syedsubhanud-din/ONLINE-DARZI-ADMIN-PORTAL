import React, { useState, useEffect } from "react";
import './darzi_request.css';
import "boxicons/css/boxicons.min.css";


function Darzi_request() {

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
        create_all_darzi_request_cards();
    }, []);

    const create_all_darzi_request_cards = () => {


        for (let i = 0; i < 0; i++) {

            const show_all_darzi_request_cards = document.getElementById('show_all_darzi_request_cards');

            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');

            const left = document.createElement('div');
            left.classList.add('left');

            const left_inner_img = document.createElement('img');
            left_inner_img.src = "https://i.imgur.com/cMy8V5j.png";
            left_inner_img.width = '100';

            const left_inner_h4 = document.createElement('h4');
            left_inner_h4.innerText = "Alex William";

            const left_inner_p = document.createElement('p');
            left_inner_p.innerText = "UI Developer";

            const right = document.createElement('div');
            right.classList.add('right');

            const info = document.createElement('div');
            info.classList.add('info');

            const info_h3 = document.createElement('h3');
            info_h3.innerText = "Information";

            const info_data1 = document.createElement('div');
            info_data1.classList.add('info_data');

            const data1 = document.createElement('div');
            data1.classList.add('data');

            const data1_inner_h4 = document.createElement('h4');
            data1_inner_h4.innerText = "Username:";

            const data1_inner_p = document.createElement('p');
            data1_inner_p.innerText = "dummy text";

            const data2 = document.createElement('div');
            data2.classList.add('data');

            const data2_inner_h4 = document.createElement('h4');
            data2_inner_h4.innerText = "Email:";

            const data2_inner_p = document.createElement('p');
            data2_inner_p.innerText = "dummy text";

            const info_data2 = document.createElement('div');
            info_data2.classList.add('info_data');

            const data3 = document.createElement('div');
            data3.classList.add('data');

            const data3_inner_h4 = document.createElement('h4');
            data3_inner_h4.innerText = "Nic_number:";

            const data3_inner_p = document.createElement('p');
            data3_inner_p.innerText = "dummy text";

            const data4 = document.createElement('div');
            data4.classList.add('data');

            const data4_inner_h4 = document.createElement('h4');
            data4_inner_h4.innerText = "Phone:";

            const data4_inner_p = document.createElement('p');
            data4_inner_p.innerText = "dummy text";

            const info_data3 = document.createElement('div');
            info_data3.classList.add('info_data');

            const data5 = document.createElement('div');
            data5.classList.add('data');
            data5.style.width = "100%";

            const data5_inner_h4 = document.createElement('h4');
            data5_inner_h4.innerText = "Address:"; // Changed to "Additional Info:"

            const data5_inner_p = document.createElement('p');
            data5_inner_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis asperiores";

            const darzi_accept_and_reject_div = document.createElement('div');
            darzi_accept_and_reject_div.classList.add('darzi_accept_and_reject_div');

            const reject_button = document.createElement('button');
            reject_button.classList.add('reject_button');
            reject_button.innerText = "Reject";

            const accept_button = document.createElement('button');
            accept_button.classList.add('accept_button');
            accept_button.innerText = "Accept";

            wrapper.appendChild(left);
            left.appendChild(left_inner_img);
            left.appendChild(left_inner_h4);
            left.appendChild(left_inner_p);

            wrapper.appendChild(right);
            right.appendChild(info);
            info.appendChild(info_h3);

            info.appendChild(info_data1);
            info_data1.appendChild(data1);
            data1.appendChild(data1_inner_h4);
            data1.appendChild(data1_inner_p);

            info_data1.appendChild(data2);
            data2.appendChild(data2_inner_h4);
            data2.appendChild(data2_inner_p);

            info.appendChild(info_data2);
            info_data2.appendChild(data3);
            data3.appendChild(data3_inner_h4);
            data3.appendChild(data3_inner_p);

            info_data2.appendChild(data4);
            data4.appendChild(data4_inner_h4);
            data4.appendChild(data4_inner_p);

            info.appendChild(info_data3);
            info_data3.appendChild(data5);
            data5.appendChild(data5_inner_h4);
            data5.appendChild(data5_inner_p);

            right.appendChild(darzi_accept_and_reject_div);
            darzi_accept_and_reject_div.appendChild(reject_button);
            darzi_accept_and_reject_div.appendChild(accept_button);

            show_all_darzi_request_cards.appendChild(wrapper);

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
                        <span className="text"> DARZI REQUEST </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section" style={{ boxShadow: "0px 0px 0px 0px" }}>

                        <div className="all_users_card_holder" id="show_all_darzi_request_cards">

                            <div className="wrapper">
                                <div className="left">
                                    <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
                                    <h4>Alex William</h4>
                                    <p>UI Developer</p>
                                </div>
                                <div className="right">
                                    <div className="info">
                                        <h3>Information</h3>
                                        <div className="info_data">
                                            <div className="data">
                                                <h4>Username:</h4>
                                                <p>dummy text</p>
                                            </div>
                                            <div className="data">
                                                <h4>Email:</h4>
                                                <p>alex@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="info_data">
                                            <div className="data">
                                                <h4>Nic_number:</h4>
                                                <p>0001-213-998761</p>
                                            </div>
                                            <div className="data">
                                                <h4>Phone:</h4>
                                                <p>0001-213-998761</p>
                                            </div>
                                        </div>
                                        <div className="info_data">
                                            <div className="data" style={{ width: "100%" }}>
                                                <h4>Address:</h4>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis asperiores</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="darzi_accept_and_reject_div">
                                        <button className="reject_button">Reject</button>
                                        <button className="accept_button">Accept</button>
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

export default Darzi_request;