---
layout: process
title: "Configuring new Gitlab project"
---

## Steps to configure new GitLab project

### Create the project itself

If needed create a subgroup for the project:

![Subgroup](https://i.imgur.com/tnC71rv.png)

Then, just hit `+`:

- Choose `wemake.services` as the project owner
- Project should be named with all lowercase letters and `_` sign to replaces spaces
- Set project visibility level to `Internal`.

![New project](https://i.imgur.com/JstdgOU.png)

### Creating initial project structure

We are using different generators to create a boilerplate code for the project.
On this step it is required to create a project with the required generator and the push the initial code to the repository.

Also, make sure that the source code contains `.gitlab-ci.yml`. If it does not, the project is not considered valid. And will be **deleted**.

### Adding project roles

Each project's `README` should contain the [current roles](https://wemake.services/meta/rsdp/roles-and-responsibilities) for this project.
Who is the client?
Who is the architect?

### Adding issue templates

It is required to add issue and merge request templates to the repository. In order to copy [the latest version](https://github.com/wemake-services/meta) run locally:

```bash
link="https://github.com/wemake-services/meta/tree/master/.gitlab"; rm -rf .gitlab; svn checkout ${link/tree\/master/trunk}
```

### Configuring protected branches

- Protect `master` branch. Only `@sobolevn` can push to it

![Imgur](https://i.imgur.com/xrfSCzQ.png)

### Configuring protected tags

- Protect tags starting with `v*`. They are used for a release process.

![Imgur](https://i.imgur.com/YRV6ESu.png)

### Configuring push rules

- Set `Do not allow users to remove git tags with git push`
- Set `Check whether author is a GitLab user`
- Set `Prevent committing secrets to Git`
- Configure `Branch name` to follow [our format](https://wemake.services/meta/rsdp/closing-issues) `issue-\d+`

![Push rules](https://i.imgur.com/l9L6nYM.png)

### Configuring merge requests

- Set `Merge method` to `Fast-forward merge`, meaning only branches without conflicts could be merged. Otherwise, it should be rebased locally before creating a merge request
- Activate `Merge request approvals`
- Set number of approvals to `1` and `@sobolevn` to the `Approvers`
- Set `Can override approvers and approvals required per merge request`
- Set `Remove all approvals in a merge request when new commits are pushed to its source branch`
- Set `Only allow merge requests to be merged if the pipeline succeeds`
- Set `Show link to create/view merge request when pushing from the command line`

![Merge requests](https://i.imgur.com/TGe6uDO.png)

### Configuring issue labels

Our workflow only has `4` possible states of issues:

- `bug` with red color
- `feature` with blue color
- `documentation` with green color
- `research` with purple color

These labels should be created.

![Imgur](https://i.imgur.com/KjO9Ncu.png)

### Creating issue boards

Issue boards are only required to make Cycle Analysis work.
Create 4 issue boards from the issue labels:

![Imgur](https://i.imgur.com/ewcI5gG.png)

### Configuring deploy docker registry token

Deploy token for `docker` registry is created in personal settings per project.
Each token should be named the same as a project it uses.

Each token should be valid for a year.
Each token should have only `read_registry` permission.

![Imgur](https://i.imgur.com/YlXYpGu.png)

## Done

You are all set! You can now start using the project.
