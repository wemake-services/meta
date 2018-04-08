---
layout: process
title: "Definition of \"Done\""
---

Since we pay per finished (or **done**) task, it should be obvious for every person in the team: is this task done or not?

So, we need to specify a strict number of rules to define "Done" state.


## Existing approaches

Scrum specifies multiple ([1](https://www.scrumalliance.org/community/articles/2014/january/why-using-a-definition-of-done-in-an-agile-project), [2](https://www.scrumalliance.org/community/articles/2008/september/what-is-definition-of-done-(dod))) definitions of what "Done" is.

There are also other definitions around the web. I (@sobolevn) personally really like this [Russian article](http://ksoftware.livejournal.com/202173.html).


## Our definition

A task is considered done **only when** the corresponding ticket is **closed**.

### Prerequisites

- A task should be [created](/meta/rsdp/creating-issues)
- You should be assigned to the task before-hands. See ["How tasks are assigned"](/meta/rsdp/how-tasks-are-assigned)
- You have asked all the required questions to understand what you should do

### Steps to achieve it

Since tasks are only closed by a merge request, it may require several steps:

- You have created a new branch following [our standards](/meta/rsdp/closing-issues)
- You have added some code to fix a bug or to implement some feature
- You have added new tests to cover new functionality or regression tests to confirm that bug is fixed
- You have added comments to illustrate your design decision in a source code
- You have updated project documentation if required
- You have updated installation instructions or build tools if required
- You may leave some `TODOs` for future development if required
- You have created a merge request with the [proper message](https://github.com/wemake-services/issue-templates/blob/master/.gitlab/merge_request_templates/Default.md) from your branch into `master`
- You have filled in every required piece of information in the template, such as: actions you did, time spent, issue to close
- All the preconfigured `CI` stages pass: existing tests, style and quality checks pass
- Your code passes a code review from one or several other developers including at least one architect
- Your code has been merged into `master`

It may also require multiple iterations for you:

- Your code may fail some tests or style checks, so you would need to fix that
- Your code may fail a code review for multiple reasons: design, code quality, business logic, performance. You will need to fix that
