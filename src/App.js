import './App.css';
import React from 'react';

//import Main from './Componets/Main';

// <script>let MenuBtn = document.getElementById('MenuBtn')

// MenuBtn.addEventListener('click', function(e){
    
//     document.querySelector('body').classNameList.toggle('mobile-nav-active');
//     this.classNameList.toggle('fa-xmark')
// }
// ) 


// function toggleContent(contentId) {
    
//     var content = document.getElementById(contentId);
//     if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//     } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//     }
// }</script>

function App() {
  return(
  <div>
    <header>
        <div className="profile">
            <img src={require('./img/profile.jpg')} alt="Profile_Picture" width="150px"/>
            <h1> Vijitha <br/> Bandara </h1>

            <div className="socialIcons">

            <a href="https://www.linkedin.com/in/vijitha-bandara-2a450a237/">
                    <i className="fab fa-linkedin"></i>
                </a>
             
                <a href="https://github.com/VijithaBandara">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100073756287157">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://medium.com/@vijithahmbandara">
                    <i className="fab fa-medium"></i>
                </a>
            </div>
        </div>

        <nav>
            <ul>
                <li><a href="#home" className="active"><i className="fas fa-house"></i> Home</a></li>
                <li><a href="#about"><i className="fas fa-user"></i> About Me</a></li>
                <li><a href="#education"><i className="fas fa-briefcase"></i> Education</a></li>
                <li><a href="#projects"><i className="fas fa-file"></i> Projects</a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact Me</a></li>
            </ul>
        </nav>
    </header>
    

    <main>
        <section id="home">
            <div className="homeRow">
                <h1>Hi, I'm Vijitha Bandara<br/>Game Developer</h1>
            </div>
        </section>

        <section id="about">
            <h1 className="sub-head">About Me</h1>
            <div className="under-line"></div>
            <p className="para">I'm Vijitha Bandara, a passionate computer science student with a deep affinity for the art of coding. I find immense joy in unraveling intricate challenges and crafting sophisticated solutions using the enchantment of programming. Starting from the moment I typed my inaugural code, to the exhilarating experiences of collaborating on group endeavors, I've come to realize that software development truly fuels my creative spirit. Thank you for visiting, and I invite you to embark on a journey of discovery through my portfolio as we delve into exciting possibilities together!</p>

            
            <div className="info">
                <div className="icon-list">
                    <ul>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Name :</strong> <span>Vijitha Bandara</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Birthday :</strong> <span>11 June 1999</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Website :</strong> <span>24</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>City :</strong> <span>Kalagedihena, Srilanka</span></li>
                    </ul>
                </div>

                <div className="icon-list">
                    <ul>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Age :</strong> <span>24</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Degree :</strong> <span>Bsc(hons) in Software Engineering</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Phone :</strong> <span>+94 761 564 209</span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <strong>Email :</strong> <span>vijithahmbandara@gmail.com</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="education">
            <h1 className="sub-head">Education</h1>
            <div className="under-line"></div>
            <p className="para">Here are "Academic" and "Skills" states.</p>

            <div className="buttons">
                <button className="toggleBut1">Accademic</button>
                <div id="content1" className="content1">
                    <ul>
                        <li><i className="fa-solid fa fa-superpowers"></i> <span>Bsc(Hons) in Software Engineering <p>University Of Kelaniya <br/>2021 - Present <br/>Current GPA : 2.88</p></span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <span>G.C.E Advanced Level Examination <p>Physical Stream(2019) <br/>Bandaranayaka Central College, Veyangoda <br/>Z-Score : 1.247</p></span></li>
                        <li><i className="fa-solid fa fa-superpowers"></i> <span>G.C.E. Ordinary Level Examination (2015) <p>Results : 7A's and 2B's <br/>Bandaranayaka Central College, Veyangoda </p></span></li>

                    </ul>
                </div>

                <button className="toggleBut2" >Skills</button>
                <div id="content2" className="content2">
                    <ul>
                        <li><i className="fa-solid fa fa-superpowers"></i> HTML / CSS
                            <div className="level-bar">
                                <div className="level"   ></div>
                            </div>
                        </li>
                        <li><i className="fa-solid fa fa-superpowers"></i> JavaScript
                            <div className="level-bar">
                                <div className="level" ></div>
                            </div>
                        </li>
                        <li><i className="fa-solid fa fa-superpowers"></i> React Js
                            <div className="level-bar">
                                <div className="level" ></div>
                            </div>
                        </li>
                        <li><i className="fa-solid fa fa-superpowers"></i> MySQL / MongoDB

                            <div className="level-bar">
                                <div className="level" ></div>
                            </div>
                        </li>
                        <li><i className="fa-solid fa fa-superpowers"></i> Java
                            <div className="level-bar">
                                <div className="level" ></div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>

        <section id="projects">
            <h1 className="sub-head">Projects</h1>
            <div className="under-line"></div>
            <p className="para">Discover an array of displayed projects, spanning from web applications to software solutions, showcasing my dedication to pioneering ideas and maintaining high standards within the realm of software engineering.</p>

=            <div className="project-container">
                <div className="all-projects">
                    <div className="project-img">
                        <img src={require('./img/1.jpg')} alt="asas" />
                    </div>
                    <div className="project-info">
                        <a href="https://github.com/VijithaBandara/Computer_Accessories"><h4>Innova</h4></a>
                        <p>E-commerce Website <br/>Group Project</p>
                    </div>
                </div>
    
                <div className="all-projects">
                    <div className="project-img">
                        <img src={require('./img/3.jpg')} alt=""/>
                    </div>
                    <div className="project-info">
                        <a href="https://github.com/VijithaBandara/SENG_21212_Ecommerce_Web_Project"><h4>Computer Accessories</h4></a>
                        <p>E-commerce Website <br/>Group Project</p>
                    </div>
                </div>
    
                <div className="all-projects">
                    <div className="project-img">
                        <img src={require('./img/2.jpg')} alt="asa"/>
                    </div>
                    <div className="project-info">
                        <a href="https://github.com/VijithaBandara/Web-Page"><h4>Shopping</h4></a>
                        <p>E-commerce Website <br/>Individual Project</p>
                    </div>
                </div>
            </div>
            
        </section>

        <section id="contact">
            <h1 className="sub-head">Contact Me</h1>
            <div className="under-line"></div>
            <div className="contact-container">
                <div className="contact-info">
                    <i className="fa-solid fa-phone"></i><span>+94 761 564 209</span>
                </div>
                <div className="contact-info">
                    <i className="fa-solid fa-envelope"></i><a href="mailto:vijithahmbandara@gmail.com"><span>vijithahmbandara@gmail.com</span></a>
                </div>

                <div className="contact-info">
                    <i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/profile.php?id=100073756287157"><span>Vijitha-bandara/FaceBook</span></a>
                </div>

                <div className="contact-info">
                    <i className="fa-brands fa-github"></i><a href="https://github.com/VijithaBandara"><span>Vijitha-bandara/GitHub</span></a>
                </div>
                
                <div className="contact-info">
                    <i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/vijitha-bandara-2a450a237/"><span>Vijitha-bandara/LinkedIn</span></a>
                </div>
            </div>
            
        </section>

        <section id="footer">
            <footer>
                <p>&copy; 2023 Vijitha Bandara. All rights reserved.</p>
            </footer>
        </section>


    </main>
    
  </div>
  )
}

export default App;
