function changeName(titles) {
  if (!titles) return;
  console.log('changing', titles.length);
  for (const title of titles) {
    title.textContent = 'cat cat cat';
  }
}

console.log('content script loaded');
let nodes = document.querySelectorAll('.yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap');
if (!nodes || nodes.length === 0) {
  nodes = document.querySelectorAll('ytd-rich-grid-media #video-title, ytd-video-renderer #video-title');
}
changeName(nodes);