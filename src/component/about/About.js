import React from 'react'
import './about.css'
import user from '../../img/user.jpg'

export const TopAbout=()=>{

    return (
       <>
       <section className="sec1">ABOUT</section> 
    <div className="img4">
        <section id="about">
            <div className="container">
                    <div className="pro-task-list1">
                    <div className="pro-img1">
                        <img src={user} alt="" />
                    </div>
    
                    <div class="info1">
                        "I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and achieve greatness."                   </div>
                </div>
            </div>
        </section>
    
     </div>
       </>

    )
}

