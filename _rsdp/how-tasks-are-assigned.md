---
layout: process
title: "How tasks are assigned"
---

There is such a good thing as a [`Code Blame`](https://dzone.com/articles/git-guilt-blame-and-code-review).
What does it mean?
It means that there is a person responsible for every piece of code written in a large project.


## Why is it an issue?

When you write some code it always looks good to you (it should at least).
But when you pass the code to another developer some hidden issues start to uncover:

- How to run this program?
- What does this piece of code do?
- Why did you need this hack?
- It is safe to use this method?

It is a matter of documentation to answer these questions.


## Our solution

When we shuffle developers they look at the code of each other.
In other words, they are constantly making a code review of the entire project.

And since we do not use any modern (or even old-fashioned) chats or messengers, it is only possible to get information in three sources (placed in order of importance):

- The code itself
- Documentation
- GitLab issues


## I can not find any information in any of these sources

Well, situations like this may and will happen. How do we handle them:

0. You got stuck, add "documentation" label to the current issue and ping [your architect](https://wemake.services/meta/rsdp/roles-and-responsibilities) with the request to fix some particular parts that are unclear right now. You will be [assigned a new issue](https://wemake.services/meta/rsdp/how-tasks-are-assigned)
1. Architect will find the person who [is blamed](https://gitlab.com/gitlab-org/gitlab_git/blame/master/README.md) for this piece of code
2. Architect will discuss everything he needs to know in the related issues with other developers
3. Architect will update the documentation to answer all your questions
4. If you are satisfied remove "documentation" label, say "Thanks! 👍"
5. Continue to solve this issue as a normal one, when your new current issue will be solved

That's it!
