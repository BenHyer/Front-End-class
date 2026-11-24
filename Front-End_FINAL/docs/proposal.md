# Proposal and Planning

**Name:** Proposal and Planning


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
    - Admins manage decks from a **Decks** tab that lists all available decks. Anyone can browse the Decks tab without an account, so a group of friends can pick a deck together, but only admins can create, edit, or host with a deck. From there admins can create their own deck by writing their own questions. A possible extra feature is building a custom deck by picking questions from existing decks.
    - Admins can only edit and delete decks they created themselves. Editing a deck means adding, changing, or removing its questions. The default decks that come with the app can't be edited or deleted, since the app is meant to be used by different people and those decks are shared by everyone. A possible extra feature is a **Duplicate** button on default decks, which would copy a default deck into the admin's own custom deck so they can edit it however they want.

- Organize quizzes by topic.
    - Decks will be organized by topic, such as movies, movie characters, or TV shows. I'll come up with more topics as I build out the pre-made decks.

- Create questions with four choices and one correct answer.
    - Questions are created as part of a deck. When an admin builds a custom deck, they write their own questions for it. Instead of four fixed choices, the answer choices come from the players during the game: every player submits an answer, so the number of choices equals the number of players. The one correct answer is what the player whose turn it is submitted. Scoring is based on votes: every player earns 1 point for each player who votes for their answer, including the player whose turn it is. Players vote for whichever answer they like best, so funny or ridiculous answers can win just as easily as accurate ones. The tone of each round depends on the question. A silly question will draw funny answers, while a serious question will draw more realistic ones.

