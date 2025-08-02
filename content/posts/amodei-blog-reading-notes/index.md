+++
title = "Reading Notes of Dario Amodei's Blog"
date = "2025-08-02"
updated = "2025-08-02"
description = "Reading Notes of Dario Amodei's Blog."

[taxonomies]
tags = ["Essay", "Reading"]

[extra]
footnote_backlinks = true
quick_navigation_buttons = true
toc = false
+++

> An in-progress essay, to be completed.

Recently I've read some blog posts of [Dario Amodei](https://www.darioamodei.com/), the CEO of [Anthropic](https://www.anthropic.com/), and find them very insightful and inspiring to me — a Ph.D. candicate in AI-related fields, and also a deep user of Anthropic's Claude models.

Specifically, they broaden my view both academically and industially, with an interdisciplinary perspective.
So this is to write down the thoughts that came to me while reading, to not let them slip away.

Amodei's posts covered (in my reading order):

- [On DeepSeek and Export Controls](https://www.darioamodei.com/post/on-deepseek-and-export-controls) (Jan. 2025)
- [The Urgency of Interpretability](https://www.darioamodei.com/post/the-urgency-of-interpretability) (Apr. 2025)
- [Machines of Loving Grace](https://www.darioamodei.com/essay/machines-of-loving-grace) (Oct. 2024)

<!-- I'll organize this essay by topics instead of posts, although each topic is mainly addressed by one post. -->

## Envisioning Powerful AI

In [Machines of Loving Grace](https://www.darioamodei.com/essay/machines-of-loving-grace), Amodei discusses a lot about what would *"powerful AI"* be like in the future, and how will it change every aspect of our human society in the 5-10 years after its emergence (*"it could come as early as 2026"* as Amodei predicts). In Amodei's vision, the powerful AI, which is similar to today's LLMs in form, but not necessarily the same in implementation, has the following properties in my summarization:

- **Super intelligent.** It is *"smarter than a Nobel Prize winner"* in terms of pure intelligence. For example, it can prove unsolved mathematical theorems and write extremely good novels.
- **Works with interfaces.** It has all the "interfaces" a human would require to work virtually with, other than just chatting.
- **Autonomous.** It can autonomously solve given tasks for a long period, with only necessary clarification from human.
- **Interacts virtually.** It doesn't have a physical embodiment, but can control (and even create) physical tools through a computer.
- **Massive amount and high speed.** It has abundant resources (repurposed from training) for massive deployment (e.g., millions of instances), and learns and generates actions much faster than human (e.g., by 10-100×).
- **Independent but coorperative.** The millions of instances can work both independently on unrelated tasks, and cooperatively on one task, with some of them fine-tuned to be especially good at particular tasks (I would call them "experts").

He summarizes this as a *"country of geniuses in a datacenter"*, which is principly capable of solving very difficult problems very fast, but still limited by several factors from the real world. For example, speed of the outside world, need for data (e.g., in particle physics), intrinsic complexity (e.g., [the three-body problem](https://en.wikipedia.org/wiki/Three-body_problem)), constraints from humans (e.g., laws and people's willingness), and physical laws (this even limits the density of the digital world by limiting number of transistors per square centimeter and minimum energy per bit erased).

Therefore, he proposes that we should be talking about ***"the marginal returns to intelligence"***, which is borrowed from the economic term, to conceptualize a world with very powerful AI.
And all his visions are based on this, with awareness of in what areas, to what extent, and on what timescale does very powerful AI helps.
This is a freshing idea to me — we could easily end up with either overly optimistic or overly pessimistic imaginations without a resonable measurement of the impact of intelligence.

The above [basic assumptions and framework](https://www.darioamodei.com/essay/machines-of-loving-grace#basic-assumptions-and-framework), although not the main part of *Machines of Loving Grace*, impress me the most.
After all, the hardest thing is not to infer a reasonable answer given a solid framework, but to propose the framework.

He spends the rest of the essay to elaborate on what would happen 5-10 years after the powerful AI comes, in five main aspects: biology and health, neuroscience and mind, economic development and poverty, peace and governance, work and meaning.
In short, his basic prediction is that **powerful AI will allow us to compress the progress that human would have achieved over the next 50-100 years into 5-10 years**, which he refers to as the *"compressed 21st century"*. The question is when will that powerful AI actually come.

In contrast to the *basic assumptions and framework* section, i think some points in the prediction sections, for example, the "liberal democracy vs. authoritarianism" part (lol), are rather personal.
It is clear that even within the same analytical framework, different people would have different understanding and imagination on certain issues, based on their unique background and characteristics.
That's an improtant reason why I like to read stuffs by people of different backgrounds, and now I am attempting to keep notes.

## Mechanistic Interpretability for Safe AI

As modern AI becomes more and more powerful, towards the "powerful AI" vision discussed above, the question of *how to govern powerful AI and ensure it "safe"* is gaining increasing importance (and the definition of "safe" is another big question).
Technically, some safety mechanisms must be developed for a powerful AI system in the future (when it becomes powerful enough), and interpretability is definitely one of the most important aspects for safety control.
In  [The Urgency of Interpretability](https://www.darioamodei.com/post/the-urgency-of-interpretability), Amodei discusses the importance and history of mechanistic interpretability, and Athropic's recent progress on this.

In my understanding, the reason why interpretability is so important is that unlike conventional systems, which are programed in a definite manner, modern AI (i.e., AI based on deep neural networks) is mostly a blackbox — even people who trained them cannot have a 100% (sometimes not even 1%) clear understanding of why and how they produce certain outputs against some inputs.
As Amodei quoted from Chris Olah, his co-founder, generative AI systems are *grown* (I like this word) more than they are *built* — their internal mechanisms are “emergent” rather than directly designed.
Unfortunately (lol), it is very possible that such "blackbox" (for now) systems will have increasingly huge impact on us humans, until one day it must be transparent and interpretable enough for more various applications.

Back to *mechanistic interpretability*, it is a field of reverse-engineering neural networks to understand the specific algorithms and computational mechanisms they learn to implement internally.
Different from other interpretability approaches that focus on input-output relationships or high-level model behavior, mechanistic interpretability seeks detailed, mechanistic understanding of the system at low level (e.g., layers and neurons).
It was first studied on CNNs, and now LLMs.
Chris Olah, co-founder of Anthropic, has been working on this field since he was at Google and OpenAI.

Given the example of a LLM, the first step is to find [single interpretable neurons](https://transformer-circuits.pub/2022/solu/index.html), and then they found that while some neurons were immediately interpretable, the vast majority were an incoherent pastiche of many different words and concepts, which allows the model to express more concepts than it has neurons. They referred to this pheonomenon as *superposition*. To interprete the more complicated superpositions, they adopted a signal-processing-inspired method called [*sparse autoencoders*](https://transformer-circuits.pub/2023/monosemantic-features), with which they were able to find combinations of neurons that did correspond to cleaner, more human-understandable concepts (even very subtle ones like the concept of "literally or figuratively hedging or hesitating"), which they call *features*. They were able to find over 30 million features in Claude 3 Sonnet through this method.

More could be done to understand the model's working mechanism after finding the features. For example, artificially amplifying neurons related to a feature would significantly affect the model's behavior (["Golden State Claude"](https://www.anthropic.com/news/golden-gate-claude)); tracking and manipulating groups of features (i.e., [*circuits*](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)) could help to understand the model's reasoning process.
Athropic's Research Blogs ([*Mapping the Mind of a Large Language Model*](https://www.anthropic.com/research/mapping-mind-language-model), [*Tracing the thoughts of a large language model*](https://www.anthropic.com/research/tracing-thoughts-language-model)) introduce these progresses in more details.

## AI and Politics

TODO

I'll complete this part, and also correct grammar mistakes (I believe there are some), when time allows — just cannot wait to upload this now!
