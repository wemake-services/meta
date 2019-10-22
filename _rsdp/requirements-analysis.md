---
layout: process
title: "Requirements analysis"
---

After you have understood that we [won't give any estimates](/meta/rsdp/estimates), let's find out **what** you need and [**when**](/meta/rsdp/how-to-always-be-on-time) you need it.

Basically, you will need to answer some simple questions about:
1. What is the product going to do?
2. Who are the users of this product?
3. What users' problem are we solving by this product?
4. When do you **really** need this product?

This questions will help both you and us to understand what and why we are developing this product.
Of course, it is not so simple. There is even [a special standard](https://standards.ieee.org/findstds/standard/830-1998.html) in the industry to help with this process.

And there are multiple techniques to do it.


## Deliverables

You will receive a formalized requirements document.
It will contain several parts.

### Glossary

A glossary is one of the most important parts of the requirements analysis.
It is also the easiest part.

The glossary is a list of terms used in the project's requirements.
For example, it allows understanding what `GOST` is,
why a user is not the same person as a supervisor. And so on.

### Requirements prioritization

We both know that some requirements are more important than the others.
But we need to know each and why. We use `MoSCow` method to prioritize requirements.
This method is based on four main categories: `must`, `should`, `could`, and `won't`.
Here's an example of how it looks like:

| Feature                                                        | Priority |
|----------------------------------------------------------------|:--------:|
| Multiple message providers could be supported                  |   Could  |
| Authenticated users must be able to send private messages      |   Must   |
| Authenticated users must be able to log out                    |   Must   |
| There should be a notification about incoming private message  |  Should  |
| Encrypted private messages won't be supported                  |   Won't  |

We use these categories to make sure that we all understand which features are the most important ones.
And which features are out of the scope of this project (for now or ever).

We try to plan our `Milestones` to cover the most important features first.
And after that cover all less important ones.

We also sometimes use these prioritized requirements to cut off some features.
We never cut off `must` features, we cut off `should` features only if there is a valid reason, and we cut off `could` features when just in a hurry. We never cut off features without client's written confirmation.

### User stories

"[User stories](https://en.wikipedia.org/wiki/User_story)" is a way to specify requirements without wasting much time and resources on the process. User story (in our interpretation) is a valid [`gherkin`](https://cucumber.io/docs/gherkin/) file, that will be later used for acceptance testing.

Yes, we write requirements that later will be used as tests for the software we build.
These files serve two goals: to specify user stories and to **verify** them later.
In this case, it is very hard to misunderstand each other.
And you can be sure that the software works and does what you need.

Here's an example of how `gherkin` looks:

```gherkin
Feature: Account Holder withdraws cash

  Scenario: Account has sufficient funds
   Given the account balance is $100
     And the card is valid
     And the machine contains enough money
    When the Account Holder requests $20
    Then the ATM should dispense $20
     And the account balance should be $80
     And the card should be returned
```

### Business process modeling

We use [`BPMN`](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) to model the key parts of the business process.

Why is this important?
Because we can sync almost everything what's happening in the system in a simple scheme.

That gives a big insight into how things **must** work.

You can have a look at our the real `bpmn` examples [here](https://github.com/wemake-services/meta/tree/master/processes).

### Non-functional requirements

A non-functional requirement is a requirement that specifies criteria that can be used to judge the operation of a system, rather than specific behaviors.
Non-functional requirements might be tricky. Sometimes clients what to have:

- Fault-tolerance server
- Fast application
- Clean code

But, as we already know, all requirements must be verifiable.
So, we will be able to perform tests and measure the results.
Let's change the way we define them to make them measurable:

- A server should be scaled by the factor of 3, uptime should be over 98%
- An application must respond to 90% of requests not longer than in 130 ms
- Code must follow our style-guide, it should also pass an external audit

### Milestones

We also provide a list of milestones for the project.
Milestones are some approximate points in
time with some approximate functionality.
It is really easy to understand how we are going to deliver results looking
on this list.

How milestones are defined? After we have all our requirements prioritized
we can start working on the most important ones. While working on these
tasks we start to understand what to do next. And when it is going to be ready.

We also do not make any [estimates](/meta/rsdp/estimates/) here. Except for the next milestone.

That's usually takes us around two weeks to create a
working prototype with a proof of concept.
Then we define next milestone's [deadline](/meta/rsdp/how-to-always-be-on-time/).
We try to keep iterations as short as possible to get the feedback from users
and clients as soon as we can. But we are not limited in making them equal as
Scrum suggests. This allows us to plan our releases and features naturally.

Please, keep in mind, that we can [drop some features](/meta/rsdp/how-to-always-be-on-time/#what-happens-when-we-feel-that-we-will-be-late)
from the milestone if we understand that we are going to be late.
Deadlines are never missed.


## How the process looks like

The process consists of several steps:

![Requirements process](https://i.imgur.com/LyhzqPA.png)

1. Initial discussion. This can be a meeting or a conference call. At this point, we collect all your initial requirements. Involves: architect, project manager, client
2. Analysis. Then we analyze your requirements. We remove duplicate ones, find the most important ones, spot the inconsistencies. Involves: architect, project manager
3. Then we create intermediate results. We draw schemes, write `gherkin` files. Involves: architect, project manager
4. And we show them to the client and ask questions we have. When we get answers, we return to analyzing the new information. Involves: architect, project manager, client
5. The final result. When there no more questions to answer, the process is completed. We send the final result to the client. Involves: project manager, client


## Price

We will guide you through a process of requirements analysis.
There are two options:


|      Scope     |       Time      |      Money     |
|:--------------:|:---------------:|:--------------:|
|  Small project |  5 working days | 150.000 rubles ([convert to $](http://www.countrycurrencyrates.com/en/convert/RUB/USD/150000)) |
| Medium project | 10 working days | 300.000 rubles ([convert to $](http://www.countrycurrencyrates.com/en/convert/RUB/USD/300000)) |

We will split large projects into smaller ones and
go through the requirements analysis process multiple times.
