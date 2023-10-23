import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns is-half'>
            <div className='column is-3'>
              <ProfileCard title='first' handle='@alexa' img={AlexaImage} />
            </div>
            <div className='column is-3'>
              <ProfileCard title='second' handle='@alexa' img={CortanaImage} />
            </div>
            <div className='column is-3'>
              <ProfileCard title='third' handle='@bb' img={SiriImage} />
            </div>
          </div>
        </section>
      </div>
      
      
      
    </div>
  );
}

export default App;
