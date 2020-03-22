---
path: '/blabla'
# lastEdit: 2017-07-12T17:12:33.962Z

title: 'Nurturing Design Culture'
company: 'Nubank'
accent: 'rgb(138, 5, 190)'
location: São Paulo, Brazil
date: '2018-2020'
subtitle: 'From 2018 to 2020 we grew a design team from 12 to over 70 people. Here is my perspective on the things we did that made us focus on customers while keeping design weird both our team and the company kept their eyes on out customers'

designteam: Guilherme Neumann, Duda di Pietro, Rachel Jordan, Erick Mazer, Ricardo Sato, Lucas Neumann, Lucas Terra
topics: product design, user research
featuredImage: './gatsby-astronaut.png'
published: false
impact: small
role: 'Staff product designer, User researcher'
color: 'red'
---

## This is a h2
### This is a h3
#### This is a h4
##### This is a h5
###### This is a h6


This is a regular text and I'll try to add a line break by adding a tag `<br>`<br>
at the end of the sentence


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
[![Foo](http://www.google.com.au/images/nav_logo7.png)](http://google.com.au/)

[![nubank design team 2019](../images/gatsby-astronaut.png)]()


[![test](./images/design2019.jpg)]()
[![test]("../images/design2019.jpg")]()
[![test](.../images/design2019.jpg)]()
[![test](..../images/design2019.jpg)]()
[![test]("./images/design2019.jpg")]()
[![test](".../images/design2019.jpg")]()
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

| Pre        | Pos           |
| ------------- |:-------------:|
| ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) | ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) |
| img1 | img2 |



{% include image.html url="https://octodex.github.com/images/yaktocat.png" description="My cat, Robert Downey Jr." %}


> adding a > will create a blockquote like this one. To see the possibility, the certainty, of ruin, even at the moment of creation: it was my temperament. Those nerves had been given me as a child in Trinidad partly by our family circumstances: the half-ruined or broken-down houses we lived in, our many moves, our general uncertainty. 


This is a body text named <p>
Each Markdown file is parsed into a node of type MarkdownRemark.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```


Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<a href="https://www.youtube.com/watch?v=zHAB4qDsgKY" target="_blank"><img src="http://img.youtube.com/vi/zHAB4qDsgKY/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="100%" height="auto" Border="10"/></a>


[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)


All frontmatter fields are converted into GraphQL fields. TODO link to docs on auto-inferring types/fields.

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).




⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

This plugin adds additional fields to the MarkdownRemark GraphQL type including html, excerpt, headings, etc. Other Gatsby plugins can also add additional fields.

How to query



---
path: "/blog/petal-credit-score"
date: "2019-05-04"
title: "Credit score in-app"
category: "Petal"
topics:
  - design
color: "#f2f2f2"
cover\_image: "../../images/petal.png"
published: false
size: P
---

## Problems

- Most users get Petal in order to build their credit score. In our app, though, there was no way for them to see the results happening in real-time.

## Hypothesis

- New users don't get enough in-app guidance about the features we offer, which causes engagement to be low.
- Redesigning the onboarding flow so that it helps the user understand and get set up with Petal's main features will drive engagement, retention, and user satisfaction.
- This same solution can be reused to announce new features and reengage users with unknown features.
- The solution might work with or without a dollar incentive for each step we want the user to complete.

## Goals

- Drive engagement with - Bank account linkage - AutoPay - Credit score deep dive - First transaction - Friend referral

## Ideas / Requisites

- A checklist that welcomes users with their next steps - Lives in the dashboard until dismissed - After dismissal, lives in settings - Might come back to dashboard when new features are announced or we need to push a certain behavior.
- Items lead to a modal that introduces each feature before you see them. This modal might have a carousel or not.
- Status completion bar
- Money incentive for each task
- Some actions need others, so they might be "locked"

## References

⋅⋅⋅http://blog.idonethis.com/5-checklists-applied-user-onboarding/⋅⋅
http://blog.idonethis.com/wp-content/uploads/2018/08/image-11.png ⋅⋅
http://blog.idonethis.com/wp-content/uploads/2018/08/image-11-2.png ⋅⋅

## Moments

01. New users
02. Users coming back to the list
03. New feature
04. bla


---

## Questions

- Is *Optimize your experience* the best copy? --> "Activate your card" is not really optimizing.
- Is invite a friend on the checklist? Or is it too Petal-serving? - Maybe it's not an item on the list but still appears as a last modal. "You're all done" "Invite friends" "not right now".
- Is credit score on the checklist?
- Should they be able to go back in the list?
- Dots or numbers in circles?
- Is the end state clear enough for people who are waiting for their card? The current green "Got your card --> activate" seems more clear.
- Should the modals be actionable and enforce good defaults (e.g spend planner) or just an image + text + link to the feature?
- Can we recommend a spend planner amount? Why would that be illegal?

1. **Setup your account**
   1. test
   2. Activate card
   3. Link bank account
   4. AutoPay
   5. Apple / Google pay
   6. Refer a friend?
2. Check out our features
   8. Credit score
   9. Freeze your card

   `code should use the entire line aaa`