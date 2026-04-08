---
layout: single
title: "Clarity is King 👑"
author: Drew Fass
date: 2026-04-07
categories: [my-thoughts]
tags: [ai, complexity, thoughts]
excerpt: "Reducing complexity is the most important heuristic for most people and most things."
---

As I mentioned in my very first post on this website, my goal with this site is to codify ideas that stick in my brain. Any thoughts that last for a while in there are bound to have some nuggets of wisdom that may be useful to write down. For me, the idea that has been circling the longest is the concept that complexity (not efficiency or optimization) is the most important heuristic in work and in life.

But what exactly do I mean by complexity...? 
And why is it so important...?

# What is complexity?

Complexity is a bit of a vague term. By pure dictionary definition it refers to "the state or quality of being intricate or complicated", but I don't think that definition goes deep enough for how I think about it in the context of my work and my life. When I refer to complexity, I generally think of it more through the lens of a "complex system", where many interdependent components (or "actors") have autonomy to make decisions without a predictable linear cause and effect for outcomes. In simpler terms, I think of complexity as the combination of how many actors exist in a given space and how intricate, complicated, or risky each actor is in the context of the greater system. 

The emphasis on *risk* here is important. I think complexity gets to the heart (better than any other heuristic) of how the real world works, and I think risk is the central reason why. In the real world things break in non-deterministic, unpredictable ways: 
- the engineer trying to get ahead pushes code that takes down production because it occurs at the same time a sysadmin decides to upgrade the servers,
- the supplier agrees to too many orders not realizing until it's too late that they can't fulfill them all and thus the project will be delayed, 
- the government creates new tarriff laws overnight that increase the cost of a companys product offerings putting them in a supply squeeze due to unexpected cost spikes,
- an IT professional installs a package on the company server that introduces a vulnerability at a later date in time when paired with a supsequent OS upgrade,
- etc... etc... 

Actors operating outside your control will make decisions that impact you. We live in an interconnected world, so there is no way to fully avoid the fact that other peoples decisions and actions will impact your life in some way. But, by having a framework to think about the complex systems you are operating within to help you be aware of what portion of the complexity of those system is a choice within your control, you can maximize your agency and improve the odds of getting the outcome you want.

# Complexity first, Optimization second

I'd argue that focusing on reducing complexity in your life is more important than trying to optimize your process to obtain a goal. Most problems that exist are generally the result of an upstream failure or an over-complicated flow instead of the result of a poorly optimized system. For example, if I think of my health as a system, instead of focusing on optimizing my nutrition to try to have the "perfect" diet, just eliminating junk foods and simplifying how many meals I eat in a day will improve my health outcomes with much less effort. If I think about my work as a system, instead of focusing on optimizing every second of my time to leverage myself to maximum output, simplifying my flow to focus what one thing every day and working on it to completion to help me graduate to new problems will improve the quality and usefulness of my work over time with a lower risk of me getting burned out. Reducing complexity, instead of over-optimizing or over-analysing, is often the route to a simpler and more impactful life.

Another place where reducing complexity is a useful tool is in software systems. While building software applications, leveraging dependencies (systems or code that other people have written and maintain) is a common practice. This practice allows engineers to focus on their applications without having to reinvent the wheel for common tools they will need along the way. It's a powerful abstraction that lets teams focus on their context instead of already solved technical problems. But every dependency adds increased risk. Through being dependent on an item outside of our control, we are at risk of that dependency failing and taking the system down. Additionally by not being the primary builder and maintainer of the downstream dependency, we are at risk of security vulnerabilities creating holes in our application that people or systems can exploit. When an issue does come up (ex: the famous Log4J bug or Crowdstrike bug), often the reaction is to patch it as fast as possible to reduce the time where the system is compromised. This makes sense, but the bigger question to ask is always "do we even need this component (or "actor") in the first place?". Simplifying your system by removing unneeded components is the best outcome (if possible) as it reduces the overall risk associated with the application in the process. You cannot be taken down by a package you never use. It's a balance, and one that deserves proper thought, but starting with complexity as the primary heuristic to simplify is a great way to generally improve outcomes after any problem.

One caveat, "simple" in this context does not mean easy. It is hard to simplify - it takes discipline and focus to put in the effort to remove complexity from your life. But if you make it a priority, it's an investment that rewards you with more time and bandwidth to tackle other problems (which is a feedback loop to help give you more autonomy over your life). Simplify first, optimize after.

(insert Kyla Scanlon here)

# How Complexity and Clarity Interleave

Another way to phrase the thesis of this post is "pursue clarity". Instead of settling for the quick fix or the band-aid solution, take some time to reframe the problem, reframe the timeline and the stakes, and find clarity in where the root issue originates from. By asking "why", we can poke holes in our current understanding of the reasons for failure and dictate how we can prepare for dependent actors acting outside of our control in the future. 

- Why did this problem occur? 
- Why didn't an upstream system catch it? 
- Why did we not predict this risk and mitigate it before the problem occured? 
- Why could we not act sooner? 

Focusing on the why behind a given problem helps provide clarity and give a holistic understanding to what happened. As we discussed above, nothing happens in a vacuum. In an interconnected world most problems have multiple interdependent actors that hold some degree of blame for driving some percentage of the decisions that led to the negative outcome. Instead of asking "who's to blame here" ask "how could we have prevented this risk in the first place". Removal of risk by removing or simplifying components or decisions various actors can make reduces the blast radius of potential issues that can occur, thus simplifying our process while lowering the probability of future problems.

