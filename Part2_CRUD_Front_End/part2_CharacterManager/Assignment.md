Create a React + TypeScript application that connects to the ASP.NET Core API configured in the previous assignment.

Your application will allow users to view, create, update, and delete characters stored in PostgreSQL.

This assignment will practice:

React components and props

TypeScript types

useState and useEffect

API requests using fetch()

HTTP methods (GET, POST, PUT, DELETE)

Forms and event handling

Error handling

Loading states and conditional rendering

We will begin building this application together in class. Anything not completed during class becomes homework.

You are responsible for submitting a completed, functional application.

Part 1: Project Setup
Create a new React + TypeScript application using Vite.

Your frontend must communicate with the C# backend from Assignment 1.

Make sure your backend is running and that you can retrieve characters through Swagger before beginning.

Part 2: CRUD Requirements
Requirement 1: Read Characters (GET)
Retrieve characters from the backend API and display them.

Each character must display:

Name

Class

Level

Health

Mana

Use useState to store the characters and .map() to display them.

Characters should load automatically when the application opens.

Requirement 2: Create Characters (POST)
Create a form that allows users to add a new character.

The form must allow users to enter a name, class, level, health, and mana.

When submitted, send a POST request to the backend.

After successfully creating a character, update the displayed character list without requiring a manual browser refresh.

Requirement 3: Update Characters (PUT)
Allow users to edit an existing character.

The editing form should display the character's current information.

Users should be able to modify the character's information and save their changes.

Send a PUT request to the appropriate endpoint.

After a successful update, refresh the displayed information without requiring a manual browser refresh.

Requirement 4: Delete Characters (DELETE)
Provide a Delete button for each character.

Clicking the button should send a DELETE request to the backend.

After successful deletion, remove the character from the displayed list without requiring a manual browser refresh.

Requirement 5: API Error Handling
Your application must handle unsuccessful API requests.

If the backend returns an error message, display it to the user.

For example, if the API rejects a character because of an invalid class, your frontend should display the actual validation message rather than a generic failure message.

Requirement 6: Loading State
Display a loading message or spinner while retrieving characters.

The loading indicator should disappear when the request completes, whether it succeeds or fails.

Part 3: Validation Challenge
Some characters in the provided database may not satisfy the API's validation rules.

After completing your CRUD functionality, attempt the following:

Increase Uther Lightbringer's health by 25.

Change Shadowheart's level to 15.

Increase Geralt of Rivia's health by 10.

Observe the results.

Answer the following questions in your README:

Which updates succeeded, and which failed?

What error messages did the backend return?

Why might a character be successfully retrieved but rejected when updated?

How does your React application display API errors?

Do not modify the backend validation rules to make these updates succeed.

Part 4: Submission
Submit a GitHub repository containing your completed React application.

Include:

Your React + TypeScript source code.

Working GET, POST, PUT, and DELETE operations.

API error handling.

A loading indicator.

A README containing your validation challenge answers.

Do not submit node_modules, database passwords, or other secrets.

Grading Rubric
Criteria	Points
API connection and GET functionality	15
Character display using React components	15
POST: Create characters	20
PUT: Update characters	20
DELETE: Remove characters	10
API error handling	10
Validation challenge and README	5
Loading indicator	5
Total	100
