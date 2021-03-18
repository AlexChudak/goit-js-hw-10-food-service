const refs = {
  // body: document.querySelector('body'),
  body: document.body,
  switch: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//По дефолту светлая тема
refs.body.classList.add(Theme.LIGHT);

refs.switch.addEventListener('change', setClassList);
// refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
  refs.body.classList.add(Theme.LIGHT);
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    // localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}



// function setLocalStorage(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
else (themeInLocal === Theme.LIGHT) 