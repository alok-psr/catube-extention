document.getElementById('changeBtn').addEventListener('click', () => {
    console.log('clicked');
    chrome.tabs.query({active:true,currentWindow:true}, tabs => {
      if (!tabs || !tabs.length) { console.warn('No active tab'); return; }
      chrome.scripting.executeScript(
        {
          target:{tabId:tabs[0].id},
          files:['scripts/content.js']
        },
        (results) => {
          if (chrome.runtime.lastError) {
            console.warn('inject error:', chrome.runtime.lastError.message);
          } else {
            console.log('injected into tab', tabs[0].id, results);
          }
        }
      );
    });
  });