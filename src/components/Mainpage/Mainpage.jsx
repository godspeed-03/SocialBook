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
import user1 from '../../assets/user2.png'
import user from '../../assets/user.png'
import post1 from '../../assets/post.png'
import addstory from '../../assets/userstory.png'
import adduser from '../../assets/adduser.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import setting from '../../assets/setting.png'

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
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
            <div className="storyAdd">
              <img src={addstory} alt="addstorylogo" className="story-img"  />
              <p className="storyTxt">Story</p>
            </div>
          </section>
          <section className="userpost">
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="user">
                <div className="userdata">

                <img src={user} alt="profilepicture" className="postuserimg" />
                <div className="postdata">

                <h4 className="name">John Doe</h4>
                <p className="location">New York, USA</p>
                </div>
                </div>
                <div className="addfriend">
                <img src={adduser} alt="add-user" class="addfriend-img"></img>
                </div>
              </div>
              <div className="caption">
                <p>This is a sample post caption.</p>
              </div>
              <div className="postimg">
                <img src={post1} alt="postimage" className="postimage" />
              </div>
              <div className="response">
                <div className="likes">
                  <img src={like} alt="likeicon" className="like-img" />
                  <p className="likecount">25</p>
                </div>
                <div className="comments">
                  <img src={comment} alt="commenticon" className="comment-img" />
                  <p className="commentcount">12</p>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div class="userside">
        <div class="userprofiledata">
          <div class="user flex">
            <div class="userdata">

                <img src={user} alt="userlogo" class="user-img"/>

              <div class="postdata">

                  <p id="profilename" class=" username">User Name</p>
                <p class="friend">12 Friends</p>
              </div>
            </div>
            <div class="setting">
              <img src={setting} alt="setting" class="addfriend-img"/>
            </div>
          </div>
          <p class="userbio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos labore facere voluptatibus
            ratione obcaecati.</p>





        </div>

        <div class="connection">
          <h4 class="connection-title">Connections List</h4>
          <div class="userprofile">
            <img src={user1} alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src={user1} alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src={user1} alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
          <div class="userprofile">
            <img src={user1} alt="" class="user-img"/>
            <div>
              <p class="username">User Name</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="footer-content">
            <p>&copy; 2023 socialBook. All rights reserved.</p>
            <p>123 Main Street, City, State, ZIP</p>
            <p>Phone: (123) 456-7890 </p>
            <p>Email: info@yourcompany.com</p>
            <nav class="navigation">
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms of Service</a>
              <a href="sitemap.html">Sitemap</a>
            </nav>
          </div>
        </div>

      </div>


      </div>

    </div>
  );
};

export default Mainpage;
