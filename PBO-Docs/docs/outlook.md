---
title: 'Outlook'
position: 4
---

A short overview of features that are currently not finished or planned.
However, they are considered to be a part of future updates.

## Overview Mode

The Overview Mode is currently under construction, and although it is possible to use this mode right now, it does not
provide any advantages or special features compared to the focus mode despite showing all created entries.
At the moment, it shows all tasks in a three-column grid format, where scrolling is possible, but it should have special
functionalities.
Also, the [issues](./dev-notes/known_issues#overview-mode) regarding this mode are meant to be fixed in the future.

## Tags

Tags right now are a prototype feature that is not fully implemented.
They should provide a new way to group entries.
Each tag will have a color assigned, so the user can easily distinguish between different tags/entries.

## Scheduling algorithm

It is planned that the app should use an algorithm to calculate the urgency and importance of your tasks by using the
data stored within the entries.
That way in the Focus Mode, you should only be able to see the top 5 most crucial tasks
selected by the algorithm.
Right now this functionality is not implemented.

## Filter

As another way to only view specific entries, a filter functionality is planned.
It would provide a way to show tasks with a specific deadline or expenditure.
This feature is not implemented yet.

## Restore-button

When an entry is deleted or ticked, right now it is gone and cannot be recovered.
A button should appear right after removing an entry to provide a way to undo this action.
