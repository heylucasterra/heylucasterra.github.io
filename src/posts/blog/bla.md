---
path: '/blabous'
lastEdit: 2020-05-09T19:12:33.962Z
date: ''
title: 'Redesign: Lego'
location: São Paulo, Brazil
subtitle: ""
topics: design, meta, redesign, typography
featuredImage: ''
published: true
accent: ''

---
I’ve been away from this project for over a month now. As you might have noticed, I ended up taking a little bit of a hiatus as the world got a bit scary ever since[^1]. Still, here we are, learning how to get to the other side of this together.

This past month I avoided jumping into code after work and enjoyed some time away from the screen — mostly reading Frank Herbert's Dune. I think I'm getting the hang of the quarantine now and feel more comfortable to slowly get back to this website.

I wanted to talk about some of the main layout bricks used here as well as how I'm structuring the bits of code that make them.


###Type scales
Most styling frameworks today — Gatsby's standard included — have pretty decent type scales. This given the fact I'm not the type of designer that normally pushes for HUGE fonts but also care about accessibility enough to avoid a 8pt body text. For a project like this, using all styles from `h1` to `h6` plus paragraph seems a bit of an overkill. I won't be using these many and think 4 styles might be more than enough for now.

For the `font-size` at HTML level I am using Gatsby's default of `112.5%/1.45em` (18px instead of browser's default 16px). And then for each text tag I'm using rem units. I have completely discarded h6, getting me 5 title styles and one for paragraphs. As I'm using Markdown to write 99.99% of this website I also decided the `h4` will have the same size as `p`, with just a different weight and color, giving me more flexibility when writing `.md` files.

After some minor letter-spacing adjustments, here's what I got.

|      |       |
| -----| -----:|
|`h1`  | <h1 style="margin:0">This is a title text</h1>
|`h3`  | <h3 style="margin:0">This is a h3 text</h3>
|`h4`  | <h4 style="margin:0">This is a h4 text</h4>
|`p`   | <p style="margin:0">This is a body text</h4>
|`h5`  | <h5 style="margin:0">This is a label text</h5>

I'm using `h4` and `p` at the same sizes so I can use h4 in articles create titles at the same size as body text.

<br>

###Variables
For now I'm using mostly colour variables but this will likely expand in the future to spacing too. 
####Background colour
<div style="margin-bottom:1rem; display:grid; grid-gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(16%, 1fr)); color:var(--font-high-contrast)
">
  <div style="background-color:var(--bg-lightest); border-radius:3px;">--bg-lightest</div>
  <div style="background-color:var(--bg-light); border-radius:3px;">--bg-light</div>
  <div style="background-color:var(--bg-mid); color:var(--font-high-contrast); border-radius:3px; min-height:3rem; align-items:vertical-mid">--bg-mid</div>
  <div style="background-color:var(--bg-dark); border-radius:3px;">--bg-dark</div>
  <div style="background-color:var(--bg-darkest); border-radius:3px;">--bg-darkest</div>
</div>

<br>

####Font colour
<div style="display:grid; grid-gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); color:var(--font-high-contrast);
">
    <div style="color: var(--font-high-contrast);border-radius:3px;">--font-high-contrast</div>
    <div style="color:var(--font-mid-contrast);border-radius:3px;">--font-mid-contrast</div>
    <div style="color:var(--font-low-contrast);border-radius:3px;">--font-low-contrast</div>
    <div style="color:var(--font-inactive);border-radius:3px;">--font-inactive</div>
</div>

<br>

####Accents
<div style="display:grid; grid-gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); color:var(--font-high-contrast);
">
    <div style="background-color:var(--accent);border-radius:3px; min-height:3em">--accent</div>
    <div style="background-color:var(--primary);border-radius:3px;min-height:3em">--primary</div>
</div>

<br>



###Light and dark
In the future this site will support different colour themes — but if you know how to inspect code in you can already see it in action by adding `data-theme="dark"` inside the `<html>` tag.

```css
[data-theme="default"] {
  --bg-lightest: #fff;
  --bg-light: #f7f7f7;
  --bg-mid: #e2e2e2;
  --bg-dark: #dbdbdb;
  --bg-darkest: #d1d1d1;
  --bg-frosted: #ffffffe8;
  --font-high-contrast: #000000ed;
  --font-mid-contrast: #000000ad;
  --font-low-contrast: #0000004f;
  --font-inactive: #cecece;
  --accent: #ffeb82;
  --primary: #2f80ed;
  --primary-bg: #2f80ed12;
  --bg-code: #dcf5ff;
  --code: #ffe2f1;
}
[data-theme="dark"] {
  --bg-lightest: #333;
  --bg-light: #2b2b2b;
  --bg-mid: #242424;
  --bg-dark: #1e1e1e;
  --bg-darkest: #181818;
  --bg-frosted: #323232de;
  --font-high-contrast: #fffffff7;
  --font-mid-contrast: #ffffffb8;
  --font-low-contrast: #ffffff4d;
  --font-inactive: #3f3f3f;
  --accent: #00877b;
  --primary: #ffcec3;
  --primary-bg: #ffcec312;
  --bg-code: #00877b;
  --code: #fff;
}
```

<!-- ![](https://gdurl.com/PawV) -->
![](https://gdurl.com/c2dM)
#####Go ahead, inspect and add data-theme="dark" to the html tag ;)

###Grid and page body
Oh, grids. This is going to be an unpopular opinion. For the past couple of years I've been designing mostly for mobile and my process has involved very little — if any — use of grids. While many of my friends are skeptical about this opinion, grids for me have a similar importance to setting the table for dinner.

Setting the table is an important part of the dinner ritual, and you could spend hours making it perfect — aligning silver and dishes, matching table cloth and napkins — but table setting isn't anyone's final goal (I think). I'm a fan of simpler table arrangements that succed at placing the meal under the spotlight.

Here I'm using a single column layout where, every now and then, an elements will break the vertical monolyth — without a pre-determined grid, of course.

Truth be told: if you know the basics of CSS, a project like this doesn't require a grid and can make good use of more automatic layout rules (flexbox's `justify-content` is a good example of that).

As mentioned [before](/blog/2020/defining-constraints), I’m challenging myself to build this without any `@media` in my code, meaning the same lines of style should work across different sizes of devices. For the body of text, I’m using a simple `max-width: 60rem`.

###Markdown and frontmatter
I’m using Markdown to write every page in this website except for the home. Making Markdown powerful is a critical part for the success and speed of posting new work so I'm writing the React template in a way that will allow me to control things such as background colour for an icon or images all via frontmatter.


###Case studies and blog posts
Building the 


###Navigation
Links
Button (do I need it though?)

###Code snippets

###*In my mind* page
This will likely be the last part to ship and will likely change a lot until then. But I want to have a space where I share things not necessarily related to work, like what I'm listening/reading/new habits etc. Still 

[^1]: In case you’re reading this from the future, I'm writing this as humanity faces the COVID-19 pandemic.
