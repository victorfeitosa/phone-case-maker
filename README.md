Phone Case Maker
===

## The project 🧙
This project consists of a phone case customizer interface where a user can select a background for the case, 
add/remove images (stickers) and text, pick fonts, colours and styles and download an image to print a user-customized phone case.
* Started on 06/04/2019
* Finished on 19/04/2019 (still a W.I.P.)

## The tech stack 💻
* JavaScript ES6+
* SASS
* VueJS
* AdobeXD and Inkscape to create images
* Free photo backgrounds
* Free SVG stickers
* Lots of coffee

## How to run it locally 🕹
* This test still uses Yarn as it's package manager
* Run `yarn` to install all the dependencies
* Run `npm run dev-start` to build the project and serve it


## Images Attribution 📷️
* SVG Stickers - Summer set (<a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>)
* SVG Stickers - Cute set (<a href="http://www.freepik.com">Designed by Freepik</a>)
* Backgorund Image Options - *No references were found, please inform if you own any of these images*

### Dependencies 🌋
* Vue and all of its stack (VueX, Babel, Babel Polyfill, ES6 utils)
* Vuetify for Vue Material UI
* Express for serving files and the web app
* Formidable to parse form requests
* Axios for POST requests
* Dom-to-image to render the phone case image
* UUID for id generation

## Browser Support (tested on) 🌎
* Chrome latest
* Firefox latest

## Features ⭐️⭐️⭐️
* Background:
  * Pick a predefined image
  * Upload a new image
  * Align and scale the background image to your liking
* Stickers
  * Choose a sticker from a predefined package
  * Move, rotate and scale a sticker
* Text
  * Choose a font among the predefined options
  * Choose text and border colour from the predefined palette
* Case Image Download


## How everything was done 🔧⚙️
The project started with the given challenge to build a web app that was able to generate a customized phone case starting from a user-picked background, stickers and customized text with an experience similar to Instagram Stories.

The design base took place in AdobeXD, where the base functionalities were laid out in order to better understand the features that should be available and how the user experience should feel like. Vue and Vuetify were chosen for the speed and practicality despite me having not used Vue in a few years. Vuex is used to store the app state and exchange data between components.

The main idea was to have a Canvas in which the user would have the freedom to drop elements, text and backgrounds and then render them into an image. The canvas solution was designed from the ground up with only plain JavaScript. Despite its simplicity, the control widget is quite complex in its nature and its relation to the components it transforms, using matrices and some math to perform its tasks. A note to font scaling: an itty bitty of magic was used to scale text correctly in the canvas, take a look!

The canvas uses some tricks to appear as the actual phone case, and element cropping is done with overflow occlusion and layering. Drag & Drop was implemented in the canvas drop area.

UI was thought out to be simple and responsive, with animations to convey experience and behaviour.

The image rendering uses dom-to-canvas. The contents of the canvas drop area are transferred to the actual print canvas, which is the size of the real phone case resolution, and the elements are upscaled and positioned accordingly. The print area then is converted to SVG foreign objects and made into an image.

Vuex was used for all the interchangeable data throughout the App. Also, some utility functions were implemented to handle component mounting, canvas handling, background upload and math.

Text colour palettes were thought out to be bright and cheerful. Fonts were based on "notebook" and "planner" products.


## What I'd do differently 🔮💣️
1. I believe the first thing that comes to mind is to build the canvas and the renderer differently. The canvas looks good as is, but if there was a renderer done from scratch using HTML5 Canvas, maybe the canvas drop area could be a scaled-down version of the print canvas, rendering directly content into pixels. This would make the rendering more straight forward without the need of a data upscaling step between the drop area and the actual rendering, and also avoiding small inconsistencies of position and size between the small drop area canvas and the large print area result.
2. Implementing my own renderer using HTML5 Canvas as discussed above. Since there is no use of complex DOM properties such as box-shadow and filters in the app, the canvas renderer would be fairly simple to do. It would consist of a background rendering step, a render loop for SVG images and a render loop for text elements. It would also support text stroke options and post-processing. But the deadline requires taking some shortcuts.
3. Having more options for case bases (for different phone models), and pulling stickers and fonts from elsewhere (google fonts and other sources).
4. Having case themes to move the user into a better design direction, avoiding "chaotic" and "ugly" designs and making easier to build beautiful results.
5. Getting rid of Vuetify, sometimes it can be a verbose pain. Also, Vuetify gets in the way of supporting browsers such as IE11.
6. Decouple everything I could. Sometimes the short deadline makes us do some coupling so we can to gain some results faster.
7. Make 'send backward' and 'bring-forward' work relatively with other elements in canvas, so the element would be ordered based on the other components depth and not in a "increase/decrease depth regardless of the others" fashion.
8. Definitely remove hacks to circunvent how vuetify work with v-img and the dom-to-image package's quirks
9. Try to figure out some math before wasting time on "seeing what works", Linear Algebra review is necessary.
10. Better planning and organization overall.

## Final notes 📔
This was a great exercise. DOM handling and logc were a bit rusty before this, but coding the transform widget was great to get some of the logic and ideas of my game making days back. Despite some things being rushed and some things being done over someone else's code I have confidence that I could eliminate most of these dependencies if I have enough time. Also polishing handling the rough edges are also neededin some parts of the code and architecture.

Despite all that it was a great challenge to get the blood flowing again!

___
