import React from 'react'
import './style3.css';
import user from '../../assets/user.png';
import adduser from '../../assets/adduser.png'
import post from '../../assets/post.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'


function Post() {
    return (
        <>
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
                    <img src={post} alt="postimage" className="postimage" />
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
        </>
    )
}

export default Post