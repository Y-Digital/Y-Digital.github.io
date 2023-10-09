---
title: Understanding Without Meaning
layout: blog
summary: >-
  What does it mean for a computer to do something better than humans? We
  explore this discrepancy, the limitations of LLMs, and potential solutions in
  our blog.
author: Luuk Suurmeijer
date: 2023-09-20T22:00:00.000Z
featured_image: /c6f34930-575e-45ef-9860-f3a085a4ea96.jpg
---

Picture this: A new type of model has been released. It’s been trained to produce canine verbalizations, that is: to bark, like a dog. To this end the new LBMs (Large Barking Models) have been exposed to millions and millions of different barks from different dogs all over the world, from sharp chihuahua squeals to deep muffled barks of a greyhound. The results are good, so good in fact, that the proponents of LBMs claim these models now bark better than dogs themselves. Clearly a strange statement, but the thought experiment raises an interesting question: what does it even mean for a computer to bark better than a dog?

Although it is a strange scenario, it is analogous to the current discourse about the capabilities of Large Language Models (LLMs), specifically about their alleged aptitude at “understanding language”. In fact, according to TIME magazine, AI had already surpassed human-level language understanding in 2019.

![](/Picture1.png "[SOURCE, https://time.com/6300942/ai-progress-charts/]")

Notice that the benchmark for language understanding is a single dataset, which begs the question how representative a single dataset could be of the whole of human language understanding. There is, however, a more intrinsic question raised by claims about AI language understanding, and it is the same one we reached for the hypothetical dog models: What does it even mean to ‘understand language’ for a machine? Language is a system of communication and the expression of complex thought that developed in humans over the course of millennia, and in humans only.  While it is true that LLMs can imitate humans well, you wouldn’t say that an LLM imitates a human better than a human. The presentation of the abilities of LLMs similar to the figure from TIME magazine anthropomorphizes LLMs in a way that is not true to what these models actually can do. By shrouding LLMs in mystery with terms as Artificial General Intelligence (AGI) and ‘superhuman language understanding’, the true nature and capabilities of these models is obscured, and people will be more incentivized to use these models for tasks they do not have the aptitude for. 


LLMs are in the business of doing next word prediction. What this means is that LLMs are continuously doing ‘fill in the blank exercises’ in order to predict missing parts of a text. The effect of this ‘pretraining’ is that an LLM will be good at being able to complete a text, but not necessarily that it will be able to follow instructions. For example, if your prompt is “Magic mirror on the wall, who is the fairest one of all?”, a model that is only pretrained might respond with the rest of the text from Snow White. In order to enable LLMs to be good conversational agents, in an extra step, called Reinforcement Learning From Human Feedback (RLHF),  the model is exposed to pairs of instructions and their corresponding results. So, the whole training procedure is a statistical process based on a combination of missing text, and likely responses to instructions. 


By contrast, a human does not just observe examples of language. A child observes someone use language (or later on, says something themselves), and experiences the effect it has on the world. Mom asks dad to bring you a bottle, and dad responds by going ahead and doing it. They touch (and lick) their toys to learn their properties. They learn to count with colored shapes. For a human language is always ‘grounded’ in the material, physical world. This type of experience is a much more powerful training signal than the ‘fill-in-the-blank’ data that LLMs have access to. Additionally, LLMs are exposed to written language, whereas humans learn language based on spoken language, i.e. speech. Speech is a continuous stream of sounds, where words are not separated by spaces, and every distinct speaker sounds slightly different. This makes it a more complicated source of information, but also richer. The contours of speech can give learners grammatical and semantic information, but also about someone’s intention, their mood, and their social background. The fact that humans have a much richer base of information than LLMs is an important reason why they cannot be directly compared.


So, in a way, understanding language for humans really means to understand the world. [In fact, recent research indicates that language and complex thought may be more separated than was previously assumed](https://evlab.mit.edu/assets/papers/Fedorenko_%26_Varley_2016_ANYAS.pdf). For
LLMs, any understanding that they acquire would have to be bootstrapped from their linguistic training objective. We have some indications however, that this does not happen. Take simple arithmetic addition for example: if you as a person understand addition, then it does not matter whether you have to compute 2 + 2 or 4567 + 29137. You will know how to do it and probably arrive at the correct answer with enough time, give or take some errors if you, like me, are terrible at arithmetic. LLMs can do arithmetic to an extent, but break down especially as the numbers become increasingly large, no matter how you instruct them. This shows they do not really understand addition in the sense that a human does. And it doesn’t just go for arithmetic: it is common knowledge that LLMs can relatively easily be made to trip up in all sorts of tasks involving language in ways that are trivial for humans.

I paint a rather grim picture for those who are excited about the human abilities of LLMs, but there are possible avenues for solutions. There is an increasing effort to train LLMs in conjunction with some world model. The main idea of a world model is that it is some representation that contains knowledge about how the world works, that is not represented in language. Collections of images are a popular operationalization of world models for example, that aim to help LLMs with tasks such as spatial reasoning. While they surely can provide value for correcting their hallucinatory nature, I doubt images are going to help LLMs do math or reason about language. Another option is a more abstract, structured collection of facts about the world, for example a knowledge graph. A knowledge graph is a structure that represents facts and the relationship between them. You can use it to discover new relationships about existing facts in the graph and relate new facts to things already stored in the graph. This type of structured data is the counterpart to the unstructured raw text that an LLM has access to. Training in conjunction with something like a knowledge graph can help reduce hallucinations and errors in LLM language generation, and moreover it would be a good effort in order to build a model that is more plausibly akin to us humans. 


Is it really the case, then, that LLMs have nothing to do with human language learning and understanding? Well, not
exactly. It is true that the human mind can learn statistically. What exactly the extent is to which statistical learning is used by humans to learn language is disputed, but LLMs show that several parts of language can be learned based on statistics, like grammar. The point is that language and thought seem to be separate in humans. A system that can imitate language well might fool you into believing it is able to understand and think, and this may certainly be useful for some things, but there is little reason to believe it can actually do this. At the very least not like humans can, certainly not enough to warrant the term AGI. [This is why LLMs are sometimes referred to as
Stochastic Parrots](https://en.wikipedia.org/wiki/Stochastic_parrot): It does not matter how well they bark, that doesn’t make them a dog. 

If you want to know exactly whether LLMs and knowledge graphs are suitable for your organization, then Y.digital is the right place to go!

***

[\[1\]](#_ftnref1) This is not exactly an undisputed claim, At the
very least, it developed only in humans with such a level of complexity.
