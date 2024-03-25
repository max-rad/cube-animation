const initCubeAnimation = () => {
  const wrapper = document.querySelector('[data-cube-wrapper]');

  if (!wrapper) {
    return;
  }

  const cube = wrapper.querySelector('[data-cube]');
  const buttonLeft = wrapper.querySelector('[data-button-left]');
  const buttonRight = wrapper.querySelector('[data-button-right]');

  let windowWidth = window.screen.width - cube.offsetWidth;
  let currentPosition = windowWidth;

  buttonLeft.addEventListener('click', (evt) => {
    evt.preventDefault();

    animation({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        cube.style.transform = `translateX(${windowWidth - (progress * windowWidth)}px) rotate(${progress * 360}deg`;
        currentPosition = windowWidth - (progress * windowWidth);
      },
    });
  });

  buttonRight.addEventListener('click', (evt) => {
    evt.preventDefault();

    animation({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        cube.style.transform = `translateX(${progress * windowWidth}px) rotate(${progress * 360}deg)`;
        currentPosition = progress * windowWidth;
      },
    });
  });

  window.onresize = () => {
    if (currentPosition > 0) {
      console.log(windowWidth);
      windowWidth = window.screen.width - cube.offsetWidth;
      cube.style.transform = `translateX(${currentPosition}px)`;
    }
  };
};

let animation = ({timing, draw, duration}) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export {initCubeAnimation};
