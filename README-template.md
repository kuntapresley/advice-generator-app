# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/kuntapresley/advice-generator-app.git)
- Live Site URL: [Add live site URL here](https://github.com/kuntapresley/advice-generator-app.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- sass css pre processor

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

the major knowledge i gained from this project is that i learned how to populate with api ,and with advice slip generator,i also learnt how to fetch api in form of text,then how to rotate images on hover in my css
```html
<h1>   <picture class="advice-generator_divider">
    <source media="(min-width:545px)"
    srcset="images/pattern-divider-desktop.svg">
  <img src="images/pattern-divider-mobile.svg" alt="picture"></picture>
  </div>
  <button class="advice-generator_btn">
    <img src="images/icon-dice.svg"  class="advice-generator_btn-img" alt='dice icon'>
  </button>
</div></h1>
```
```css
.proud-of-this-css {
  .advice-generator_btn{
  width:6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  grid-row: 2/3;
  grid-column:1/2 ;
  place-self: end center;
  background:hsl(150, 100%, 66%);
  transition: box-shadow 250ms;
  cursor: pointer;
}
}
```
```js
const renderAdvice= (adviceObj) =>
{
    const {id,advice}=adviceObj;
    adviceNumberSpan.textContent=`ADVICE #${id}`;
    adviceQuoteSlot.textContent=advice;
};
const generateNewAdvice = async() =>{
  const data= await fetchNewAdvice()
     const advice= data.slip;
 renderAdvice(advice)
};
window.addEventListener('DOMContentLoaded',()=>{
    fetchBtn.addEventListener('click' , generateNewAdvice)
});
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

there is always room for improvement because perfection is not possible ,but am very pleased with all areas of my project,because it works perfectly for now

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.stackoverflow.com) 

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- 
- Frontend Mentor - [@ifeanyipresley](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@legend_of_kunta](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments


**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
