# Proposal and Planning

**Name:** Proposal and Planning

## Overview

For your Advanced FrontEnd final, you will develop one of four applications. Each project has specific required features, but you will make decisions about how those features work, how the application is organized, and how users interact with it.

You may use AI throughout this project. Just make sure you know how everything works.

Before writing significant amounts of code, you need a clear plan.

The purpose of this assignment is to think through what you're building so that you can approach development with specific goals rather than simply asking AI to create an entire application.

## Final Project Assignments

| Assignment | Points |
| --- | --- |
| 1. Proposal and Planning | 50 |
| 2. Code Progress Check-in | 10 |
| 3. Classmate Prototype Testing | 10 |
| 4. Final Code Submission | 180 |
| 5. Final Presentation | 50 |
| **Total** | **300** |

---

## Part 1: Project Selection and Requirements (10 Points)

Choose one of the four projects below.

Briefly explain why you selected it and what interests you about building it.

Then review every required feature for your selected project.

For each feature, explain how you intend for it to work. Don't simply repeat the requirement. Describe the decisions you're making about how users will interact with the application.

For example:

**Requirement:** Create and save quizzes.

**Weak plan:** Users can create and save quizzes.

**Better plan:** Instructors will have a Quiz Library page with a Create Quiz button. They can enter a title, select a class or topic, and add questions. Clicking Save will store the quiz so it can be edited or hosted later.

---
I chose the Multiplayer Trivia Platform because of a party game I've played with my friends. Each round, a question is asked about one specific player. That player writes their real answer, and everyone else writes an answer too. Sometimes people try to imitate what that player would actually say, and sometimes they just write something funny. At the end of the round, everyone votes on the answers, and you earn points when other people vote for yours.

The app we used locked most of the best features behind a paid version, so I want to build my own. This project is a perfect opportunity to create it while practicing the skills I've learned in this class.





---

### Multiplayer Trivia Platform

Build a live classroom trivia game where instructors create quizzes and players compete using their own devices.

**Required features:**

- Admin login and protected quiz management.
    - Only admins will have accounts, because they're the ones creating and managing quizzes and questions. Admins sign in on a login page using their username or email and a password. Players don't sign in. They join a game freely and only see the current question displayed on their screen. The backend won't expose quiz data or other players' answers to players, so nobody can look up answers or see what others submitted to cheat.

- Create, edit, and delete quizzes.
    - In my version, quizzes are called **decks**. A deck is a list of questions, and some pre-made decks will come with the app. Decks don't store correct answers. The correct answer is whatever the player whose turn it is submits, and the other players' submissions are the answer choices.
    - Admins manage decks from a **Decks** tab that lists all available decks. From there they can create their own deck by writing their own questions. A possible extra feature is building a custom deck by picking questions from existing decks.
    - Admins can only edit and delete decks they created themselves. Editing a deck means adding, changing, or removing its questions. The default decks that come with the app can't be edited or deleted, since the app is meant to be used by different people and those decks are shared by everyone. A possible extra feature is a **Duplicate** button on default decks, which would copy a default deck into the admin's own custom deck so they can edit it however they want.

- Organize quizzes by topic.
    - Decks will be organized by topic, such as movies, movie characters, or TV shows. I'll come up with more topics as I build out the pre-made decks.

- Create questions with four choices and one correct answer.
    - Questions are created as part of a deck. When an admin builds a custom deck, they write their own questions for it. Instead of four fixed choices, the answer choices come from the players during the game: every player submits an answer, so the number of choices equals the number of players. The one correct answer is what the player whose turn it is submitted. Scoring is based on votes: every player earns 1 point for each player who votes for their answer, including the player whose turn it is. Players vote for whichever answer they like best, so funny or ridiculous answers can win just as easily as accurate ones. The tone of each round depends on the question. A silly question will draw funny answers, while a serious question will draw more realistic ones.

- Import questions from plain text using an asterisk to identify the correct answer.
    - Admins can add questions to a deck in two ways: by writing them inside the app, or by importing them from a plain-text file. Since correct answers come from players during the game, imported questions won't include answer choices or an asterisk-marked correct answer, only the question text.

- Host live games using room codes.
    - When an admin creates a game, the app generates a room code. Players open the app, enter that code, and join the game.

- Allow multiple players to join using nicknames.
    - After entering the room code and joining, each player enters a nickname. Players are asked to use their real name rather than a random one, because the questions are about the players themselves and everyone needs to know who is who. Names only show up on the leaderboard after each question. While players are choosing an answer, every choice is anonymous, so no one can tell whose answer is whose.