- Import questions from plain text using an asterisk to identify the correct answer.
    - Admins can add questions to a deck in two ways: by writing them inside the app, or by importing them from a plain-text file. Since correct answers come from players during the game, imported questions won't include answer choices or an asterisk-marked correct answer, only the question text, with one question per line. Questions use a `{player}` placeholder for the player the question is about, such as `What is {player}'s favorite movie?`, and the game fills in the nickname of the player whose turn it is.

- Host live games using room codes.
    - When an admin creates a game, the app generates a room code. Players open the app, enter that code, and join the game.

- Allow multiple players to join using nicknames.
    - After entering the room code and joining, each player enters a nickname. Players are asked to use their real name rather than a random one, because the questions are about the players themselves and everyone needs to know who is who. Names only show up on the leaderboard after each question. While players are choosing an answer, every choice is anonymous, so no one can tell whose answer is whose.

- Host controls for starting and advancing questions.
    - The admin hosts the game and also plays in it like everyone else. The host waits in the lobby while players join. Once everyone is in, the host starts the game and the questions begin. The game picks the order of turns randomly.
    - The game ends when the deck runs out of questions. The host can also end the game early with an End Game button. Either way, the game tallies the scores and shows the final leaderboard.
    - Each round has two phases. In the **writing phase**, every player writes their own answer to the question. This phase is timed for everyone except the player whose turn it is. That player has unlimited time, and the round can't move forward until they submit. In the **choosing phase**, players vote for their favorite answer. Players can't vote for their own answer. This phase has no timer, since picking an answer is much quicker than writing one. If someone is taking too long, the host can click **Skip to Results** to end voting early, and any missing votes simply don't count. Once everyone has chosen, the leaderboard shows how many points each player earned that round and the overall standings.

- Players submit answers during live games.
    - Every player submits a written answer each round. If a player other than the one whose turn it is doesn't submit before the timer runs out, they sit out that round and get 0 points for it. They can still vote in the choosing phase so they stay involved, but they can't earn points because they don't have an answer for anyone to vote for.

- Automatic scoring and a leaderboard.
    - Scores are calculated automatically after each round. Each player earns 1 point for every vote their answer received. The leaderboard lists every player ranked from first to last place. Players with the same score share a place. It appears after each round with that round's points and the overall standings, and again at the end of the game as the final leaderboard.

- Save completed game results.
    - Results are saved automatically after each round, so the admin doesn't have to click anything, and the game is marked complete when it ends. The saved results include the date and time, the deck that was played, the questions that were asked, every answer submitted for each question and how many votes it got, the players who played, and each player's final score.
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

### Workflows

#### Workflow 1: Host a Game
- **Goal:** An admin wants to create a game for their friends to join.
- **Steps:**
    1. The admin opens the app and signs in with their username or email and password. A new admin creates an account first.
    2. The admin starts a game in one of two ways: clicking **Create Game** on the home screen and choosing a deck, or clicking **Host Game** while viewing a deck in the **Decks** tab.
    3. The app generates a room code and opens the game lobby, which shows the room code and the deck being played.
    4. The admin shares the room code with the other players.
    5. As players join, their nicknames appear in the lobby's player list.
    6. Once everyone has joined, the admin clicks **Start Game**. The game picks the turn order randomly and shows the first question.
- **Result:** Every player in the lobby enters the game and sees the first question.
- **Potential Problems:**
    - If the admin enters the wrong login info, the login page shows an error message and they stay on the page.
    - If the admin clicks **Start Game** with fewer than three players (including the admin), the app warns them that there aren't enough players. Voting needs at least two answers to choose from, besides your own.
    - If the admin closes or refreshes the lobby, the game should stay open so they can return to it instead of everyone getting kicked out.

#### Workflow 2: Join a Game
- **Goal:** A player wants to join a game the admin is hosting.
- **Steps:**
    1. The player opens the app from a link the admin sent them. A possible extra feature is a QR code on the lobby screen that players can scan to open the app.
    2. On the home screen, the player clicks **Join Game** and enters the room code.
    3. The player enters a nickname, using their real name so everyone knows who is who, and clicks **Join**.
    4. The player sees a waiting screen until the admin starts the game, and their nickname appears in the lobby's player list.
- **Result:** The player is in the lobby and is ready to play when the admin starts the game.
- **Potential Problems:**
    - If the room code doesn't match an open game, the player sees an error message like "Room not found" and can try again.
    - If the game has already started, the player is told they can't join a game in progress.
    - If the nickname is empty or already taken in that room, the player is asked to choose a different one.

#### Workflow 3: Play a Round
- **Goal:** Players answer a question and vote on their favorite answer.
- **Steps:**
    1. A question about one player (the player whose turn it is) appears on everyone's screen.
    2. **Writing phase:** Every player types an answer and clicks **Submit**. Everyone except the player whose turn it is has a timer. The player whose turn it is has unlimited time.
    3. **Choosing phase:** Once the writing phase ends, every submitted answer is shown anonymously. Each player votes for their favorite answer, but they can't vote for their own.
    4. Once everyone has voted, the game scores the round. Each player earns 1 point for every vote their answer received.
    5. The leaderboard shows how many points each player earned that round and the overall standings.
    6. The admin clicks **Next Question** to start the next round. When the deck runs out of questions, or the admin clicks **End Game**, the final leaderboard is shown and the results are saved.
- **Result:** Every player has submitted an answer and voted, scores are updated, and the game moves on to the next round.
- **Potential Problems:**
    - If a player doesn't submit before the timer runs out, they sit out the round and earn 0 points. Their answer isn't shown in the choosing phase, but they can still vote.
    - If a player is taking too long to vote, the host can click **Skip to Results** to end voting early. Missing votes don't count.
    - The round can't move forward until the player whose turn it is submits, so the other players see a message that the game is waiting on that player.
    - If a player disconnects in the middle of a round, the game shouldn't get stuck waiting on their vote. The round should continue without them, and when they reconnect they're put back in their spot with their score.



### Acceptance Tests

#### Test 1: Invalid room code
- When a player enters a room code that doesn't match an open game and clicks **Join Game**, a "Room not found" error message appears and the player stays on the join screen.

#### Test 2: Players appear in the lobby
- When two players join the same room with different nicknames, both nicknames appear in the host's lobby player list without the host refreshing the page.

#### Test 3: Can't vote for your own answer
- When the choosing phase begins, a player's own answer can't be selected, and every other submitted answer can be.

#### Test 4: Scoring from votes
- When a player's answer receives 3 votes in a round, that player's round points show 3 on the leaderboard, and their overall score goes up by 3.

#### Test 5: Game results are saved
- When the last question in the deck is finished (or the host clicks **End Game**), the final leaderboard is shown, and the game appears on the **Game History** page with its date, deck, and winner.

#### Test 6: Protected admin pages
- When someone who isn't logged in tries to go directly to the **Deck Editor** or **Game History** page, they are redirected to the login page. The **Decks** page stays viewable without logging in.


---

## Part 3: Application Structure and Navigation (10 Points)

Plan the major screens and components of your application.

### A. Pages and Navigation


#### Layout and Navigation

The app is a website that's built mobile-first, so it feels like an app on a phone. The main pages are in a **bottom navigation bar**: **Home**, **Game**, and **Decks**. Pages that are used less often are in a **hamburger menu**: **Game History**, **Login** or **Logout**, and a **dark/light mode** toggle.

Players don't need an account. They only use Home, Game, and Decks. Anyone can browse decks, but only a logged-in admin can host a game, create or edit decks, or view Game History.

#### Pages

| Page | Route | Who can see it | Purpose and what it shows | Main actions | How users get there |
| --- | --- | --- | --- | --- | --- |
| Home | `/` | Everyone | Welcome screen with a short "how to play" explanation | **Join Game**, **Browse Decks**. Admins also see **Create Game** | Bottom nav, the app logo |
| Join Game | `/game` | Everyone | Form for the room code and nickname. If the player is already in a game, the Game tab takes them back to it | Enter code and nickname, **Join** | Bottom nav (Game tab), **Join Game** on Home |
| Game | `/game/:roomCode` | Players in the room | The live game: lobby, writing phase, choosing phase, round leaderboard, and final leaderboard | Submit an answer, vote, leave | Joining or creating a game |
| Decks | `/decks` | Everyone | All default and custom decks, filterable by topic | View a deck. Admins also see **Create Deck** | Bottom nav, **Browse Decks** on Home |
| Deck Details | `/decks/:deckId` | Everyone | A deck's title, topic, and questions | Admins: **Host Game**. Deck owners: **Edit**, **Delete** | Clicking a deck on Decks |
| Deck Editor | `/decks/new`, `/decks/:deckId/edit` | Admins (protected) | Form for a deck's title, topic, and questions | Add, edit, or remove questions, import from a text file, **Save** | **Create Deck** on Decks, **Edit** on Deck Details |
| Login / Sign Up | `/login` | Logged-out users | Admin login and account creation | Log in, create an account | Hamburger menu, or redirected from a protected page |
| Game History | `/history` | Admins (protected) | The admin's past games with date, deck, and winner | Open a past game | Hamburger menu |
| Game Results | `/history/:gameId` | Admins (protected) | One past game's questions, every answer and its votes, and the final leaderboard | Back to Game History | Clicking a game on Game History |
| Not Found | `*` | Everyone | Shown for any invalid URL | Link back to Home | Any bad URL |

#### The Game Page

The whole game happens on one route, `/game/:roomCode`. The page switches between views based on the game state that the server sends over WebSockets:

1. **Lobby:** the room code and a list of players as they join.
2. **Writing phase:** the question, an answer box, and a timer (no timer for the player whose turn it is).
3. **Choosing phase:** every submitted answer shown anonymously, with the player's own answer not selectable.
4. **Round leaderboard:** points earned that round and the overall standings.
5. **Final leaderboard:** the final standings when the game ends.

Keeping it as one route means players can't use the back button or a refresh to get into the wrong phase. The server decides which phase everyone is in.

The host sees the same screens as everyone else, plus host controls: **Start Game** in the lobby, **Skip to Results** during the choosing phase, **Next Question** on the round leaderboard, and **End Game** at any time. On the final leaderboard, the host can click **Play Again** or **Back to Decks**, and players can click **Leave**.

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

#### Reusable Components

| Component | Responsibility | Where it's used |
| --- | --- | --- |
| `DeckCard` | Shows a deck's title, topic, and number of questions. Clicking it opens the deck | Decks page, Home |
| `Leaderboard` | Lists players ranked from first to last, with tied players sharing a place. A prop controls whether that round's points are shown | Round leaderboard, final leaderboard, Game Results |
| `AnswerCard` | Shows one answer. In the choosing phase it's anonymous and can be selected (disabled for the player's own answer). On Game Results it shows who wrote it and how many votes it got | Choosing phase, Game Results |
| `PlayerList` | Shows the players in the game, updating as players join or leave | Lobby |
| `GameTimer` | Counts down the time left in the writing phase. Hidden for the player whose turn it is | Writing phase |
| `ProtectedRoute` | Wraps admin-only routes and redirects logged-out users to `/login` | Deck Editor, Game History, Game Results |
| `LoginForm` | Login and sign-up form with input validation and error messages | Login / Sign Up |
| `QuestionEditor` | Adds, edits, or removes one question in a deck | Deck Editor |
| `HostControls` | The **Start Game**, **Skip to Results**, **Next Question**, and **End Game** buttons. Only shown to the host | Game page |
| `BottomNav` | The bottom navigation bar with Home, Game, and Decks, plus the hamburger menu | Every page |

#### Game Page Components

`GamePage` reads the current game state from the WebSocket and shows the matching view component. Each view is used in only one place, but splitting them up keeps each phase's logic separate.

| Component | Responsibility |
| --- | --- |
| `GamePage` | Connects to the game and switches between the views below based on the game state |
| `Lobby` | Shows the room code and the `PlayerList` while players join |
| `WritingPhase` | Shows the question, an answer box, and the `GameTimer` |
| `ChoosingPhase` | Shows every submitted answer as an `AnswerCard` for players to vote on |

The round and final leaderboards use the shared `Leaderboard` component. Login state is tracked in an `AuthContext` rather than a component (covered in Part 4).

### C. Interface Planning

#### Visual Style

Since this is a party game, the style is fun and bold: a **dark background** by default, one or two bright accent colors, rounded cards, and large, friendly fonts. Users can switch between **dark and light mode** with a toggle in the hamburger menu, and their choice is remembered the next time they open the app.

#### Navigation

Navigation follows the layout in Part 3A: a bottom navigation bar for Home, Game, and Decks, and a hamburger menu for Game History, Login/Logout, and the dark/light mode toggle. The bottom nav is hidden during a live game so the game gets the full screen and players don't tap away by accident.

#### Making Important Information Stand Out

- The question text is the largest element on the screen during a round.
- The room code is large and bold in the lobby so people can read it from across the room.
- The timer changes color (for example, to red) when time is almost up.
- Main buttons like **Submit**, **Start Game**, and **Next Question** are large and use the accent color. Less important actions like **Leave** are smaller and plainer.
- The leaderboard highlights first place and the current player's own row.

#### Different Screen Sizes

- The app is designed mobile-first, since most players will be on their phones.
- On phones, pages use a single column with large tap targets.
- On tablets and laptops, the Decks page shows deck cards in a grid of 2 to 3 columns, and content is centered with a maximum width so it doesn't stretch across the screen.
- Responsive layouts are built with Tailwind's breakpoints (`sm:`, `md:`, `lg:`).

#### Success and Error Feedback

- **Form errors:** shown in red under the field, such as "Room not found" or "Nickname already taken."
- **Success messages:** a short toast notification, such as "Deck saved" or "Deck deleted."
- **Submitting an answer or vote:** the button changes to "Submitted ✓" and the player sees "Waiting for other players…"
- **Loading:** spinners or placeholder cards while decks or game history load.
- **Destructive actions:** a confirmation popup before deleting a deck or ending a game early.

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


#### Overview

The frontend is a React + TypeScript app. The backend is a **Node.js** server running **Express** and **Socket.IO**:

- **Express** handles saved data through API routes: accounts, decks, and game history. The frontend talks to it with TanStack Query.
- **Socket.IO** handles the live game through an open connection with each player: joining, answers, votes, and leaderboards.
- After each round, the server saves that round's results to the database, so they show up later on the Game History page through Express.

I chose this stack because it's all JavaScript/TypeScript, it's widely used for multiplayer browser games, and Socket.IO's built-in rooms match the app's room codes.

#### React + TypeScript

- I will build the pages and components planned in Part 3.
- I will create TypeScript types for the main data, such as `Deck`, `Question`, `Player`, `GameState`, `Answer`, and `GameResult`. Both the API and the Socket.IO messages will use these types, so the frontend and backend agree on the shape of the data.
- I will use props to pass data into reusable components. For example, `Leaderboard` receives a list of players and a `showRoundPoints` flag, and `AnswerCard` receives the answer text and a `disabled` flag.

#### Tailwind CSS

- I will use Tailwind for all styling, including the mobile-first layouts and the responsive deck grid from Part 3C.
- I will use Tailwind's `dark:` classes for dark and light mode, switched by a class on the page's root element.

#### React Router

- I will create the routes planned in Part 3A: `/`, `/game`, `/game/:roomCode`, `/decks`, `/decks/:deckId`, `/decks/new`, `/decks/:deckId/edit`, `/login`, `/history`, `/history/:gameId`, and `*` for Not Found.
- A shared layout route will show the `BottomNav` on every page except the live game.
- I will use a `ProtectedRoute` component around the Deck Editor, Game History, and Game Results routes.
- I will use `useParams` to read `roomCode`, `deckId`, and `gameId` from the URL.

#### TanStack Query

TanStack Query is used for saved data, not the live game.

- I will use `useQuery` to load the deck list, a single deck's details, the Game History list, and a past game's results.
- I will use `useMutation` to log in, sign up, create, edit, and delete decks, and import questions.
- After a deck is saved or deleted, I will invalidate the deck list query so it refreshes automatically.
- I will use its loading and error states to show the spinners and error messages planned in Part 3C.

#### WebSockets (Socket.IO)

Socket.IO is used for the live game. Each game is a Socket.IO room named after its room code, so messages only go to players in that game.

- **Players send:** join room, submit answer, submit vote. **The host also sends:** start game, skip to results, next question, end game.
- **The server sends:** player joined or left, phase changed, round leaderboard, final leaderboard.
- **Rejoining after a disconnect:** when a player joins, the server gives them a player ID, which the app stores in the browser along with the room code. If the player's phone locks, they refresh, or their connection drops, the app reconnects automatically and sends that player ID. The server puts them back in their spot with their score and shows them the current phase. While a player is disconnected, the round continues without them so the game doesn't get stuck.
- **The server is in charge of the game.** It runs the timer, decides when each phase ends, counts votes, and calculates scores. Players' devices only display what the server sends them. This prevents cheating, since players never receive other players' answers until the choosing phase, and never see who wrote which answer until the leaderboard.

#### State Management

- **Context:**
    - `AuthContext` stores the logged-in admin.
    - `ThemeContext` stores dark or light mode.
    - `GameContext` holds the Socket.IO connection and the current game state. Because it lives in Context, a player can switch to the Decks tab during a game and come back without disconnecting.
- **Local state (`useState`):**
    - the answer being typed
    - the selected vote
    - whether the player has submitted
    - the topic filter on the Decks page

#### Forms

- **Login / Sign Up:** required fields, a valid email, a minimum password length, and an error message for incorrect login info.
- **Join Game:** a valid room code format, and a nickname that isn't empty or already taken in that room.
- **Deck Editor:** a title and topic are required, a deck needs at least one question, and questions can't be empty.
- **Import:** an error if the file isn't plain text or contains no questions.
- **Answer box:** an answer can't be empty and has a maximum length.

#### Authentication

- When an admin logs in, the backend returns a token. The frontend stores it and sends it with every protected request. Logging out clears the token.
- Protected pages use `ProtectedRoute` on the frontend, and the backend also checks the token on protected API routes.
- The backend checks deck ownership, so an admin can't edit or delete another admin's deck, or a default deck, even by calling the API directly.

#### Backend + Persistence

- A Node.js server runs both Express (API routes) and Socket.IO (live games).
- A PostgreSQL database stores admin accounts, decks, questions, and game results. Details are in Part 4B and 4C.
- Games in progress are kept in the server's memory while they're running, and each round is saved to the database as soon as it ends. If the server crashes mid-game, the rounds played so far are kept, and the game appears in Game History marked **Incomplete**. Fully resuming a crashed game is a possible extra feature.

### B. Data Planning

The app stores two kinds of data: **permanent data** saved in the database (accounts, decks, questions, and completed games), and **live game data** kept in the server's memory while a game is running.

#### Permanent Data (Database)

| Data | Important Properties | Relationships |
| --- | --- | --- |
| **Admin** | `id`, `username`, `email`, `passwordHash`, `createdAt` | One admin creates many decks and hosts many games |
| **Deck** | `id`, `title`, `topic`, `isDefault`, `ownerId`, `createdAt` | Belongs to one admin (`ownerId` is empty for default decks). Has many questions |
| **Question** | `id`, `deckId`, `text`, `order` | Belongs to one deck |
| **Game** | `id`, `deckId`, `hostId`, `playedAt`, `status` (inProgress, completed, incomplete), `winnerNickname` | Played with one deck and hosted by one admin. Has many players and rounds |
| **GamePlayer** | `id`, `gameId`, `nickname`, `score`, `place` | Belongs to one game. Has many answers |
| **Round** | `id`, `gameId`, `roundNumber`, `questionText`, `turnPlayerId` | Belongs to one game. Has many answers |
| **RoundAnswer** | `id`, `roundId`, `playerId`, `text`, `votes`, `isTurnPlayerAnswer` | Belongs to one round and one player |

- **Players aren't accounts.** A `GamePlayer` is just a nickname tied to one game, since players don't sign in.
- **Topic is a field on Deck** rather than its own table. That's enough for filtering decks by topic.
- **Questions use a `{player}` placeholder** for the player the question is about, such as `What is {player}'s favorite movie?`. During the game, the server replaces `{player}` with the nickname of the player whose turn it is. The Deck Editor and the text import both use this placeholder.
- **Round saves a copy of the question text** (with the player's name filled in) instead of only linking to the question. That way, if a deck is edited or deleted later, Game History still shows what was actually asked.
- **`votes` is a count** of how many votes each answer received. The app doesn't save who voted for which answer.
- **`isTurnPlayerAnswer`** marks the real answer from the player whose turn it was, so Game Results can point it out.

#### Live Game Data (Server Memory)

| Data | Important Properties | Relationships |
| --- | --- | --- |
| **LiveGame** | `roomCode`, `hostId`, `deckId`, `phase` (lobby, writing, choosing, roundResults, finished), `turnOrder`, `currentRound`, `timerEndsAt`, `answers`, `votes` | Uses one deck. Has many live players |
| **LivePlayer** | `playerId`, `socketId`, `nickname`, `score`, `isHost`, `isConnected`, `hasSubmitted`, `hasVoted` | Belongs to one live game |

- `playerId` stays the same for the whole game, while `socketId` changes each time a player reconnects. The app stores the `playerId` in the browser so a player can rejoin their spot after a disconnect.
- `isConnected` lets the server skip disconnected players, so a round doesn't wait on someone who has left.

#### When Data Is Saved

1. **Game starts:** a `Game` record is created with status `inProgress`, along with a `GamePlayer` record for each player.
2. **Each round ends:** the `Round` and its `RoundAnswer` records are saved, and each `GamePlayer`'s score is updated.
3. **Game ends:** the `Game` status changes to `completed`, and the winner and each player's final place are saved.

If the server crashes mid-game, the game is left with status `inProgress`. When the server starts back up, it marks any of these games as `incomplete`, so Game History shows the rounds that were played.

### C. Backend and Authentication

#### Planned Stack

| Part | Choice | Why |
| --- | --- | --- |
| Backend | **Node.js** with **Express** and **Socket.IO** | One TypeScript codebase for the API and the live game. Socket.IO rooms match room codes |
| Database | **PostgreSQL** | A reliable, widely used database that handles the relationships between decks, games, rounds, and answers, and is easy to host online |
| Authentication | **Hashed passwords** (bcrypt) and **JSON Web Tokens (JWT)** | Passwords are never stored in plain text, and a token lets the server check who's logged in on every request |

#### How the Frontend Communicates With the Backend

The frontend talks to the backend in two ways:

- **Express API (HTTP requests):** for saved data like accounts, decks, and game history. The frontend calls these with TanStack Query.
- **Socket.IO (live connection):** for everything that happens during a live game.

#### Data the Frontend Requests or Sends

**Express API routes**

| Route | What it does | Login required? |
| --- | --- | --- |
| `POST /api/auth/signup` | Create an admin account | No |
| `POST /api/auth/login` | Log in and receive a token | No |
| `GET /api/auth/me` | Get the logged-in admin's info | Yes |
| `GET /api/decks` | List all decks (can filter by topic) | No |
| `GET /api/decks/:id` | Get one deck and its questions | No |
| `POST /api/decks` | Create a deck | Yes |
| `PUT /api/decks/:id` | Edit a deck and its questions | Yes, deck owner only |
| `DELETE /api/decks/:id` | Delete a deck | Yes, deck owner only |
| `POST /api/decks/:id/import` | Import questions from plain text | Yes, deck owner only |
| `GET /api/games` | List the admin's past games | Yes |
| `GET /api/games/:id` | Get one past game's rounds, answers, votes, and final leaderboard | Yes, host only |

**Socket.IO events**

| Sent by | Events |
| --- | --- |
| Host | `createGame` (requires login token), `startGame`, `skipVoting`, `nextQuestion`, `endGame` |
| Players (including the host) | `joinRoom`, `rejoinRoom`, `submitAnswer`, `submitVote` |
| Server | `playerJoined`, `playerLeft`, `phaseChanged`, `roundResults`, `gameOver`, `error` |

#### What Is Saved Permanently

- Admin accounts (with hashed passwords)
- Decks and their questions, including the default decks
- Game results: each game, its players, every round's question, every answer and its vote count, and each player's score and final place

Games in progress are kept in the server's memory, and each round is saved as it ends (see Part 4B).

#### What Requires Authentication

- **Requires login:** creating a game, creating decks, editing, deleting, or importing into decks, and viewing Game History and Game Results.
- **Requires ownership:** admins can only edit, delete, or import into their own decks, and can only view games they hosted. Default decks can't be changed by anyone.
- **Host-only game controls:** only the host's connection can send `startGame`, `skipVoting`, `nextQuestion`, and `endGame`.
- **No login needed:** browsing decks, joining a game with a room code, and playing.

#### How Authentication Works

1. An admin signs up. The server hashes their password with bcrypt before saving it.
2. When the admin logs in, the server checks the password and sends back a JWT.
3. The frontend stores the token and sends it in the `Authorization` header of every protected request. `AuthContext` keeps track of whether the admin is logged in.
4. On the server, middleware checks the token on protected routes and returns a `401 Unauthorized` error if it's missing or invalid. Ownership checks return `403 Forbidden`.
5. When creating a game, the host's token is sent with the `createGame` event, so only logged-in admins can host.
6. Logging out removes the token from the frontend.

---

## Part 5: Development Strategy and Challenges (5 Points)

### A. Development Order

#### Approach

I plan to build the user interface first so I can see what the app looks like and adjust the design early, then connect the real functionality. To make that switch easy, I'll write the TypeScript types from Part 4B first and fill the pages with hard-coded fake data, such as a few sample decks and players. When the backend is ready, I only need to swap the fake data for real data instead of rebuilding the pages.

The UI phase will stay rough on purpose. Every page will exist and be roughly laid out, but detailed visual polish waits until the end. The live game is the hardest and most important part of the app, so I don't want to spend too long on the UI and run out of time for it.

#### Development Order

1. **Project setup:** React + TypeScript + Tailwind + React Router on the frontend, and Node.js + Express + PostgreSQL on the backend.
2. **UI with fake data:** TypeScript types, all pages and components, routing, and the bottom nav.
3. **Bare-bones Socket.IO test:** two browser tabs join the same room and see each other in the lobby. This proves the live connection works before I build the rest of the app around it.
4. **Decks backend:** database tables, deck API routes, and the default decks. Connect the Decks and Deck Details pages with TanStack Query.
5. **Authentication:** sign up, login, logout, `ProtectedRoute`, and the Deck Editor (create, edit, and delete decks, and import questions from text).
6. **Live game:** creating a room, joining with a code and nickname, the lobby, the writing phase with a timer, the choosing phase, scoring, and the round and final leaderboards.
7. **Saving results:** saving each round to the database, and the Game History and Game Results pages.
8. **Reliability:** rejoining after a disconnect, and marking crashed games as Incomplete.
9. **Extras and polish:** the dark/light mode toggle, the Duplicate deck button, the QR code, and final visual polish.

Each step depends on the ones before it. For example, the Deck Editor needs authentication, the live game needs decks to play, and Game History needs the live game to save results.

#### First Code Progress Check-in

By the first check-in, I plan to have:

- All pages and components built with fake data, with working navigation between them.
- The Decks and Deck Details pages loading real decks from the backend.
- Two players able to join the same room and see each other in the lobby.

### B. Anticipated Challenges

#### Challenge 1: Keeping Every Player's Screen in Sync

- **Why it's difficult:** Every player's device needs to show the same phase at the same time: the lobby, writing phase, choosing phase, and leaderboard. Messages can arrive at slightly different times, several players can act at the same moment, and it's easy for one device to get stuck on the wrong screen or show outdated information.
- **How I'll approach it:** The server is the single source of truth. It decides which phase the game is in and sends the current game state to every player in the room whenever something changes. The frontend doesn't decide anything on its own. `GamePage` just shows whatever view matches the state it receives.
- **How I'll know it works:** I'll open 3 or 4 browser tabs as different players and play a full game. Every tab should switch phases together, and every tab should show the same answers during voting and the same leaderboard after each round.

#### Challenge 2: Reconnecting to a Game

- **Why it's difficult:** Players disconnect often, especially on phones, when the screen locks, they switch apps, or their connection drops. When they come back, it's a brand-new Socket.IO connection, so the server has to recognize that it's the same player. The player could reconnect during any phase, and they need to land on the correct screen with their score.
- **How I'll approach it:** When a player joins, the server gives them a player ID, which the app saves in the browser along with the room code. When the app reconnects, it sends a `rejoinRoom` event with that ID. The server matches it to the existing player, updates their connection, and sends them the current game state. While a player is disconnected, the server skips them so the round doesn't get stuck.
- **How I'll know it works:** I'll refresh a player's tab, and also close and reopen it, during each phase of the game. Each time, the player should return to the correct screen with the same nickname and score, and the other players' games should keep going without getting stuck.

#### Challenge 3: Authentication and Protected Features

- **Why it's difficult:** Authentication is new to me, and the login has to be checked in three places: the frontend routes, the Express API routes, and the Socket.IO `createGame` event. The backend also has to check deck ownership, so an admin can't change another admin's deck or a default deck. Hiding a button on the frontend isn't enough, since someone could still call the API directly.
- **How I'll approach it:** I'll use `ProtectedRoute` on the frontend, middleware on the backend that checks the JWT on every protected API route, and an ownership check before editing or deleting a deck. The `createGame` event will also require a valid token.
- **How I'll know it works:** I'll run Test 6 from Part 2 to confirm that logged-out users are redirected to the login page. I'll also try to edit or delete another admin's deck and a default deck by calling the API directly. Those requests should be rejected with a `403 Forbidden` error, and requests with no token should get a `401 Unauthorized` error.

### C. Priorities

Functionality always comes before visual design. If I start running out of time, the UI only needs to be clear enough to read and use, and all remaining time goes into making the required features work. I'll work through the list below from top to bottom and won't start a lower priority until everything above it works.

#### 1. Must Have (Required Features)

- Admin sign up, login, logout, and protected pages
- Browsing decks by topic, and creating, editing, and deleting decks
- Importing questions from plain text
- Hosting a game with a room code, and players joining with a nickname
- The full game loop: writing phase with a timer, choosing phase, automatic scoring, and the round and final leaderboards
- Host controls: Start Game, Skip to Results, Next Question, and End Game
- Saving game results, and the Game History and Game Results pages
- A UI that's readable and usable on a phone

#### 2. Should Have (Important, but Not Required)

- Rejoining a game after a disconnect
- Marking crashed games as Incomplete
- Clear success and error feedback, such as toasts, loading states, and confirmation popups

#### 3. Nice to Have (Only If There's Time)

- Dark/light mode toggle
- Duplicate button for default decks
- QR code for joining a game
- Building a custom deck from questions in existing decks
- Fully resuming a game after a server crash
- Final visual polish and animations

---

