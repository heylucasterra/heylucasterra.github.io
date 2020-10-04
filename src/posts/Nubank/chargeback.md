---
path: '/nubank/chargeback'
# lastEdit: 2017-07-12T17:12:33.962Z
title: 'A north for chargebacks'
company: 'Nubank'
accent: 'var(--bg-light)'
location: São Paulo, Brazil
date: '2018'
subtitle: 'Co-creating a fresh, shared vision of the future — and making sure the team navigates in that direction.'
designteam: Gustavo Mendes, Sofia Hernandez, Luiz Borba and others
topics: product design, user research
featuredImage: './gatsby-astronaut.png'
published: false
impact: small
role: 'Product and Design'
color: 'red'
---

>##### **Disclaimer:** This is not exactly a case study of a specific project but rather a story of how we set the product vision for a customer support team at Nubank.

### Joining a team focused on operations
In early 2018 Nubank’s Chargeback[^1] experience (and team) needed some product love. For the past year or so, the team had been focused on maintaining services and optimizing customer support processes. I had recently joined Nubank and was looking for problems to solve when I met Gustavo Mendes, a product manager that was looking for a designer to team up with.

Gustavo gave me a brief overview of what he knew about chargebacks. It seemed complicated and full of ramifications – which made me accept the challenge. During my first month in Chargeback, I spent several hours working as an Xpeer (Nubank’s customer support heroes). I learned how to use internally designed back-office tools, got familiar with dispute processes, and understood the various backend services. 

![Inácio, one of the Xpeers from the night-shift spent several hours teaching me the way to great customer support.](/images/xpeer.jpg) 

### Gathering internal and external customer feedback
As there were no product folks in the team for a long time, the product backlog was very confusing and how the team prioritised work was blurry. We needed a way to collect feedback from both customers and Xpeers (this second group was around the mark of 100 people at that time).

![](/images/zapierIntegration.png)

We put together a quick Google Forms →  Zapier → Trello integration that enabled us to regularly collect feedback. This tool – creatively named XpeerVoice – helped me ramp up and evaluate the scale of the biggest pains in both the backoffice tool and the customer-facing chargeback flow in the app.

![](/images/xpeervoice.png)

Xpeers sent customer and their own feedback in a Google form. Then it was added to a Trello board where we replied Xpeers, asked them for more info before estimating impact and eventually moved cards from there to our team’s backlog.

### The need for a longer-term vision
While there would always exist ways to improve customer support processes, Chargeback urged a vision. Gustavo and I had been at Nubank for around 2 months now and agreed on building a longer-term product vision with the rest of the team. We had a couple of projects going on, but they felt too reactive. Building our own strategy was the way to do proactive work and assure the experience was still the best in the industry in the years to come.

I organized a team dynamics, involving key stakeholders. For this activity, I brought an incomplete front-page of a newspaper. The headline read as the nightmare of any Xpeer: Nubank's customer base growing from 2MM to 50MM people over the next 2 years — without growing the customer support team. The title, however, indicated we had been successful in this mission. The rest of the page was blank and the activities we played helped us frame the pillars towards success.

![](images/cb-newspaper.png)
##### I used a newspaper as an artifact to set a vision for Chargeback. <br><span style="color: var(--font-mid-contrast);">Note: NPS isn't a metric I recommend nor incentivize ;)</span>
 <!-- We used it as a way to get the message accross for people less. At that time Nubank's NPS was >90 so this was a huge challenge. -->

That wasn’t the first collaborative session we had as a team but it was the most emblematic for me. It was the first time we felt like an actual team, co-creating the direction Chargeback would sail towards in the near future. It was very energetic to have software engineers, business architects, customer support and even our then Chief Operations Officer in the same room to think about the foundations that would make us win the scalability game.

### Spreading the word
By the end of the team dynamics, we had 3 pillars that would lead the way. I can’t reveal what they were, but they had to do with improving the self-service experience to report a transaction and succeeding at increasing the ratio of customers per Xpeer in a healthy way.

