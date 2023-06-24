import React from 'react';
import './style3.css';
import sitelogo from '../../assets/sitelogo.png'
import sitelogo2 from '../../assets/sitelogo2.png'
import search from '../../assets/search.png'
import sun from '../../assets/sun.png'
import home from '../../assets/home.png'
import message from '../../assets/message.png'
import notify from '../../assets/notify.png'
import about from '../../assets/about.png'

const Mainpage = () => {
//   const users = JSON.parse(localStorage.getItem('users'));
//   const login = JSON.parse(sessionStorage.getItem('logger'));

//   const user = users.find(user => user.username === login[0]?.username);

//   if (user) {
//     document.getElementById("profilename").innerHTML = user.name;
//   }

//   const handleSelection = value => {
//     // Handle selection change
//   };

//   const changeTheme = () => {
//     // Change theme
//   };

//   const openStoryPopup = () => {
//     // Open story popup
//   };

  return (
    <div>
      <header>
        <div className="right">
          <a href="#">
            <img src={sitelogo} alt="site_logo" className="logo" />
          </a>
          <input type="text" placeholder="Search ....." className="search-input" />
          {/* <img src={search} alt="search-logo" className="search-logo" /> */}
        </div>
        <div className="left">
          <ul className="social-icons">
            <li><img src={sun} alt="themelogo" className="themelogo"  /></li>
            <li><img src={message} alt="messagelogo" /></li>
            <li><img src={notify} alt="notificationlogo" /></li>
            <li><img src={about} alt="aboutlogo" /></li>
          </ul>
          <select id="dropdownMenu" className="account" >
            <option id="nameOfUser" value="nameOfUser option1">User Account</option>
            <option id="logout" value="option2">Logout</option>
          </select>
        </div>
      </header>
      <div className="ui flex">
        <div id="logoside" className="sidebar">
          <div className="site-logo">
            <img src={sitelogo2} alt="site_logo" className="logo-img" />
          </div>
          <ul>
            <li className="home flex">
              <img src={home} alt="homelogo" className="icon" />
              <h4 className="shortcut_title">Home</h4>
            </li>
            <li className="search flex">
              <img src={search} alt="searchlogo" className="icon" />
              <h4 className="shortcut_title">Search</h4>
            </li>
            <li className="msg flex">
              <img src={message} alt="messagelogo" className="icon" />
              <h4 className="shortcut_title">Message</h4>
            </li>
            <li className="notify flex">
              <img src={notify} alt="notificationlogo" className="icon" />
              <h4 className="shortcut_title">Notification</h4>
            </li>
            <li className="about flex">
              <img src={about} alt="aboutlogo" className="icon" />
              <h4 className="shortcut_title">About</h4>
            </li>
          </ul>
        </div>
        <div className="mainBody">
          <section className="story">
            <div className="storyAdd">
              <img src="./assets/addstory.png" alt="addstorylogo" className="storyImg"  />
              <p className="storyTxt">Add Story</p>
            </div>
          </section>
          <section className="userpost">
            <div className="posts">
              <div className="userinfo">
                <img src="./assets/user1.jpg" alt="profilepicture" className="postuserimg" />
                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src="./assets/post1.jpg" alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src="./assets/like.png" alt="likeicon" className="likeicon" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src="./assets/comment.png" alt="commenticon" className="commenticon" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="userside">
        <div className="profile">
          <img  alt="profilepicture" className="profile-picture" />
          <h4 id="profilename" className="profile-name">Name</h4>
          <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="connection">
          <h4 class="connection-title">Connections List</h4>
          <div class="userprofile">
            <img src="./assets/user2.png" alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src="./assets/user2.png" alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src="./assets/user2.png" alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src="./assets/user2.png" alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
