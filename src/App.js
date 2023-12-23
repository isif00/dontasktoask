import './App.css';
import { TypeAnimation } from 'react-type-animation';
import TextContainer from './components/textContainer';

import whyy from './assets/whyy.webp';
import ohmygnu from './assets/Ohmygnu.webp';
import chad from './assets/chad.webp'
import redhat from './assets/redhat.webp'

function App() {
  return (
    <div className="App">
      <div className='title'>
        <p>Don't ask </p>
        <TypeAnimation
          sequence={[
            'shitty questions',
            1000,
            'retarded questions',
            1000,
            'without googling',
            1000,
            'without context',
            1000,
          ]}
          wrapper="span"
          speed={60}
          style={{
            fontSize: '5em',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: 'red',
            textDecoration: 'line-through',
            textDecorationThickness: '5px'
          }}
          repeat={Infinity}
        />
      </div>
      <div className='under-title'>
        <p>Please ask a REAL question ...</p>
        <img src={whyy} alt='google it'></img>
      </div>

      <div className='introduction'>
        <p>Think about asking a question, hoping for a good answer, but getting a confusing reply that makes you wonder why you asked in the first place ... 🤷‍♂️</p>
      </div>
      <div className='details'>
        <div className='example'>
          <div className='example-title'>
            <img src={ohmygnu} alt='ohmygnu'></img>
            <p>example of a retarded person:</p>
          </div>
          <TextContainer content='Any Java experts around? '></TextContainer>
          <div className='example-title'>
            <img src={chad} alt='chad'></img>
            <p>example of a chad person:</p>
          </div>
          <TextContainer content='Any Java experts around who are willing to commit into looking into my problem, whatever that may turn out to be, even if its not actually related to Java or if someone who doesnt know anything about Java could actually answer my question?, if not, i have an X problem caused by Y and you can check here for details'></TextContainer>
        </div>
        <p>
          There are plenty of reasons why people who DO have the knowledge would not admit to it. By asking, you're asking for more than what you think you're asking.

          You're asking people to take responsibility. You're questioning people's confidence in their abilities. You're also unnecessarily walling other people out. I often answer questions related to languages or libraries I have never used, because the answers are (in a programmer kind of way) common sense.
        </p>
      </div>

      <div className='footer'>
        <p>made by sifo </p>
        <img src={redhat} alt='redhat'></img>
      </div>
    </div>
  );
}

export default App;
