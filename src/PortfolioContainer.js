import profile from "./assets/images/profile.jpg";
import ponder from "./assets/images/ponder.png";
import bcs from "./assets/images/bcs.png";
import note from "./assets/images/note.png";
import team from "./assets/images/team.png";
export default function PortfolioContainer() {

  return (
    <>
        <nav>
          <h1>Christopher Le</h1>
          <h3>Software Developer</h3>
        </nav>
        <main>
          <section className='aboutcontainer'>
            <div className='containerrow'>
              <img src={profile} alt="profile_picture" id='profile' />
              <div className='block'>
                <h2>About Me</h2>
                <p> Hi I am Christopher Le, a full-stack web developer who loves problem solving with creative solutions, writing efficient code, and working with others. I look at life and see code all around and enjoy constantly learning as new technologies develop.</p>
              </div>
            </div>
            <div className='contact'>
              <a href="https://github.com/Chrisle206" target="blank" rel="noreferrer"><i className="bi-github" role="img" aria-label="GitHub"> Github</i></a>
              <a href="https://www.linkedin.com/in/christopher-le-206/" target="blank" rel="noreferrer"><i
                className="bi bi-linkedin"> Linkedin</i></a>
              <a href="mailto:chrisle808@yahoo.com" rel="noreferrer"><i className="bi bi-inbox"> Email</i></a>
              <a href="https://resume.io/r/7LnehjX6K" target="blank" rel="noreferrer"><i
                className="bi bi-person-lines-fill"> Resume</i></a>
            </div>
          </section>





          <h1 className='bigtitle'>Projects</h1>
          <section className='container'>
            <div className='block'>
              <h2>Ponder: Social Media</h2>
              <p> Ponder is a randomized social forum, whereby the user is able to 'Go Fish' from a pool of thoughts collected from all around the world, or post a thought themselves. The user has the option to create an account and post their thoughts, or 'Ponders,' under their username, but they can also elect to post anonymously. No account is necessary to use Ponder--anyone can join the conversation. However, only users with an account will be able to see a history of all their posts, and users posting anonymously will have a profanity filter applied to help curb toxicity.

                <a href="https://pacific-ravine-12135.herokuapp.com/" target="blank">Deployed Application</a>
              </p>
            </div>
            <a href="https://pacific-ravine-12135.herokuapp.com/" target="blank"> <img src={ponder}
              alt='ponder_home_page'></img></a>
          </section>

          <section className='container'>
            <div className='block'>
              <h2>BootCampSpot Adventures</h2>
              <p> As junior developers and gamers, we wanted to conclude our time in bootcamp strongly and create something that we could not only be really proud of, but would enjoy using as well. With the skills we've cultivated thus far we figured we're ready enough to dive into creating our own coding/fantasy-themed RPG as both a celebration of and a testament to everything we've learned. The primary purpose of our game was to develop something we would enjoy both creating AND playing, and to tie together everything we've learned to end the bootcamp with a bang. <a href="https://bcs-adventures.herokuapp.com/" target="blank">
                  Deployed Application</a></p>
            </div>
            <a href="https://bcs-adventures.herokuapp.com/" target="blank"> <img
              src={bcs} alt='excuse-generator-screenshot'></img></a>
          </section>

          <section className='container'>
            <div className='block'>
              <h2>Note Taker</h2>
              <p>This is a full-stack web application that allows the user to create, save, and delete personal notes for everyday use. The application begins at the homescreen where the user is shown a button that takes them to the Notes page. The Note page will contain all of the saved notes they had previously and also store new notes when created. This is done by entering a title and content within the given text fields. Once the user has finished entering all of the information they will then click the save button and it will be appended to the list of notes that can be cycled through.<a href="https://nameless-bayou-68541.herokuapp.com/" target="blank">Deployed Application</a></p>
            </div>
            <a href="https://nameless-bayou-68541.herokuapp.com/" target="blank"> <img src={note}
              alt='team-profiles-screenshot'></img></a>
          </section>

          <section className='container'>
            <div className='block'>
              <h2>Project</h2>
              <p>This is a Node.js command-line application that takes information about a software dev team, creating an HTML document populating the page with the summaries of each individual team member. Inquirer is used to prompt the user and gather information which is sent to the generateHTML.js file. Once the information is recieved the file organizes the contents and creates a new 'index.html' file for easy access to the team member's info.</p>
            </div>
            <a href="https://github.com/Chrisle206/team-profile-gen" target="blank"><img
              src={team} alt='dayplan-app-screenshot' id="img4"></img></a>
          </section>

        </main>

        <footer>
          @Christopher Le 2021
        </footer>
    </>
  );
}
