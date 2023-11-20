# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Desktop view](./public/screenshot/desktop%20view.png)
![Desktop view](./public/screenshot/desktop%20view%202.png)
![Form validation](./public/screenshot/form%20validation.png)
![Mobile view](./public/screenshot/mobile%20view.png)
![Mobile view](./public/screenshot/mobile%20view%202.png)

### Links

- Solution URL: [Github](https://github.com/defydef/url-shortening-landingpage)
- Live Site URL: [Vercel](https://url-shortening-landingpage.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

- Using CSS grid to stack items on top of each other
  ![Result](./public//screenshot/Form%20-%20Transition%20stacking.png)

```html
<div
  className="grid grid-rows-[1fr_1fr_minmax(1200px, _1fr)] grid-cols-1 pt-24"
>
  <form />
  <Transition />
</div>

<!-- <form />  Form is on top of transition, and form is in between white and light grey background-->
<section className="row-start-1 row-span-2 col-start-1 z-10">
  <!-- <Transition /> -->
  <section
    className="z-0 row-start-2 row-span-2 col-start-1 bg-[var(--light-grey)] "
  ></section>
</section>
```

- Run useEffect to update keys state, so that the page immediately displays new URL

```js
const { newUrlAdded } = useLocalStorage();
const [keys, setKeys] = useState(Object.keys(localStorage));
useEffect(
  function () {
    if (newUrlAdded) setKeys(Object.keys(localStorage));
  },
  [newUrlAdded]
);
```

## Author

- Website - [defydef](https://github.com/defydef)
- Frontend Mentor - [@defydef](https://www.frontendmentor.io/profile/defydef)

## Acknowledgments

Thank you Frontend Mentor team for providing this amazing challenge! I had tons of fun developing this page, and most definitely learned a lot, especially about CSS grid and React 🤓
