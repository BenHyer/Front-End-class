Goal
Today you are going to teach yourselves how to add routing to a React application using react-router-dom.

You have not been shown how to do this.

Your job is to research, experiment, use AI, read documentation, troubleshoot, and figure it out.

By the end of the lab, you should have a working multi-page React application and, more importantly, understand how it works.

Part 1: Multiple Pages
Create a React application with at least three different pages.

For example, you might have:

Home
Pokemon
About
Each page should:

Be its own React component

Have its own URL

Display different content

For example, your application might support URLs similar to:

/

/pokemon

/about
Research how react-router-dom makes this possible.

Part 2: Navigation
Create a reusable navigation component that allows the user to move between your pages.

For example:

Home | Pokemon | About
Navigation between pages should work like a React application rather than causing a traditional full-page browser reload.

You will need to research how react-router-dom handles navigation.

Part 3: Dynamic Pages
Create a page where part of the URL determines what the page displays.

For example, these URLs:

/pokemon/pikachu

/pokemon/charizard

/pokemon/ditto
should not require three separate page components.

One component should be capable of determining what was requested from the URL and displaying the appropriate information.

Research how react-router-dom supports this.

Part 4: Connect It to an API
Use the value from your dynamic URL to make an API request.

For example:

User visits:

/pokemon/charizard

        ↓

Your application determines:
"charizard"

        ↓

API request

        ↓

Display Charizard
You've already learned how to work with APIs. The new challenge is figuring out how to connect the URL to the API request.

Your page should appropriately handle:

Waiting for the API

A successful response

An unsuccessful API response

A request that fails

Do not assume every API request succeeds.

Part 5: Connect Your List to the Dynamic Page
Create or reuse a page that displays multiple items from an API.

For example:

Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Make each item navigable.

For example, clicking:

Charizard
could take the user to:

/pokemon/charizard
Your application should then use that URL to determine what information to retrieve and display.

The overall flow should be similar to:

List of Items
      ↓
User selects an item
      ↓
URL changes
      ↓
Application reads information from URL
      ↓
API request
      ↓
Details displayed
How you accomplish this is something your group needs to research.

Part 6: Invalid Pages
What should happen if someone visits something like:

/this-page-does-not-exist
Research how react-router-dom can handle a URL that doesn't match one of your application's pages.

Create a simple Not Found page.

Individual Questions
Even if you worked in a group, each student must answer these questions individually and in their own words.

1. What problem does React Router solve?
Explain why we would want routing in a React application.

2. How does your application decide what component to display for a particular URL?
Explain the pieces you discovered while researching React Router and how they work together.

3. How does navigation work?
Explain how you moved between pages and why you used that approach instead of a normal HTML link.

4. How did you create a dynamic page?
Explain how one component can handle URLs such as:

/pokemon/pikachu

/pokemon/charizard
without creating separate Pikachu and Charizard page components.

5. How did your component get information from the URL?
Explain how your code determines that:

/pokemon/charizard
means that the requested Pokémon is:

charizard
Include and explain the relevant code from your project.

6. Explain the entire process.
Suppose the user selects Charizard from your list.

Explain the process from:

User selects Charizard
all the way through:

Charizard's API information appears on the screen
7. What did you learn today that you didn't know before?
Explain at least one concept you had to research and how it works.

8. What was the most difficult part?
What caused the most trouble, and how did you eventually solve it?

What to Submit
Submit:

Your GitHub repository

Your individual answers to the questions above

Students who worked together may submit the same repository.

Your written answers must be your own.

Everyone should be able to explain the code in the shared repository.