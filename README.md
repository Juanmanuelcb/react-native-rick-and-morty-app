# React Native Technical Challenge: The Rick and Morty Character Guide

## **Objective**
The goal of this challenge is to assess your ability to build a clean, scalable, and user-friendly mobile application using React Native and modern development practices. You will create an app that allows users to browse characters from the Rick and Morty series. This task should take approximately 3-4 hours to complete.

## **Brief**
You are tasked with building a mobile application using the [Rick and Morty API](https://rickandmortyapi.com/documentation/). The application should be built with React Native, TypeScript, and Expo.

## **Tasks:**
### 1. **Character List Screen:**

* On the initial screen, fetch and display the first 5 characters from the API (/character endpoint).
* Implement an infinite scroll feature. As the user scrolls to the bottom of the list, the app should fetch and append the next 5 characters.
* Each character should be displayed in a Card component.

### 2. **Character Card Component:**

* The card must display the character's:
  * Image
  * Name
  * Species
  * Gender
  * Origin (use origin.name)


* The background color of the card should visually indicate the character's status:
  * Green-tinted for "Alive."
  * Red-tinted for "Dead."
  * Gray-tinted for "unknown."

### 3. **Filter Feature:**

* Implement filtering capabilities on the Character List Screen using the API's built-in filtering parameters:
  * **Name:** Filter characters by the given name.
  * **Status:** Filter characters by the given status (alive, dead, or unknown).
* Display appropriate feedback when no results are found.

### 4. **Favorite Management:**

* Add a "Favorite" button (e.g., a star icon) to each character card.
* Tapping the button should add or remove the character from a favorite list.
* The list of favorite characters must persist after the application is closed and reopened.
* Implement a separate "Favorites" screen to display only the user's favorite characters, where they can also be removed from the list.

### 5. **Technical Requirements:**

*   **Language**: TypeScript (v5+)
*   **Framework:** React Native (v0.79+) with Expo
*   **Code Quality:** The project should have a clear and scalable architecture.

## **What We Will Be Looking For**
* **Clean Architecture:** How you structure your files, components, and logic.
* **TypeScript Proficiency:** Your use of types and interfaces to create a robust application.
* **Component Design:** Reusability and clarity of your React components.
* **State Management:** Your approach to handling local and remote data.
* **Problem-Solving:** How you approach the requirements and overcome any challenges.
* **UX & Polish:** Clarity of UI, accessibility labels, responsiveness (pull-to-refresh, loading states).
* **Documentation:** README clarity, how to run and test, and explanation of trade-offs.

## **CodeSubmit**
Please organize, design, test, and document your code as if it were going into production—then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

**The CKW AG Team**