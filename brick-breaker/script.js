function captchaSuccess() {
  window.top.postMessage("success", '*');
}

const solveButton = document.getElementById('solve');

solveButton.addEventListener('click', () => {
  solveButton.textContent = "ROBOT DETECTED";
  
  let count = 0;
  function incrementCounter() {
    count++;
    solveButton.style.backgroundColor = count % 2 === 0 ? "red" : "yellow";
  }
  const myInterval = setInterval(incrementCounter, 200);
  setTimeout(() => {
    clearInterval(myInterval);
    solveButton.textContent = "I am not a robot";
    solveButton.style.backgroundColor = "white";
  }, 5000);

  return;
  captchaSuccess()
});

solveButton.addEventListener('mouseover', () => {
  solveButton.style.backgroundColor = "white";
  const x = Math.random() * (window.innerWidth - solveButton.clientWidth - 5)
  const y = Math.random() * (window.innerHeight - solveButton.clientHeight - 5);
  solveButton.style.transform = `translate(${x}px, ${y}px)`;
});
