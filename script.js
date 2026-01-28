const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.6 }
);

videos.forEach(video => observer.observe(video));
