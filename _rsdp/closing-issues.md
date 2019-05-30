---
layout: process
title: "Closing issues"
---

There are two types of issues we use for development cycle: `Bug` and `Feature`. There are [other labels](/meta/rsdp/configuring-new-gitlab-project#configuring-issue-labels) for different purposes, however.

Anytime you got stuck or don't know how something works: remember, that a documentation issue.
You [need to state that](/meta/rsdp/how-tasks-are-assigned#i-can-not-find-any-information-in-any-of-these-sources). Task will be reassigned to you. Documentation will be updated shortly. And you will continue to work on it once your new current task will be solved.

See what ["To complete an issue"](/meta/rsdp/definition-of-done) is.


## How to complete a Feature

0. Ask any question you have in the issue comments before starting
1. Provide a simple write about how you are going to solve this issue,
   it might help to find wrong directions,
   and share ideas before writing any code.
   It might include a simple test to illustrate the desired functionality.
   Please, pay attention to this,
   since it may save a lot of time for both us and you
2. Create a new branch named `issue-${ISSUE_NUMBER}`
3. Write some code to complete this task
4. Write some additional tests to cover edge cases and some possible errors
5. Write documentation about what have you done and **why** you have done it this way
6. [Submit a merge request](/meta/rsdp/creating-merge-requests)

## How to fix a Bug

0. Ask any question you have in the issue comments before starting
1. Provide a simple write about how you are going to solve this issue,
   it might help to find wrong directions,
   and share ideas before writing any code.
   It might include a simple test to illustrate the desired functionality.
   Please, pay attention to this,
   since it may save a lot of time for both us and you
2. Create a new branch named `issue-${ISSUE_NUMBER}`
3. Write a test that is failing to validate that this bug exists
    1. If you can not recreate this bug, feel free to submit just a test with clear name and documentation linking to this issue
    2. If a test fails indeed, continue to the next step
4. Now, when you have a regression test ready - create a fix for that bug
5. Write any additional tests if needed
6. Write a [post-mortem entry](https://github.com/wemake-services/meta/blob/master/.gitlab/0000-post-mortem.md) about what was wrong
7. [Submit a merge request](/meta/rsdp/creating-merge-requests)

Good read about ["How to fix a bug"](https://sobolevn.me/2019/01/how-to-fix-a-bug).


## Notifications

Correct set of notifications allows users
to productively work with asynchronous communication.

Lack or huge amount of notifications ruins the process.
Managing them is a required skill for us.

We use `/subscribe` [gitlab quick action](https://docs.gitlab.com/ee/user/project/quick_actions.html)
to subscribe authors of issues and merge-requests to the resource.

However, there are several things to keep in mind:
1. You should enable [email notifications](https://docs.gitlab.com/ee/workflow/notifications.html) for the project
2. You can possibly enable pipeline browser notifications
3. You can subscribe to related issues and merge requests
4. You can use browser plugins


## Do not close issues by hands

You should never close issues by hands.
There's only one way to close an issue: [with a merge request](/meta/rsdp/creating-merge-requests#issues).
Any issue closed by anyone except the architect will be reopened.
