let isConnecting = false; 
let timeouts = []; 


const connectAllProfiles = () => {
    
    const connectButtons = Array.from(document.querySelectorAll('button')).filter(button => button.innerText.includes('Connect'));

    console.log('Found connect buttons:', connectButtons.length); 

    if (connectButtons.length === 0) {
        alert('No connectable profiles available.');
        return;
    }

    isConnecting = true;

  
    connectButtons.forEach((button, index) => {
      
        if (!isConnecting) {
            console.log('Connection process stopped.');
            return;
        }

        const timeoutId = setTimeout(() => {
            button.click();
            console.log(`Connected to profile ${index + 1}`);
        }, index * 2000);

        timeouts.push(timeoutId); 
    });
};

const stopConnecting = () => {
    isConnecting = false; 
    timeouts.forEach(clearTimeout); 
    timeouts = []; 
    console.log('All connection requests stopped.');
};


const createFloatingButton = () => {
    const connectButton = document.createElement('button');
    connectButton.innerText = 'Connect with All';
    connectButton.style.position = 'fixed';
    connectButton.style.bottom = '70px'; 
    connectButton.style.right = '20px';
    connectButton.style.padding = '10px 20px';
    connectButton.style.fontSize = '16px';
    connectButton.style.backgroundColor = '#0A66C2';
    connectButton.style.color = '#fff';
    connectButton.style.border = 'none';
    connectButton.style.borderRadius = '5px';
    connectButton.style.cursor = 'pointer';
    connectButton.style.zIndex = '9999';

    
    connectButton.addEventListener('click', connectAllProfiles);

    document.body.appendChild(connectButton);
};


const createStopButton = () => {
    const stopButton = document.createElement('button');
    stopButton.innerText = 'Stop Connecting';
    stopButton.style.position = 'fixed';
    stopButton.style.bottom = '20px';
    stopButton.style.right = '20px';
    stopButton.style.padding = '10px 20px';
    stopButton.style.fontSize = '16px';
    stopButton.style.backgroundColor = '#ff0000'; 
    stopButton.style.color = '#fff';
    stopButton.style.border = 'none';
    stopButton.style.borderRadius = '5px';
    stopButton.style.cursor = 'pointer';
    stopButton.style.zIndex = '9999';

   
    stopButton.addEventListener('click', stopConnecting);

    document.body.appendChild(stopButton);
};


window.addEventListener('load', () => {
    setTimeout(() => {
        createFloatingButton();
        createStopButton(); 
    }, 3000); 
});
