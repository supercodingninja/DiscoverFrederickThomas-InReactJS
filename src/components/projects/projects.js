import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Project from './ProjectCards';
// import fbCard from './BlogsCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

import A from '../../Assets/Projects/A+.png';
import cr from '../../Assets/Projects/cr.png';
import codePen from '../../Assets/Projects/codePen.png';
import CV from '../../Assets/Projects/CV.png';
import Joia from '../../Assets/Projects/Joia.jpg';
import KJV from '../../Assets/Projects/KJV.png';
import mct from '../../Assets/Projects/mct.png';
import NASA from '../../Assets/Projects/Nasa.png';
import nt from '../../Assets/Projects/nt.png';
import order from '../../Assets/Projects/order.png';
import pg from '../../Assets/Projects/pg.png';
import rmg from '../../Assets/Projects/rmg.png';
import scn from '../../Assets/Projects/scn.png';
import SCNfb from '../../Assets/Projects/SCNfb.png';
import start from '../../Assets/Projects/start.png';
import team from '../../Assets/Projects/team.png';
import WFW from '../../Assets/Projects/WFW.png';


function myProjects() {
  
  return (
  
    <Container fluid className='pro-section'>
      <Particle />
      <Container>
        <h1 className='pro-heading'>
          The <strong className='blue'>Works</strong>
        </h1>

        <p style={{ color: 'white' }}>
          Here are some of my <strong className='blue'>favorite projects</strong>, in various dispensations.  I hope you enjoy viewing my growth as I have (it truly is <strong className='blue'>exciting</strong>)!
        </p>


        {/* My Projects */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title='Who`s Outside?!'
              description='Do you like role playing games: then you have to check this one out!  This is from a course I took at Code Fellows.  I completed the course; but I did not graduate from this particular program (I made an 83%, requirement was 90%, and I was the Only one working a full-time job: security officer).  In fact, I was told that I should take the course, again (even though I passed the entrance exam for the next course in my curriculum.  I chose to remain in the course, all the way through: I decided to help my team finish our group project.  I did not give up, nor was it comfortable; but it was rewarding.  I developed as a person, and as developer.  The constant git version control difficulties my group had (most due to a lack of organization) strengthen me; and shown me who I want to be as a developer: write clean code, as simple as possible (for others to quickly understand, especially those behind you), utilize the proper languages and tools suitable for client, team, and individual success, find people who do not underestimate the value of effective communication and simplicity; and most importantly, someone who has your back, no matter what the situation is: I want my character to speak for me.  My desire is to learn from my team, read documention, and study all, effectively.  I do not want to be a rogue on assignments.  If there is anything that I have learn throughout my studies, thus far, is stick to what is the consent of agreement.  It`s all about an M. V. P. (minimum Viable project).  We did very, well on our project!'
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={NASA}
              isBlog={false}
              title='NASA Search Engine'
              description='Well, sticking with a team, all the way through, paid off: I utilized that knowledge to save my team`s final project.  We had major version control issues; and I suppose we just did not "git" it (get it 😃 nevermind).  The team would referrence this project as our "Double API, Wammy Project" 😂  I believe we did three!  NASA Image Search Engine is a responsive web app that displays images and information about space, stars and planets. The user enters a desired word and when the search button is selected; and then results will appear using our two, chief NASA API`s and one Wikipedia API (see I told you we did three (3), but you did not want to believe me).  A picture of the day will also appear (in a side card); and GET THIS, whatever picture is shown, that image was also taken on the same date of the search query (with the exception of the year).

              Users can then hover over their result images, and click one of the heart buttons (this is intended to add it to the user`s list of favorite images).  This is connected to the local storage of the user`s machine; and will be saved, even if the user refreshes their browser.  We made an A on our project!'
              link='https://github.com/supercodingninja/NASAquery'
            />
          </Col>


          <Col md={4} className='pro-card-view'>
            <Project
              imgPath={Joia}
              isBlog={false}
              title='Joia'
              description='I developed myself, very, well among my peers, concerning vesion control; and I can not tell you the joy I had in being with a group who desired to utilize tools to protect our branches (especially our main), learn new technologies, take time to plan and set organization policies and structure (I am Marine, remember).  This was my Jewel Project!  Joia, pronounced as "Joy-ah," means gem or jewel. Joia is your jewel eCommerce website for local art, where you can find your gem for your Jewel or Jim!  There is so, much more that I hope to accomplish, at least, utilizing the logic: we built this application with so, many new technologies (we were not taught them) such as Typscript, ReactJS, bcrypt, JWT Authetication, Mutler; and more!  Our stack (MERN) was intense; especially since we only two weeks to build it.    Please feel free to view our repository👇🏿'
              link='https://github.com/supercodingninja/Joia'
            />
            <Project
              imgPath={A}
              isBlog={false}
              title='Feedback On Joia'
              description= 'We made an A+!  We spent a week and an half planning, with tools such as ClickUp, Figma, Zoom, Google Meets, Slack.  We made it happen; and we recieved an A+ for our final project required for graduation!  I was a Project Manager of sorts.  I was more of a Project Manager, of sorts.  My particular roles were with the JWT Authentication and Back-end Registration, and repository management.  This truly was my favorite TEAM project; because we accomplished so, much together, and individually.  I almost died from I.T. P., and COVID-19, during my curriculum, prior to this very, assignment.  I GRADUATED!  I NEVER GAVE UP!  I NEVER WILL!  Please feel free to view our application👇🏿'
              link = 'https://joia.herokuapp.com/'
              ></Project>
          </Col>
          
          
          <Col md={4} className='pro-card'>
            <Project
              imgPath = {cr}
              isBlog = {false}
              title = '</Code>&nbsp;&nbsp;Refactored'
              description = 'I am learning that some of the more difficult and common tasks for both, front-end and junior developers, are to refactor existing code.'
              link = 'https://github.com/supercodingninja/codeRefactored'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={codePen}
              isBlog={false}
              title='Code Pen'
              description='I love learning and hacking my way here, on Coode Pen!  I have learned many things; and this summer, especially, my children and I are going to enjoy making our own animation- perhaps, even a series/group of series!  This should be a lot of fun, as we have already begun such things with the Adobe Cloud Creative Suite.'
              link='https://codepen.io/SuperCodingNinja'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={CV}
              isBlog={false}
              title='Curriculum Vitae (In Markdown Format)'
              description='This is a simple template to help you write your CV, in a readable markdown file; and use CSS to publish/print it. I got a lot of positive responses, concerning this format I chose to use for my CV. You can adjust/add some .gif, img, and social environments and contact.'
              link='https://supercodingninja.github.io/markdown-cv/'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={mct}
              isBlog={false}
              title='Happy 5th Birthday, Madison!!!'
              description='This is my FAVORITE PROJECT; and I did it for one my favorite people, my daughter!  I used so many tools to accomplish this; and I was amazed how they all were able to integrate well, with each other. was my first Adobe Premiere Pro CC project; and it went well!  I wanted to do something very, special for my Daughter, Madison, 5th birthday!  I am very, impressed by what Adobe Cloud has to offer.  I hope to utilize the available software for future dev. projects.  I am looking forward to seeing how Dream Weaver and other Adobe Creative Cloud.  I can speak forever and a day, regrding my daughter and family!!!  I am so, poud of her; and I pray to GOD that I be a successful father to and for her, and my son; and even a great husband to and for my wife, also!!!  I am really doing it unto the Lord.  I want to do all things, well (a journey in itself).  I hope to do allthings well, for any and every team I am on.'
              link='https://www.youtube.com/watch?v=CK_Z686G6No'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={nt}
              isBlog={false}
              title='Note Taker'
              description='An application that can be used to write, save, and delete notes. This application will use an express backend, and it will save and retrieve note data from a JSON file.  There`s so, much, more that I desire to do with this application; but it really is all about an M. V. P. (minimum viable product), making everyone happy; and showing them that you both can be profitable, by adding additional features, later- but it`s about them getting their brand statement out there, with thieir desired product`s chief application/feature in the forefront of all endevors.  I love deisgn, but this was the requirement- what was asked of me to do; and I did it, with all of my might (and I also like it)!'
              link='https://yes-notetaker.herokuapp.com/'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={order}
              isBlog={false}
              title='Order Form'
              description='There is always a concept, that seemingly becomes simple to developes, that we tend to laugh ourelves (perhaps, with each other, over coffee- with cream and sugar 😉 ) over the fact that in some unknown dispensation (near or far), that we did not understand or even knew how to accomplish telling the computer what we desire it to do.  The machine always does what you tell it to do; but are you feeding it the right instructions; or are you handing it over to a shark (Mac lovers may do that, anyway, after conversion 😆 ).  Speaking for myself (not confirming/dening any PC abuse), that awful and most dreadful challenge was creatiing an order form- I KNOW, THE HORR0R, RIGHT?!'
              link='https://supercodingninja.github.io/orderform2/'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={pg}
              isBlog={false}
              title='A Random Password Generator'
              description='This application randomly generates a password for the user to use.  I must admit, this was a very, difficult assignment, than I first gave credit for.  Many people (including myself) under estimate the Value of simplicity.  This assignment truly taught me to personally make a practice of accomplish complex problems, with as few lines of code as possible (with Pseudo-Code included: you have to think about the people coming behind you, and hopefully, it is Not to clean up your personal mess).'
              link=''
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={rmg}
              isBlog={false}
              title='Read Me Generator'
              description='Creating A Professional ReadMe.md Generator!  This application is something a concept that I encourage every deeveloper to have: a way to generste your ReadMe document, fast, simple; and effective.  It is up to me if it is meant to be; so I want to ensure that I have every tool at my disposal.'
              link='https://www.youtube.com/watch?v=Pp9IG-prQjE'
            />
          </Col>


            <Col md={4} className='pro-card'>
              <Project
                imgPath={start}
                isBlog={false}
                title='Start Now, Transform Today!'
                description='Today, is the time to start!  When you start today, you are a lot further than you were, yesterday. Earl Nightingale said, “Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”  You do not go forward to the future, by looking backwards: YOU HAVE TO DREAM; and dream unimaginable dreams- that means DREAM BIG, AND KEEP DREAMING!!!
               
               "There is a difference between productivity, and activity; but in order to have a product, one must be effectively, active."- Rev. F. D. Thomas, Jr.
               &nbsp;&nbsp;&nbsp;#DiscoverFrederickThomas​!'
                link='https://www.youtube.com/watch?v=gP-fl4-H7hY'
              />
            </Col>


<Col md={4} className='pro-card'>
  <Project
    imgPath={scn}
    isBlog={false}
    title='My First Repository (edited)'
    description='Last, but Never least, is that moment every developer should remember, "Hello, World!"  Please feel free to enjoy my nostalgia, with me, by viewing this motivating animation of phrases!  This is also where I first learned that not all browsers render the same way; which reminds me, if you have not already done so, PLEASE checkout how great my Portfolio is at Mobile Response- and don`t forget to Show Me Some Love!  If you were to compare my profile verse my first repository, you will see that the mobile responsivenes has incredibly improved.  This application works best in the Safari Browser (the music plays there: relevance is the animation match the tempo- remember, I am a musician).'
    link='https://supercodingninja.github.io/'
  />
</Col>
     
     
          {/* Placeholders for future projects I desire to include (not finished with assignments, yet). */}
          {/* <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col> */}


          {/* <Col md={4} className='pro-card'>
            <Project
              imgPath={team}
              isBlog={false}
              title=''
              description=''
              link=''
            />
          </Col> */}
        </Row>


        {/* Mentioning Facebook: for more views and exposure; andcredibility.  I'm still having trouble getting the information to populate; therefore, I change all Facebook content to proCards. */}
        <h1 className='pro-heading'>
          My Recent <strong className='blue'>Facebook </strong> Posts
        </h1>
        
        <p style={{ color: 'white' }}>Check me out!</p>
        
        {/* <Row style={{ justifyContent: 'center' }}>
          <Col md={9} className='fb-card fb-card-view'>
            <fbCards
              imgPath={KJV}
              title=''
              site=''
              link=''
            />
          </Col> */}


          {/* <Col md={4} className='fb-card fb-card-view'>
            <fbCards
              imgPath={SCNfb}
              title='Super Coding Ninja'
              site='https://www.facebook.com'
              description="This page is to help anyone desiring to code: no matter what background.  C'mon Devs (developers), let's get coding! "
              link='https://www.facebook.com/SuperCodingNinja'
            />
          </Col> */}


          {/* <Col md={4} className='fb-card fb-card-view'>
            <fbCards
              imgPath={WFW}
              title=',vkffk'
              site=''
              link=''
            />
          </Col> */}


<         Row style={{ justifyContent: 'center' }}>
          <Col md={9} className='pro-card'>
            <Project
              imgPath={KJV}
              title='Just Read the KJV Bible'
              site='https://www.facebook.com'
              description='Whether you have a King James Version of the Bible, of your own; or you do not have access to one: this Facebook page is FOR YOU.  Scriptures and KJV Bible readings will be posted for those interested in the KJV Bible.  All are welcome and encourage to learn.'
              link='https://www.facebook.com/JustReadTheKJVBible'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={SCNfb}
              title='Super Coding Ninja'
              site='https://www.facebook.com'
              description="This page is to help anyone desiring to code: no matter what background.  C'mon Devs. (developers), let's get coding! "
              link='https://www.facebook.com/SuperCodingNinja'
            />
          </Col>


          <Col md={4} className='pro-card'>
            <Project
              imgPath={WFW}
              site='https://www.facebook.com/'
              title="What's Funny Wednesdays"
              description='What`s Funny Wednesdays is all about a whole bunch of laughs & encouraging good overall health.  People have motivation to begin their week, they celebrate towards the nd of their week; but what about the middle; and what is good, overall health: Health & Wellness is the state of your Spiritual, Mental, Emotional, Physical, Social, Environmental; and Occupational health.  We hope to find you in good health. Thank you for viewing.'
              link='https://www.facebook.com/whatsfunnywednesdays'
            />
          </Col>
        </Row>

        <a 
          href="/#"
          className="to-top"
          
        >Back to top</a>
        
      </Container>
    </Container>
  );
}

export default myProjects;