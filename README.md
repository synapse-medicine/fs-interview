# Code assessment

## Provided material

* A Java 21 Spring backend with a populated SQLite in memory database and endpoints to:
    * get a Patient by id
    * update a Patient's allergies
* A Node 20 React application with the following pages:
    * a home page that lists all patients
    * a page that displays the patient's information
    * an error page
* A Dockerfile and a Docker compose
* A basic CI using GitHub Actions

## Instructions

### Adding a new feature

Your first task will be to develop a new feature.
The goal is to add a search molecule component to the patient profile page.
This component will display a list of molecules based on the searched text.
When the user selects a molecule from this list, it should be added to the patient allergies using the existing endpoint.

This gives the following user workflow:
1. The user clicks on the search field and search for a molecule using free text.
2. The user selects the molecule from the list of results that match the search text.
3. The user chooses the molecule that is added to the patient's allergy list.

You are free to develop the feature as you want. The UX and the design are taken into account, but you should not spend too much
time on it.

### Updating the CI

Your second task is to change the current GitHub Actions CI to build the Docker images provided in the repository.

### Going further

Your last task is to be critical :smile:.

The provided code is not representative of the expectations we have for production code (on purpose).
We instead encourage you to build the feature in a way that you think is the best.
We **don't** expect you to fix the current code though, just to add the new feature.

List what you would improve in the codebase (current or in your new feature) in the `Improvements section`.

## Improvements:

> List here what you would improve in the provided codebase as well as what you could improve in your new feature
> if you had more time

* ...