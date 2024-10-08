
import React from 'react';
import './App.css'; 
function App() {
  const sendConnectRequest = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "connect_with_all");
    });
  };

  return (
    <div className="App">
      <h1>LinkedIn Connector</h1>
      <p>Click the button to start connecting with profiles automatically.</p>
      <button onClick={sendConnectRequest} className="connect-button">
        Connect with All
      </button>
    </div>
  );
}

export default App;
