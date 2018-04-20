---
layout: process
title: "How tasks are assigned"
---

Assigning tasks is the most pleasant thing to do.
However, you have to keep in mind a lot of things to be a good assigner.


## Rules

1. No one should have zero tasks at a time
2. Each person can have only one task at a time. Because switching contexts is [too expensive](https://www.petrikainulainen.net/software-development/processes/the-cost-of-context-switching/)
3. Any person should be able to solve any task
4. Anyone can reject any task (with some penalties)
5. Each task should have only one assignee and one assigner


## Code blame

There is such a good thing as a [`Code Blame`](https://dzone.com/articles/git-guilt-blame-and-code-review).
What does it mean?
It means that there is a person responsible for every piece of code written in a large project.

When you write some code it always looks good to you (it should at least).
But when you pass the code to another developer some hidden issues start to uncover:

- How to run this program?
- What does this piece of code do?
- Why did you need this hack?
- Is it safe to use this method?

It is a matter of documentation to answer these questions.

When we shuffle developers they look at the code of each other.
In other words, they are constantly making a code review of the entire project.

And since we do not use any modern (or even old-fashioned) chats or messengers, it is only possible to get information in three sources (placed in order of importance):

- The code itself
- Documentation
- GitLab issues


## How the process looks like

So, that's how it looks like:

0. Architect has selected a task to be assigned
1. Architect found all free people at the moment
2. Architect sorted them by decreasing Code Blame

The task is then assigned to a free person with the lowest Code Blame for this part of the project.

This part uses some automation, so we don't have to do it manually.


## I can not find any information in any of these sources

Well, situations like this may and will happen. How do we handle them:

0. You got stuck, add "documentation" label to the current issue and ping [your architect](/meta/rsdp/roles-and-responsibilities) with the request to fix some particular parts that are unclear right now. You will be [assigned a new issue](/meta/rsdp/how-tasks-are-assigned)
1. The architect will find the person who [is blamed](https://gitlab.com/gitlab-org/gitlab_git/blame/master/README.md) for this piece of code
2. The architect will discuss everything he needs to know in the related issues with other developers
3. The architect will update the documentation to answer all your questions
4. If you are satisfied remove "documentation" label, say "Thanks! 👍"
5. Continue to solve this issue as a normal one, when your new current issue will be solved

That's it!
