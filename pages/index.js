import { useState } from 'react';

const Home = () => {
    const [userInput, setUserInput] = useState('');
    const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
    const onUserChangedText = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
      };
    return (
      <div className="root">
        <div className="container">
          <div className="header">
            <div className="header-title">
              <h1>super unity script prompt</h1>
            </div>
            <div className="header-subtitle">
              <h2>unity game design</h2>
            </div>
          </div>
          {/* text */}
          <div className="prompt-container">
            <textarea placeholder="start typing here" className="prompt-box" value={userInput}
    onChange={onUserChangedText}/>
          </div>
        <div className="prompt-buttons">
        <a className="generate-button" onClick={callGenerateEndpoint}>
          <div className="generate">
            <p>Script it</p>
          </div>
        </a>
      </div>
    </div>
        <div className="badge-container grow">
          <a
            href="https://buildspace.so/builds/ai-writer"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge">
              <p>build with cabbagespace</p>
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
