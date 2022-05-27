import React from "react";
import { createUseStyles } from 'react-jss';
import webdev from './assets/Web Developer_Isometric.png';
import {Routes, Route, Link} from 'react-router-dom';
import Skillsbar from './process/SetSkills';

import bengkel from './assets/bengkel.png';
import pelaporan from './assets/web_pelaporan.png';
import store from './assets/web_store.png';
import cms from './assets/cms.png';
import football from './assets/football.png';
import search from './assets/search_data.png';

import Home from '../src/component/Home';
import Add from '../src/component/Add';

function App() {
  const classes = useStyles();
  return (
    
    <div>
       <div className={classes.Navigation}>   
          <nav>   
              <div  className={classes.styleNav}>
                  <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#project">Project</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </div>
          </nav>
        </div>

        <div className={classes.Profile}>       
            <div className={classes.styleTextProfile}>
              <div className={classes.setTextProfile}>
                <p>Hello,</p>
                <p>i'm Joy Ravelo,</p>
                <p>Front-end Developer</p>
                <br></br>
                
                <a href="#about"><button>Show</button></a>
              </div>
             
            </div>
            <div className={classes.webImage}>
              <img src={webdev} alt="logo" />
            </div> 
        </div>

      <div className={classes.Background}>
        <div className={classes.Skills}>	 
          <div className={classes.styleText} id="about">
            <p className={classes.styleTitle} >About Me</p>
              <p className={classes.setText}>  
              My name is Joy Ravelo Tarigan. I am currently studying at 
              the Institute of Technology Sumatera. I have expertise in 
              designing web pages or applications. These skills are also 
              often referred to as Front-end Developer. Apart from being 
              a Front-end Developer, I also master UI/UX Design and also 
              Computer Networking.
              </p>
          </div>

          <div className={classes.styleSkills}>
            <div className={classes.setSkills}>
              <p className={classes.setTitle}>Skills</p>
                
              <p>HTML</p>
              <Skillsbar bgcolor="red" progress='67'  height={20} />
              
              <p>CSS</p>
              <Skillsbar bgcolor="#1B58EF" progress='63'  height={20} />
            
              <p>Jquery</p>
              <Skillsbar bgcolor= "#FA9307" progress='38'  height={20} />

              <p>Javascript</p>
              <Skillsbar bgcolor="#14C21F" progress='44'  height={20} />
                
                
              <p>PHP</p>
              <Skillsbar bgcolor="#FA5F07" progress='56'  height={20} />
            </div>
          </div>
        </div>
      </div>


      <div className={classes.Project} id="project">   
        <div className={classes.styleTitle}>
            <p>My Project</p>
        </div>
        <div className={classes.listProject}>
          <div className={classes.list_1}>
            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={pelaporan} alt="pelaporan" />
              </div>     
              <div className={classes.bodyCard}>
                <h3>Reporting</h3>
                <p>This website is built using a framework from the PHP 
                  programming language, namely the Codeigniter framework. 
                  This web is used to create a report, edit reports and 
                  delete reports. </p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
              <Link to={"/Add"} className="btn btn-primary">Tambah Komentar</Link>
              <div>
                <Routes>
                <Route path='/' element={<Home />} />
                  <Route path='/Add' element={<Add />} />
                  {/* <Route path='/add-comment' component={Add} /> */}
                </Routes>
              </div>
            </div>
    
            <div className={classes.card}>
              <div className={classes.imageCard}>
                <img src={bengkel} alt="bengkel" />
              </div>      
              <div className={classes.bodyCard}>
                <h3>Workshop</h3>
                <p>This application is a system created to record workshop data, 
                  such as customer data, employees, etc. This workshop application 
                  itself is built using the Tkinter module.</p>
              </div>
            </div>  

            <div className={classes.card}>
              <div className={classes.imageCard}>
              <img src={store} alt="store" />
              </div>
              <div className={classes.bodyCard}>
                <h3>Online Store</h3>
                <p>Tokokaro web is built using a template that has been provided 
                  by wordpress. To complete the online store web, I use the available 
                  plugins, such as payment, ordering, etc. plugins.
                  </p>
                {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
              </div>
            </div>  
          </div>
      
        <div className={classes.list_1}>
          <div className={classes.card}>
                <div className={classes.imageCard}>
                <img src={cms} alt="cms" />
                </div>
                <div className={classes.bodyCard}>
                  <h3>CMS</h3>
                  <p>A CMS is a software system used to organize and create various 
                    content on websites. cms is used for one of the web that I built. 
                    This cms can post data, edit data, delete data, display the number 
                    of posts, display categories, display tags, etc. CMS is also built 
                    for the client side and also the server. </p>
                  {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
                </div>
              </div>  

              <div className={classes.card}>
                <div className={classes.imageCard}>
                <img src={football} alt="football" />
                </div>
                <div className={classes.bodyCard}>
                  <h3>Web Football</h3>
                  <p>In is the first web that I built. This website itself 
                    is built using only html and css.</p>
                  {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
                </div>
              </div>  

              <div className={classes.card}>
                <div className={classes.imageCard}>
                <img src={search} alt="search" />
                </div>
                <div className={classes.bodyCard}>
                  <h3>Web Search</h3>
                  <p>This search web is built using the codeigniter and jquery frameworks.</p>
                  {/* <svg class="w-6 h-6" fill="none" stroke="#303030" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> */}
                </div>
              </div>  
          </div>
        </div>
      </div>

      <div className={classes.Contact} id="contact">
            <div className={classes.setContact}>
                
                <div className={classes.TitleContact}>
                    <h1>Contact Me</h1>
                    <p>If you want to contact me, you can contact him via the message form beside. Thank you.</p>
                </div>

                <div className={classes.styleContact1}>
                    <div>
                        <p>Name :</p>
                        <input type="text" name="" value="" placeholder="Input Name..."></input>.
                    </div>
                    
                    <div>
                        <p>Email :</p>
                        <input type="email" name="" value="" placeholder="Input Email..."></input>
                    </div>
                    
                
                </div>

                <div className={classes.styleContact2}>
                <div>
                        <p>Message :</p>
                        <textarea></textarea>
                    </div>
                    <button>Kirim</button>
                </div>
        </div>
        <hr></hr>
        <div className={classes.Copyright}>
            <p>Copyright 2022 | Joy Ravelo</p>
        </div>
      </div>

    </div>
  );
}

export default App;


const useStyles = createUseStyles({
  Navigation:{
      backgroundColor:'#1C2833',
      padding:5,
      justifyContent:'space-between',
  },
  
  styleNav :{
      '& ul' :{
        display: 'flex',
      },
  
      '& li' :{
        display: 'flex',  
        marginLeft:24,
      },
      
      '& li a' :{
          color : 'white',
          fontWeight:'bold',
          textDecoration:'none',
          
        },
    },

    Profile :{
      display:'flex',
      height:620,
      backgroundColor:'#1C2833',
    },
  
    styleTextProfile:{
      textAlign:'justify',
      width:'50%',
    },
  
    setTextProfile:{
      marginTop:170,
      marginLeft:145,
      
      '& p':{
        fontWeight:'bold',
        textAlign:'justify',
        fontSize:45,
        margin:0,
        color:'white',
      },
      
      '& button' :{
        width:120,
        height:36,
        borderRadius:6,
        backgroundColor:'#0D86F5',
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        border: {
          color: '#0B84F3',
          width: 1,
          style: 'solid'
        },
      },
    },
    
    webImage:{
      width:'50%',
      textAlign:'center',
    },

    Skills :{
      display:'flex',
      width:'95%',
      marginLeft:'2.5%', 
    },
  
    Background :{
      backgroundColor:'#EAEDF0',
    },
  
    styleText:{
      color:'white',
      width:'70%',
      backgroundColor:'#1C2833',
      margin:30,
      padding:10,
      borderRadius:15,
      boxShadow: "3px 6px 4px #9E9E9E",
      border: {
        color: 'black',
        width: 1,
        style: 'solid'
      },
    },
  
    styleTitle :{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
    },
  
    setText:{
      width:'92%',
      marginLeft:'4%',
      textAlign:'justify',
    },
    
    styleSkills :{
      color:'white',
      width:'70%',
      backgroundColor:'#1C2833',
      margin:30,
      padding:10,
      borderRadius:15,
      boxShadow: "3px 6px 4px #9E9E9E",
      border: {
        color: 'black',
        width: 1,
        style: 'solid'
      },
    },
  
    setSkills :{
      marginLeft:30,
      margin: 30,
    },
  
    setTitle:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
    },

    Project :{
      backgroundColor:'#EAEDF0',
      marginTop:-30,
      height:'100%',
      width :'100%',
    },

    styleTitle :{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
    },

    listProject:{
      marginTop:-20,
    },

    list_1:{
      display: 'flex',
      marginLeft:'10%',
      width:'80%',
      textAlign:'justify',
    },

    card :{
      width:'33%',
      color:'white',
      backgroundColor:'#1C2833',
      margin:10,
      padding:12,
      borderRadius:15,
      boxShadow: "2px 4px 3px #9E9E9E",
      border: {
        color: 'black',
        width: 1,
        style: 'solid'
      },
    },

    imageCard:{
      '& img':{
      width:310,
    },
      textAlign:'center',
      backgroundColor:'#9E9E9E',
      borderRadius:8,
      
    },

    Contact :{
       marginTop:20,
      backgroundColor:'#1C2833',
      height:330,
  },
  
  setContact:{
      display: 'flex',
  },

  TitleContact :{
    marginTop:20,
      width:'40%',
      marginLeft:35,
      '& h1' :{
          color:'white',
      },

      '& p':{
          color:'white',
          width:'95%',
          textAlign:'justify',
      },
  },

  styleContact1 :{
      width:'21%',
      '& p' :{
          color:'white',
      },
      '& div' :{
          marginTop:12,
      },
      '& input' :{
          height:35,
          width:260,
      },

     padding: 20,
  },

  styleContact2 :{
      '& p' :{
          color:'white',
      },
      '& div' :{
          marginTop:12,
      },
      '& textarea' :{
          height:110,
          width:380
      },

      '& button' :{
          marginTop:10,
          width:386,
          height:32,
          borderRadius:6,
          backgroundColor:'#0D86F5',
          fontSize:16,
          fontWeight:'bold',
          color:'white',
          border: {
            color: '#0B84F3',
            width: 1,
            style: 'solid'
          },
        },

     padding: 20,
  },

  Copyright:{
      '& p':{
          color:'white',
          textAlign:'center',
          fontSize:'bold',
          fontWeight:'bold',
          marginTop:20,
      },
  },

});