- Host controls for starting and advancing questions.
    - The admin hosts the game and also plays in it like everyone else. The host waits in the lobby while players join. Once everyone is in, the host starts the game and the questions begin. The game picks the order of turns randomly.
    - The game ends when the deck runs out of questions. The host can also end the game early with an End Game button. Either way, the game tallies the scores and shows the final leaderboard.
    - Each round has two phases. In the **writing phase**, every player writes their own answer to the question. This phase is timed for everyone except the player whose turn it is. That player has unlimited time, and the round can't move forward until they submit. In the **choosing phase**, players vote for their favorite answer. Players can't vote for their own answer. I probably won't put a timer on this phase, since picking an answer is much quicker than writing one. Once everyone has chosen, the leaderboard shows how many points each player earned that round and the overall standings.

- Players submit answers during live games.
    - Every player submits a written answer each round. If a player other than the one whose turn it is doesn't submit before the timer runs out, they sit out that round and get 0 points for it. They might still be allowed to choose an answer in the choosing phase, but they can't earn points from other players picking their answer because they didn't submit one. I still need to decide exactly how that case will work.

- Automatic scoring and a leaderboard.
    - Scores are calculated automatically after each round. Each player earns 1 point for every vote their answer received. The leaderboard lists every player ranked from first to last place. Players with the same score share a place. It appears after each round with that round's points and the overall standings, and again at the end of the game as the final leaderboard.

- Save completed game results.
    - When a game ends, the results are saved automatically, so the admin doesn't have to click anything. The saved results include the date and time, the deck that was played, the questions that were asked, every answer submitted for each question and how many votes it got, the players who played, and each player's final score.
    - Admins can look back at past games on a **Game History** page. It lists each game with its date, deck, and winner, and the admin can click into a game to see all of its questions, answers, votes, and the final leaderboard.


**Example quiz import format:**

```
1. What does JSX stand for?
JavaScript XML*
Java Syntax Extension
JavaScript Extension
JSON XML

2. Which React hook manages state?
useEffect
useState*
useRef
useMemo
```

---

## Part 2: User Workflows and Acceptance Tests (15 Points)

This is one of the most important parts of your proposal.

Describe at least three complete user workflows for your application.

A workflow explains how someone accomplishes a task, from beginning to end.

For each workflow, include:

- **Goal:** What is the user trying to accomplish?
- **Steps:** What actions will the user take?
- **Result:** What should happen when they finish?
- **Potential Problems:** What could go wrong, and how should your application respond?

### Example: Hosting a Trivia Game

**Goal:** An instructor wants to host a quiz for their class.

**Steps:**

1. The instructor logs in.
2. Opens their Quiz Library.
3. Selects a saved quiz.
4. Clicks Host Game.
5. The application generates a room code.
6. Students enter the code and join.
7. The instructor starts the game.

**Result:** All connected players enter the game and see the first question.

**Potential Problems:** If a student enters an invalid room code, they should receive a helpful error message. If no players have joined, the host should be warned before starting.

### Acceptance Tests

Write at least five acceptance tests for your application.

Acceptance tests describe specific behaviors you can verify once your application is built.

Examples:

- When two players join the same trivia room, both appear in the host's player list.
- When a player answers correctly, their score increases.
- When a task is moved to Done, the project's completion percentage updates.
- When a guild member's score falls below the configured threshold, they are flagged as At Risk.
- When the typing game ends, the winner is displayed and the match result is saved.

Your tests should be specific enough that another person could determine whether the feature works.

---

## Part 3: Application Structure and Navigation (10 Points)

Plan the major screens and components of your application.

### A. Pages and Navigation

Identify the pages or views your application will need.

For each page, describe:

- Its purpose.
- What information it displays.
- What actions users can perform.
- How users navigate to and from it.

Example:

| Page | Purpose | Main Actions |
| --- | --- | --- |
| Quiz Library | View saved quizzes | Create, edit, delete, host |
| Quiz Editor | Manage quiz questions | Add, remove, save |
| Game Lobby | Prepare a live game | Join, start |
| Game Screen | Play trivia | Submit answers |
| Results | Display final scores | View leaderboard, exit |

Your application must use React Router for navigation between meaningful routes.

### B. Component Planning

Identify at least five reusable React components you expect to create.

Explain what each component is responsible for.

For example:

