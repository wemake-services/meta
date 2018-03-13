---
layout: process
title: "Creating merge requests"
---

Please, note that **merge request** == **pull request**.
This inconsistency comes from how `GitLab` and `GitHub` (respectively) calls them.

So, these terms can be freely used as synonyms.


## When to create a merge request

There are only two reasons to create a merge request:
1. You are done, a code is ready to be merged into `master`
2. You are stuck. You don't know what to do next. Nothing works and you want to ask for an advice

When the first use-case is common, the second one is critical to the long-term happiness and a project success.
There is no need to hide problems. And our goal is to reveal them as soon as possible.

So, whenever you find yourself in a situation when you are completely stuck - create a merge request with `WIP:` sign.


## How to create a merge request

0. You were assigned to some issue. You have created a separate branch to work on it
1. When you are ready to push your changes, you will need to create a remote branch with the same name as your local branch
2. Push your code to this remote branch
3. Then you will be able to create a merge request. You will see something like:
   ![Creating merge request](https://i.imgur.com/rm3TjVM.png)
4. Hit "Create merge request"
5. Then select source (your branch) and target branch (`master`). Sometimes this step is resolved automatically
   ![Selecting target and source branches](https://i.imgur.com/AQqesUs.png)
6. Hit "Compare branches and continue". Sometimes this step is resolved automatically
7. You will see something like this:
   ![Final step](https://i.imgur.com/Wz9vEHK.png)
8. Select "Default" in "Title" combobox
9. Now, the only thing left here is to fill in everything we need to know


## Merge request heading

Merge request heading consists of three main parts: conditional `WIP:`, `${ISSUE_NUMBER}`, explaining heading.
You should only use `WIP:` when this merge request [is not ready to be merged yet](https://wemake.services/meta/rsdp/creating-merge-requests#when-to-create-a-merge-request).
Then, you should place your issue number.
Merge request heading must have a sane name, very close to the one used for the original issue.

All in one: `WIP: 823 Adds a "remember me" to user registration form`.
When your merge request is ready, you will need to remove `WIP:` part.


## Merge request template

We are using a single template for all our merge request.
This template tries to contain as much information as possible.
It also has a direct link to this documentation.

What are the most important parts?

### Checklist

**Required.**

The first thing you will see is a checklist ([syntax](https://github.com/blog/1825-task-lists-in-all-markdown-documents)).
It asks some important questions.
And you should answer them and check appropriate items.
If you found yourself in a situation when you can not check some of the items - it is a good sign, that this merge request will not be accepted.

### Issues

**Required.**

You should clearly specify which issue this merge request will close when merged.
You could also specify what issues this merge request references. Some old issues maybe?
[Format](https://docs.gitlab.com/ee/user/project/issues/closing_issues.html#via-merge-request) is very simple: `closes #issue_number` to close some specific issue. Use `refs #issue_number` to reference an issue.

### Time spent

**Required.**

You will need to specify [how much time you have spent](https://docs.gitlab.com/ee/workflow/time_tracking.html) to resolve this issue.
When your merge request is `WIP` you would need to update that.
Note, that this time is only required for our internal statistics and is not used for anything else.
So, there is no need to transform this number in any way.
Use `/spend Xh` where `X` is the number of hours.

### Assignee

**Required.**

You will need to include `/assign me` [command](https://docs.gitlab.com/ee/user/project/quick_actions.html) in the merge request body.
This line is needed to self-assign this request. Every merge request needs to be self-assigned.

### Feedback

Optional.

Did you spot anything we can improve while working on this issue?


## Finishing

Click "Submit merge request" button and you are done!
