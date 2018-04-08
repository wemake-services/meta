---
layout: process
title: "Creating issues"
---

All our work and communication happens on the project's issues.
Since we only pay for [closed issues](/meta/rsdp/closing-issues) it is very simple for all members of the project to understand: no one will do anything without an opened issue.
Since you will not be paid for it.


## How to open an issue

When opening a new issue you will need to select proper template for the required issue type.
![Issue templates](https://i.imgur.com/AqhpBfj.png)

Please, note that issues **without** a template would be closed.

Each template has its own required parameters and some common parts for all of them.
Head to the next section to learn more.


## What each issue must contain?

0. All issues must follow the same templates
1. All issues must be self-contained. A reader should only have your issue to know what do you want and how do you want it done
2. Each issue must have two roles: reporter and assignee, it does not matter if one person does cover two roles
3. Each issue must contain the estimated time, without estimated time you will not get paid for completing this issue. Note that **only architect** can set and approve estimated time
4. Each issue must have a single label (this is what is called a type)

### Bug

[Bugs](https://github.com/wemake-services/meta/blob/master/.gitlab/issue_templates/Bug.md) happen. Whenever you find one - feel free to open an issue with `Bug` template.
This type must contain several things:

1. How it should be
2. How it is now
3. Steps to reproduce, note that without these steps it will be impossible to solve this bug
4. Your environment: project version, OS type, etc

### Feature

When to open this type of issues?

- When the business asks you to implement something
- When you see a space for improvement

Each [feature](https://github.com/wemake-services/meta/blob/master/.gitlab/issue_templates/Feature.md) must contain several things:

1. A business task, why this feature is even required? This is the most important part. Without understanding the business task it is impossible to resolve a feature
2. Is there any technical constraints? Something we should care about


### Documentation

TODO(@sobolevn)

### Research

TODO(@sobolevn)


## Further reading

See [how to close issues](/meta/rsdp/closing-issues).
