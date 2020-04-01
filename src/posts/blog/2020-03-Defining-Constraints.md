---
path: '/blog/2020/defining-constraints'
lastEdit: 2020-02-27T17:12:33.962Z
date: ''
title: 'Redesign: Defining constraints'
location: São Paulo, Brazil
subtitle: ""
topics: design, meta, redesign, 
featuredImage: ''
published: true
accent: ''
---

Back in design school, one of my professors would remind the class in every project assessment: "It needs to make sense". And by making sense he meant we needed to make sure whatever we were building was addressing our intentions. For this design to be successful, we needed to make sure we had the right intention. This still resonates everytime I begin a new project, this one included.

Making sure I have the right intent will save me time and keep me focused in the goal of both shipping my personal page faster — but also making sure I am spending my time to learn what I really need to get this up and running.

**My intention for this page is to broadcast my thoughts.** Showcasing projects I have worked on, yeah but also to share what's on my mind.

This week I put together a short list of definitions (read constraints) that will impact the shape what's coming out from this project. These are the constraints as the backbone for this project:

<br>

###I'm using [GatsbyJS](https://www.gatsbyjs.org/) to build 
Learning React has been on my list for too many years now and I feel I only used it to build small personal projects or to do minor tweaks at someone else's code at work. I have used Jekyll to build my portfolio in the past and after a while it just became difficult to maintain (aka I lost the fight to Ruby).

Gatsby is a static generator for React that has grown very popular in the past 3 years. The main reasons for adopting it: react, speed and aparently [easy to create a blog with](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/). I am excited to play with it.

###Goodbye Tachyons
For the past 4 or 5 years [Tachyons.io](https://tachyons.io/) has been my go-to CSS solution. I want this website to be as simple as possible so I'll try to stay away from frameworks for the style as they will allow me to do too much, too easily.

###Device agnostic code/layout
As I'm ditching CSS frameworks getting to a layout and font size that work across all devices will be important. In practice, this means I won't be using `@media` in my stylesheet. I also think this will add some spice to this project as I force myself to optimize for simpler layouts.