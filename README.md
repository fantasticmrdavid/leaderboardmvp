# SiSU Leaderboard MVP by David Li

## Assumptions & Dev Notes
- For the purposes of this front-end demo, static data will be used. Data responses are fetched from `/src/data`.
- 2 points are awarded to a competitor for a win, 1 for a draw, and 0 for a loss.
- Referee contest updating functionality has been omitted for this initial release.

## Running the app
1. Run `npm install`
2. Run `npm start`
3. Visit `http://localhost:8080`

## Users
Usernames:
- Referee: `ref1`, `ref2`
- Subscribers: `sub1`, `sub2`, `sub3`

## Tech Stack
- React + Redux
- Styled-Components
- Redux-Persist
- React-Router
- WebPack
- esLint

## Next steps
- CI pipeline should be setup (AWS S3 is recommended for hosting)
- Static data should be replaced with a database with access controlled through an API gateway app (GraphQL is recommended)
- Jest/Enzyme testing steps should added and passing required before merging into master
- Add TypeScript once core logic is complete

Password for all users: `sisu`
