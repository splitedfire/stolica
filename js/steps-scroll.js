document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById('animated-path');
  const track = document.getElementById('scroll-track');
  const steps = document.querySelectorAll('.step');

  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = pathLength + ' ' + pathLength;
  path.style.strokeDashoffset = pathLength;

  window.addEventListener('scroll', () => {
    const trackTop = track.offsetTop;
    const trackScrollableHeight = track.offsetHeight - window.innerHeight; 
    
    let scrollPosition = window.scrollY - trackTop;
    
    let progress = scrollPosition / trackScrollableHeight;
    
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    path.style.strokeDashoffset = pathLength * (1 - progress);

    steps.forEach((step, index) => {
      let threshold = (index / (steps.length - 1)) - 0.05;
      
      if (index === 0) threshold = 0; 

      if (progress >= threshold) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  });
  
  window.dispatchEvent(new Event('scroll'));
});