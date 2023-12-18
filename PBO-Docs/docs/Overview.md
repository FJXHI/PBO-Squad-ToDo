---
title: Overview
sidebar_position: 0
---

# Overview

See [setup guide](Install) for installation instructions.

# What is this about?

This is a TODO-App we are developing for the PBO course at the HTW Dresden.
The App is supposed to be used on a mobile device and should be able to work offline, once the PWA works.

The ToDo-App has three main components:
 - compact View
 - detailed View
 - add View

## compact View
The compact View, also named focus mode, is supposed to only show the five most important tasks, so the user is taken the burden of having to look at all the tasks at once.
Our hope is that this will help the user to not choose a task that is not important at the moment.

## detailed View
The detailed view is currently under construction and will probaly not be finished in time for the deadline.
The main idea is to show all tasks in a three column grid format, where scrolling is possible.

## add View
The user also has the option to add tasks, delete or edit them. while deleting
Each ToDo-entry has the following attributes:
 - title (required)
 - description
 - due date
 - est. duration
 - tags

Tags are also not implemented yet, but will be used to filter or sort tasks by their tags, so a use can add a tag "work" to all tasks that are related to work and then filter for all tasks with the tag "work". Each tag will have a color assigned, so the user can easily distinguish between different tags/entries.