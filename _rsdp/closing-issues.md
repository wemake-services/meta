---
layout: process
title: "Closing issues"
---

There are two types of issues we use for development cycle: `Bug` and `Feature`. There are [other labels](https://wemake.services/meta/rsdp/configuring-new-gitlab-project#configuring-issue-labels) for different purposes, however.

Anytime you got stuck or don't know how something works: remember, that a documentation issue.
You [need to state that](https://wemake.services/meta/rsdp/how-tasks-are-assigned#i-can-not-find-any-information-in-any-of-these-sources). Task will be reassigned to you. Documentation will be updated shortly. And you will continue to work on it once your new current task will be solved.

See what ["To complete an issue"](https://wemake.services/meta/rsdp/definition-of-done) is.


## How to complete a Feature

0. Ask any question you have in the issue comments before starting
1. Create a new branch named `issue-${ISSUE_NUMBER}`
2. Implement a simple test to illustrate the desired functionality
3. Write some code to complete this task
4. Write some additional tests to cover edge cases and some possible errors
5. Write documentation about what have you done and **why** you have done it this way
6. [Submit a merge request](https://wemake.services/meta/rsdp/creating-merge-requests)

## How to fix a Bug

0. Ask any question you have in the issue comments before starting
1. Create a new branch named `issue-${ISSUE_NUMBER}`
2. Write a test that is failing to validate that this bug exists
    1. If you can not recreate this bug, feel free to submit just a test with clear name and documentation linking to this issue
    2. If a test fails indeed, continue to the next step
3. Now, when you have a regression test ready - create a fix for that bug
4. Write any additional tests if needed
5. Document in docstrings in general documentation what was wrong
6. [Submit a merge request](https://wemake.services/meta/rsdp/creating-merge-requests)


## Do not close issues by hands

You should never close issues by hands.
There's only one way to close an issue: [with a merge request](https://wemake.services/meta/rsdp/creating-merge-requests#issues).
Any issue closed by anyone except the architect will be reopened.
