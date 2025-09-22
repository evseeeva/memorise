import React from 'react';
 import {useState} from 'react';
 import GamePage from "./pages/GamePage.jsx"
  import ResultsPage from "./pages/ResultsPage.jsx"
  import InitialPage from "./pages/InitialPage.jsx"
import { AppRoute, GAME_TYPES} from "./settings/settings.js"

 function App({results, getImages}) {
      const [page, setPage] = useState(AppRoute.Initial);
      const [result, setResult] = useState(0);
      const [gameType, setGameType] =  useState(GAME_TYPES[0].type);
      const images = getImages(gameType);

      const showResults = (stepsCount) => {
        setResult(stepsCount);
        setPage(AppRoute.Results);
      };

       const handleStart = (gameType) => {
        setGameType(gameType);
        setPage(AppRoute.Game);
      };

        const handleReset = () => {
        setPage(AppRoute.Initial);
      };

      const getPage = (route) => {
        switch (route) {
           case AppRoute.Initial:
            return <InitialPage handleStart={handleStart}/>;
          case AppRoute.Game:
            return <GamePage images={images} onShowResults={showResults}  gameType={gameType}/>;
          case AppRoute.Results:
            return (
              <ResultsPage
                stepsCount={result}
                onResetGame={handleReset}
                results={results}
              />
            );
          default:
            return null;
        }
      };
      return getPage(page);
    }

    export default App;