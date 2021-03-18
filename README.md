# TailwindCSS

March 2021

> 🔨  TaildwindCSS framework. Overview and showcase website. From udemy: [TaildwindCSS de A à Z.](https://www.udemy.com/course/taildwindcss-de-a-a-z/)

* * *

Demo on Github page:

[Overview](https://raigyo.github.io/tailwindcss-overview/overview.html)

[Showcase website "SEOTOOL"](https://raigyo.github.io/tailwindcss-overview/index.html)

![logo](_readme-img/logo.jpg)

![capture](_readme-img/capture-01.png)


## Dependancies / Post process CSS / Custom classes

- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Create a CSS file if you don't already have one, and use the *@tailwind* directive to inject Tailwind's base, *components*, and *utilities* styles:

````css
/* ex: ./css/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
````

**package.json**

````json
  "scripts": {
   "build": "tailwindcss build ./css/input.css -o ./css/output.css"
  },
````

It will create ./css/output.css.

Import the generated file in HTML.

````html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TailwindCSS</title>
    <link rel="stylesheet" href="./css/output.css" />
  </head>
````

### CSS postprocess

- [postcss-cli](https://www.npmjs.com/package/postcss-cli)

`npm i postcss-cli`

**postcss.config.js**

````js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
````

````json
 "scripts": {
    "build": "postcss build ./css/input.css -o ./css/output.css",
    "watch": "postcss build ./css/input.css -o ./css/output.css --watch"
  },
````

To avoid to rebuild **output.css** (when changing **input.css**), use `npm run watch`.

### Custom classes

**input.css**

````css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* custom css */
body {
  background: lightblue!important;
}

/* custom class using utility class from TW */
.square {
  @apply w-20 h-20;
  background: rgb(13, 136, 29);
}
````

### Custom Tailwind classes

**tailwind.config.js**

Extend classes:

````js
module.exports = {
  theme: {
    extend: {
      spacing: {
        verywide: "1500px",
      },
    },
  },
};
````

Replace ALL classes (here the colors provided by Tailwind.css will be replaced):

````js
module.exports = {
  theme: {
      colors: {
        customColors: "#000",
      },
  },
};
````

`npm run build` (watch mode doesn't work)

Now class *w-verywide* can be use in html pages.

### Purge CSS

- [cross-env](https://www.npmjs.com/package/cross-env): Run scripts that set and use environment variables across platforms

`npm i cross-env`

**package.json**

````json
  "scripts": {
    "production": "cross-env NODE_ENV=production postcss ./css/input.css -o ./css/output.css"
  },
````

**tailwind.config.js**

````js
module.exports = {
  purge: ["./*.html", "./**/*.html"],
  theme: {
    //...
  },
};
````

## [Overview](https://raigyo.github.io/tailwindcss-overview/overview.html)

### Size

- Padding / Margin
- Width / Height

### Typography

- Font size
- Text align
- Colors
- Font weight
- Font Family
- Font Style
- Letter Spacing
- Row height
- List Style Type
- Text opacity
- Texte-Décoration
- Text Transform
- Text Overflow / Break Words

### Background / Borders / Effects

- Background-color
- Background-Opacity
- Gradients
- Image/Repeat/Size/Attachment/Position
- Border Radius
- Border Width
- Border Color
- Border Opacity
- Border Style
- Divide Width/Color/Opacity/Style
- Ring Width/Color/Opacity/Style
- Button

### Flexbox

### Grid

### Responsive

- Media queries / min-width
- Custom classes
- Dark mode
- Variants / Adding pseudo classes
- Purge CSS

### Transition and animations

## Useful links

- [TailwindCSS](https://tailwindcss.com/)
- [Ziratsu/Sandbox-Tailwind-Cours](https://github.com/Ziratsu/Sandbox-Tailwind-Cours)
- [Ziratsu/Site-Formation-Tailwind](https://github.com/Ziratsu/Site-Formation-Tailwind)
- [A Free Gallery of Fantastic and Unique CSS Gradients](https://www.gradientmagic.com/)