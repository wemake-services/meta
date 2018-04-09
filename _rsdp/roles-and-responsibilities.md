---
layout: process
title: "Roles and responsibilities for the project"
---

Each project has several required roles:

| Role      | Description | Responsibilities |
|-----------|:-----------:|:----------------:|
|   Client  |Single user, who represents a client|Monitoring progress, providing feedback, accepting results, providing business explanations|
| Architect |Single user, who represents the project lead|Is responsible for the project success, including: technical decisions, quality, documentation, and functionality|
| Developer |Users who deliver code|Solving given tasks, asking questions, delivering results|

You can always found out who's who by looking at the project's `README`. It will always have the `Client` and `Architect` defined.
So, all other users are `Developer`s. This table looks something like this:

| Role      | Name (GitLab username) |
|-----------|:-----------:|
| Client    |Ivanov Ivan (@ivanov_ivan)|
| Architect |Sobolev Nikita (@sobolevn)|


## Client has responsibilities too

Every person in the team has responsibilities. Person coming from the client
has them too.

Main responsibilities of the client are:

1. Validate incoming invoices and pay them in time
2. Answer questions that are asked during the development
3. Pay other people to audit our code
4. Review features that needs to be reviewed and provide feedback
5. Notify us about changes in the [requirements](/meta/rsdp/requirements-analysis/)


## Full list of possible actions

Should or can I ...?

| Action | Client | Architect | Developer |
|:------:|:------:|:---------:|:---------:|
|Create new project|❌|✓|❌|
|Configure new project|❌|✓|❌|
|Invite new people|❌|✓|❌|
|Create initial codebase|❌|✓|❌|
|Estimating issues|❌|✓|❌|
|Open "Bug" issue|✓|✓|✓|
|Open "Feature" issue|✓|✓|✓|
|Open "Documetation" issue|✓|✓|✓|
|Open "Research" issue|✓|✓|❌|
|Close issues manually|❌|✓|❌|
|Solve "Bug" issue|❌|✓|✓|
|Solve "Feature" issue|❌|✓|✓|
|Solve "Documetation" issue|❌|✓|✓|
|Solve "Research" issue|❌|✓|✓|
|Open merge request|❌|✓|✓|
|Review merge request|✓|✓|✓|
|Configure CI|❌|✓|✓|
|Deploy|✓|✓|✓|
|View statistics|✓|✓|✓|
