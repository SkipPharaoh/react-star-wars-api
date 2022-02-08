<img src="https://i.imgur.com/go18uJE.jpg">

# Star Wars API - React Router & useEffect practice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://www.swapi.tech/) and render its data. 

## Setup + Starting Instructions 

1. Create a new react app in this folder. (`npx create-react-app .`)
2. Clean up CRA starter code and verify app loads without issue.
3. Import React-Router Dependencies (`npm i react-router-dom`)
4. Setup your App to Router to render `<StarshipsList />` `<StarshipPage />` elements. (You can start with boilerplate components to get started)
5. After verifying react-router pathing is working displays the correct component

## Primary App Goals
1. Obtain all of the starships from the API Endpoint: `https://www.swapi.tech/api/starships`) and display `<Link/>` to each ship inside your `<StarshipsList/>`. 
1. Use `useEffect` to make the request as soon as your topmost-level component loads (App), and store it in state (starShips).
1. In your `<StarshipsList/>`, for each one ship in state, render a `<Link>` in for that starship. The link should lead to `/ships/<theSelectedShipsId>`, and display the ship's name.
1. When a starship `<Link>` is clicked, a `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url. Take a look at the answers from this week's `React-Router` codealong and use it as a guide (https://git.generalassemb.ly/seir-1213/react-router) and lesson [solution code](https://git.generalassemb.ly/seir-1213/react-bitcoin-prices/tree/solution-code)
1. When the `<StarshipPage />` component loads, it should make a request to get the full details about the specified ship. Display that ship's name, model, manufacturer, and any other attributes you find interesting. (Hint: useEffect)
1. The StarshipPage should have a "Return to Starship List" link. Hint: you'll set the link to route back to your `StarshipsList` path. 


## Stretch Goals
1. Add a `<404/>` component, that is rendered by `React-Router` if no matching path is found, or a bad address added manually in the browser.
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)