A good way to help internalize this concept is to look at the credit card marketplace as a case study. Credit cards are just debt. They work by giving people a preset line of credit that they can use to purchase goods and services under a promise to pay the debt off in the future (normally on a monthly cadence via monthly statements that group transactions). As a business, the credit card company makes money primarily off of the people that do not pay off their debt on time as well as through transanction fees by hosting global payment rails. Credit cards usually have high interest rates, so failing to pay on time means you will end up paying more (which creates the margin that these companies profit off of). 

You've probably noticed that recently (over the past 10-15 years) more credit card offerings have been created than ever before. Each offering has various incentives attached to it, using things like "points" games or cashback prizes to incentivize credit card use. Why do you think this is? Credit card companies are smart and make quite a bit of money. Why would they offer me free airline miles or 5% back on gas or 2% cashback on all my purchases? From a pure $$ standpoint, if I pay the debt off on time, I'm effectively getting a discount for what I already buy - right? Isn't this a no brainer?

Yes, technically you get a discount - but there is a catch. The credit card companies know that the more complex they make the process (to redeem points, miles, etc), the more likely it is that people will not optimize their return to get the maximum value out of the card. Additionally, the credit card companies know that by getting a card in the first place, your odds of taking on more debt than you can pay off goes up (which increases their potential profits on the backend via interest off of these micro-loans). This increase in debt also pays credit card companies through increased transaction fees on the merchant side as well.

By having the credit card, and by trying to optimize it's usage to maximize these points games, customers lose sight of the fact that they would probably spend less money by not having the card in the first place. It is the complexity of the process and the overhead on the customer that increases their *risk* of default, which increases the profits for the credit card company's business. Companies are not doing this out of the goodness of their heart. They understand that human nature has common flaws, and they try to exploit them in the name of profit. Not thinking about reducing complexity first is one of these flaws that is commonly exploited. Their goal is to get you focus on optimizing within their game, rather than having you question if you want to participate in the game in the first place. My argument here is not that you can't game the system, it's more that the system is getting more complex and harder to game so often times the best approach is to focus on reducing the complexity of games you choose to enter into instead of trying to optimize your potential reward within them. 

# You Only Have So Much Time and Capacity

The reason focusing on complexity matters is because we are operating within a fixed parameter system (our lives, fixed parameter = our time). No matter how efficient you get, or how much you optimize individual tasks, there are only so many hours in a day and so much time in a lifetime to decide what you want to do. Choose wisely. 

More complexity inherently adds more overhead to your life. Using the credit card example above, by having a credit card I have more that I need to manage every month. I have to make sure I pay it off on time. I have to make sure I monitor statments for fraud. I have to make sure I meet criteria to maximize my benefits and cash in my potential offers for flights or cashback. The time spent may be worth it in a vacuum, but as you scale it up to more cards and more members in the family, the blast radius grows and the risk of an issue coming up grows as well. It also adds more administrative time to your plate, which is time you could use elsewhere if you simplified your setup.

These systems don't always fail right away and they often don't fail in a predictable or repeatable way. Generally, people just lose awareness and forget the extent of what they have signed up for (or "promised" implicitly) until the bill comes due. This principle is why so many people sign up for subscriptions that they forget to cancel and how companies make money off of negligence and a lack of awareness rather than their core service value-add. Humans can only hold so much context in their mind at any point in time and our memory is fallable, so expecting you will be able to remember and deal in the future is generally a more risky call than avoiding the future decision in the first place. Additionally, many people operate using fear as the main path to make decisions. They are not focused on how them 3 months from now will handle the ramifications of this decision, they are focused on how to minimize pain and suffering (and survive) the current challenge. With this mindset you will almost always trade off security today for more complexity tomorrow. Instead, if you can curb the fear-based thinking and think more holistically, being able to simplify your situation and prevent the need for a future action is potentially a better tradeoff, even if there is less financial "value" in the short term. Lowering the ceiling of growth for a simplified life with less risk and overhead may be a worthwhile tradeoff.

On top of that, our capacity changes over time. Our ability to take on new situations and new challanges deteriorates as we age, but the complexity of our lives tends to increase. So ironically, at the time in your life where your time is the most valuable is exactly when we trade it for more complex situations to try to optimize results. That's why we take the crazy job to try to get ahead. That's why we play the credit card games in the first place to try to optimize our financial output. We implicitly are trying to "get ahead" to have more freedom to do what we want in our lives. But optimization is a more difficult route. Focusing on what you want and why you want it first and simplifying your decisions to minimize complexity is how you increase odds of success.

Be thoughtful with your time. Give it away explicitly, not implicitly as a administrative tax to opting into complexity.

# The Human Element - Reframing Fear Based Mindsets

A major part of this theory is the human element and human nature. The main crux of my thesis is that complexity often adds more risk to the equation than it provides on the other end in potential reward. A large portion of this risk is the human element. Humans are fallable. We make mistakes. We forget things or purposely don't do them due to emotional reason or negligence. We aren't perfect even when we try to be. Knowing this, relying on humans in a system to be perfect is a recipe for failure. Instead, we should plan for human fallability as a part of the equation and treat this as another scenario




# Counterpoint: When is Complexity Worth It?


# Thesis








# Thesis
- Complexity and alignment are generally a more important heuristic to focus on than optimization and efficiency
- Clarity and understanding is more important than everything else at driving better outcomes
- Know the game you are playing, know what stage of the game you are in, simplify within that game.
- Most fail because they have too much noise, not enough signal. This could also be interpreted as too much complexity, not enough clarity.
- In a changing world, your risk blast radius matters more than you think (especially when you consider how to optimize your upside with barbell risk)
- Human Nature prevails at scale --> people will eventually do the lowest effort option, so make that option the easiest one. Only way to do that is with simplicity and clarity.