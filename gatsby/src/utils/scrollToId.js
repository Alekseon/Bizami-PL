import { navigate } from 'gatsby';

export default function scrollToId(id, yOffsetDesktop = 0, yOffsetMobile = 0) {
  const element = document.getElementById(id);
  const mobile = window.matchMedia('(max-width: 768px)');
  let yOffset = 0;

  if (mobile.matches) {
    yOffset = yOffsetMobile;
  } else {
    yOffset = yOffsetDesktop;
  }

  const scrolledFunction = (section) => {
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

    let options = {
      behavior: 'smooth',
      top: y,
    };
    window.scrollTo(options);
  };

  if (element) {
    return scrolledFunction(element);
  } else {
    navigate('/');
    setTimeout(() => {
      const findElement = document.getElementById(id) || document.body;
      return scrolledFunction(findElement);
    }, 100);
  }
}
