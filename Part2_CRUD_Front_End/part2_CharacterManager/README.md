Which updates succeeded, and which failed?
Increase Uther Lightbringer's health by 25 succeded
Both Change Shadowheart's level to 15 and Increase Geralt of Rivia's health by 10 failed.

What error messages did the backend return?
I got 400 bad request messages. On the screen I got the invalid character class and name must aphanumeric. Check me screen shots in the submission

Why might a character be successfully retrieved but rejected when updated?
Because when you are retrieving, you're not changing anything, just reading. But when you are updating, you are actually changing data, and you don't do it through the proper workflow and or it fails validation, it'll get rejected.

How does your React application display API errors?
The API functions check response.ok after each request. If the request failed, they read the error message the backend sent and throw it as an error. In App.tsx, I catch that error and save the message in an error state, which shows up in red at the top of the page. That way the user sees the real message from the backend, like "Invalid character class.", instead of a generic error. The loading message also goes away whether the request works or fails.
