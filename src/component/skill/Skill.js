import React from 'react'
import "./skill.css";


export const TopSkill = () => {
    return (
        <>
            <section className="sec1">SKILLS</section> 
            <div className="img2">
                <div className="skills">
                    <div className="skills-list">
                        <div className="html">
                        <i class="fab fa-html5" ></i> HTML

                        </div><hr/>

                        <div className="css">
                        <i class="fab fa-css3-alt" ></i> CSS

                        </div><hr/>
                        <div className="js">
                        <i class="fab fa-js-square" ></i>Javascript
                        </div><hr/>
                        <div className="react">
                        <i class="fab fa-react" ></i>React
                        </div><hr/>
                        <div class="node">
						<i class="fab fa-node-js" ></i> Node
					    </div><hr/>
					    <div class="ps">
						<i class="fas fa-cogs" ></i> Problem solving
					    </div><hr/>


                    </div>

                </div>

            </div>
         

        </>
        
            
        
    )
}