| Component | Responsibility |
| --- | --- |
| QuizCard | Displays information about a saved quiz |
| QuestionEditor | Allows editing of individual questions |
| PlayerList | Displays connected players |
| Leaderboard | Displays player scores |
| GameTimer | Displays remaining question time |

### C. Interface Planning

Describe the general layout and visual style of your application.

Consider:

- How users will navigate.
- How important information will stand out.
- How the interface will work on different screen sizes.
- How users will know whether an action succeeded or failed.

You may include sketches, wireframes, or diagrams if they help explain your ideas, but they are not required.

---

## Part 4: Technical Architecture and Data Planning (10 Points)

Your application must demonstrate the major technologies and concepts covered in Advanced FrontEnd.

### Required Technologies

| Technology | Requirement |
| --- | --- |
| React + TypeScript | Components, props, hooks, and typed data |
| Tailwind CSS | Styling, layouts, and responsiveness |
| React Router | Navigation and protected routes |
| TanStack Query | Queries and mutations for backend data |
| State Management | React state and Context where appropriate |
| Forms | Input validation and error handling |
| Authentication | Login, logout, and protected functionality |
| Backend + Persistence | Working API and persistent data |
| WebSockets | Required for both multiplayer games; optional for other projects |

You may choose your backend technology. Options include Node.js, ASP.NET Core, Supabase, SQLite, and PostgreSQL.

### A. Technical Plan

Explain how you intend to use the required technologies in your application.

Focus on where and why you will use them rather than simply defining what they are.

For example:

- **TanStack Query:** I will use useQuery to load saved quizzes from the backend and useMutation to create, edit, and delete quizzes.
- **WebSockets:** I will use WebSockets to notify connected players when a new question starts and to update the leaderboard.
- **React State:** I will use state to track the currently selected answer and whether the player has submitted it.

### B. Data Planning

Identify the main types of data your application needs to store.

Examples:

| Project | Possible Data |
| --- | --- |
| Trivia Platform | Users, Quizzes, Questions, Game Sessions, Scores |
| Typing Defense | Players, Matches, Match Results, High Scores |
| Project Management | Users, Projects, Tasks, Team Assignments |
| Guild Dashboard | Guilds, Groups, Adventurers, Quests, Quest Results |

For each type of data, identify important properties and how it relates to other data.

You may use a table, TypeScript interfaces, or a simple diagram.

You do not need to create the actual database yet.

### C. Backend and Authentication

Identify your planned backend, database, and authentication approach.

Explain:

- What data your frontend will request or send.
- What information needs to be saved permanently.
- What functionality requires authentication.
- How the frontend will communicate with the backend.

You do not need to implement these systems yet.

---

## Part 5: Development Strategy and Challenges (5 Points)

### A. Development Order

List the major features in the order you plan to implement them.

Think about dependencies. For example, a trivia application needs a working quiz and game session before a leaderboard can display meaningful results.

Identify what you intend to have working by the first code progress check-in.

### B. Anticipated Challenges

Identify your three biggest anticipated technical challenges.

For each, explain:

- Why you expect it to be difficult.
- How you plan to approach it.
- How you will determine whether your solution works.

### C. Priorities

If you begin running out of time, how will you prioritize your remaining work?

Explain how you will ensure the required functionality is completed before spending time on optional features or visual polish.

---

## AI Use

You are encouraged to use AI tools for brainstorming, planning, coding, debugging, and learning.

However, you are responsible for the decisions and final results.

For this assignment, AI may help you explore options or identify potential problems, but your proposal should reflect decisions you understand and agree with.

During your final presentation, you will be expected to demonstrate your application and explain important parts of its implementation.

---

## Submission

Submit a single organized proposal document containing:

- Project selection and plans for all required features.
- At least three complete user workflows.
- At least five acceptance tests.
- Planned pages, navigation, and reusable components.
- Technical architecture and data plan.
- Development priorities and anticipated challenges.

You do not need to write code or create a GitHub repository for this assignment. Development begins with the next milestone.

Your proposal should be detailed enough to guide development, but it does not need to be excessively long. Clear, specific decisions are more valuable than lengthy explanations.

---

## Grading Rubric

| Category | Points |
| --- | --- |
| Project selection and required feature planning | 10 |
| User workflows and acceptance tests | 15 |
| Application structure and navigation | 10 |
| Technical architecture and data planning | 10 |
| Development strategy and challenges | 5 |
| **Total** | **50** |

> **Remember:** Your plan may evolve during development, but the required project functionality remains the same. The goal is to think through the application before you begin building it.
