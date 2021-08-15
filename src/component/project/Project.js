import React from 'react'
import "./project.css";
import task from '../../img/task.png';
import cal from '../../img/cal.png';
import profile from '../../img/profile.PNG';



export const TopProject= () => {
    return (
        <>
        <section className="sec1">PROJECT</section> 
        <div className="img3">
            <section id="projects" className="projects">
                <div className="projects-list-container">
                <div className="pro-task-list">
                    <div className="pro-img">
                        <img src={task} alt="task" />
                    </div>
                    <div className="info">
                        <div className="info-title">Not To Do List</div>
                        <div className="tech">Tech: html, css, javascript</div>
                        <div className="links">
                            <a href=""><i class="fab fa-github-square"></i></a>
                            <a href=""><i class="fab fa-chrome"></i></a>
                        </div>
                        <p>
                            <strong> About:</strong> project description
                        </p>
                    </div>
                </div>
                <div className="pro-task-list">
                    <div className="info">
                        <div className="info-title">My Portfolio</div>
                        <div className="tech">Tech: html, css, javascript</div>
                        <div className="links">
                            <a href=""><i class="fab fa-github-square"></i></a>
                            <a href="">
                                <i class="fab fa-chrome"></i>
                            </a>
                        </div>
                        <p>
                            <strong> About:</strong> project description
                        </p>
                    </div>
                    <div className="pro-img">
                        <img src={profile} alt="protfolio" />
                    </div>
                </div>
                <div className="pro-task-list">
                    <div className="pro-img">
                        <img src={cal} alt="calculator" />
                    </div>

                    <div className="info">
                        <div className="info-title">Prank calculator</div>
                        <div className="tech">Tech: html, css, javascript</div>
                        <div className="links">
                            <a href=""><i class="fab fa-github-square"></i></a>
                            <a href="">
                                <i class="fab fa-chrome"></i>
                            </a>
                        </div>
                        <p>
                            <strong> About:</strong>project description
                            </p>
                    </div>
                </div>
                

                </div>

            </section>

        </div>
        </>
    )
}


