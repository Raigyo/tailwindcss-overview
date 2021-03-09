# TailwindCSS

March 2021

> 🔨  TaildwindCSS de A à Z. From udemy: [Les animations CSS en 9 projets](https://www.udemy.com/course/taildwindcss-de-a-a-z/)

* * *

![logo](_readme-img/logo.jpg)


## Dependancies / Install tailwindCSS

[tailwindcss](https://tailwindcss.com/): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

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

## Overview

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
-  Border Width
- Border Color
- Border Opacity
- Border Style
- Divide Width/Color/Opacity/Style
- Ring Width/Color/Opacity/Style
- Button

## Useful links

- [TailwindCSS](https://tailwindcss.com/)
- [Ziratsu/Sandbox-Tailwind-Cours](https://github.com/Ziratsu/Sandbox-Tailwind-Cours)

