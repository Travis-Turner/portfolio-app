import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navigation from './Navigation';
import Segment from './Segment';
import text from './text';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Segment 
        text={text.intro}
        header={text.headers[0]}
      >
      </Segment>
      <Segment 
        text={text.simplyEnglish}
        header={text.headers[1]}
      >
      </Segment>
      <Segment 
        text={text.hiraganaDriller}
        header={text.headers[2]}
      >
      </Segment>
      <Segment 
        text={text.simon2}
        header={text.headers[3]}
      >
      </Segment>
      <Segment 
        text={text.infantSchool}
        header={text.headers[4]}
      >
      </Segment>
    </div>
  );
}

export default App;

/* Finish the resume to get the dates right and add the new project */
/* Just make an about me section and use text from your cover letter */
/* Include a git hub page and a link to the resume */
/* Make the segments and have them take text as inputs in the form of paragraphs 1 2 3 4*/
/* I can use text from the cover letter and the app descriptions */
/* They should also take pics which should be easily displayed as thumbnails */
/* Don't forget screen shots from the back end*/
/* Include app store links */