![](images/news-wall.png) 
##### Not exactly a prestigious space but we added the printed versions of the newspaper front page to some of the walls on our floor.

The Chargeback team was probably the largest at Nubank back then, occupying half a floor in our office at Rua Capote Valente. The best way to spread the vision was to print copies of the front page and put them on the walls, so our 127 team members would be in contact with it every day.

### New opportunities arise
Several project opportunities started popping after this. Xpeers were more attentive every small detail that seemed to push us away from that front page — like if the headline was fading, [Back to the Future style](https://youtu.be/goRm3o_iHv0?t=40). More and more people sent us feedback on XpeerVoice and came to talk to me about things that were suboptimal. A good example of that was this spreadsheet:

//Figure: GIF spreadsheet.

It was used to control rebuttals: chargebacks that were “denied” and we wouldn’t be able to reimburse our clients. It seemed obvious that it was one of the blockers for us to scale the operation. With a simple effort × impact matrix it was crystal clear: we had found our first big impact project to tackle.

Designing this tool took me close to 2 months with multiple iterations every week always followed by demos and usability tests with Xpeers. It was a complex product to design but one of the main benefits of building an internal tool was that I could move fast. Sitting next to my customers offered me shorter feedback cycles and boosted product iteration.

While I can’t show you the tool, or the flow, here are some of my favourite details of the work done at that time

//Figure: Close-ups. Open sans → Graphik; Checkboxes;  

When we got to a version that attended Xpeer needs, we ran a final session with a group of people that had never seen the tool before. They were asked to perform the most frequent and critical actions from their routine and show us how they would do it. People who never saw that interface knew how to use it. I was confident to move with my solution.

### Shipping less than minimum
While we were confident about the designs, it would still take a couple more months to get to the ideal scenario. I'm a big supporter of keeping things scrappy and that's exactly what we did — another benefit of building internal products is that teams feel more comfortable taking bigger risks.

We started rolling out the new tool with around 15% of the features planned, which would probably enable Xpeers to complete less than 40% of the jobs using it. This is a message from one of our Xpeers after his first day using the tool.

![“My overview of the first day using the {{Tool}}: It took me 3h30 to finish 50 cases. Maybe I’m not used to it but it took me more than the usual (2h - 2h30)."](/images/feedbackPato648.png)

He pushed some extra 1h/1h30 on his first day using it and was very polite to blame his lack of familiarity with the tool. We were the ones to blame: the tool was barely useful. Pato still needed to shift tabs multiple times and use the old spreadsheet for more than half of his tasks.

After the first release, we invited Xpeers to help us with prioritization. We organized the releases basedon their feedback and gave them visibility of what was coming up every week. During this process, here are some of the messages we received:

![](/images/feedbackAll.png)
##### Some of the notes and thanks the team received from Xpeers along the journey.

I can’t really disclose the final design of that tool here, but imagine a shiny design below.

![shiny design]()

#### Business impact
85% faster
The new tool reduced task completion time from 3 minutes to 27 seconds. Not only did it help the Xpeer team from growing but also it helped shrink it. This meant some of the Xpeers from our team could now focus on other contact reasons. 

We saved Nubank a substantial amount of Brazilian reais per year and changed the company's perception about the team. Chargeback went from the underdog to a team engineers asked to work on.

#### Personal impact
One the personal side, working with this team was one of my best moments at Nubank. After working in a couple of other projects there, Gustavo and I decided to pursue different opportunities in the company. 

I started leading design for Credit Card and he led the team building the customer support platform. Our partnership, however, was just beginning. After that we jump-started several personal projects and internal side-quests together.

### Learnings
- Design is about investing in the user’s experience before and after things go wrong. 
- Simplifying the life and work of customer support goes a long way to make them focus on what they do best: build trust with customers and advocate for them during product prioritisation.
