   import React from 'react';
   import ResultsTable from "../components/ResultsTable.jsx"
   import getDeclension from '@dubaua/get-declension';
   
   function ResultsPage({ stepsCount, results, onResetGame }) {
      const resultString = getDeclension({count: stepsCount, one: 'шаг', few: 'шага', many: 'шагов'});
      return (
        <section className="result container">
          <h2>Лучшие результаты:</h2>
          <p>Вы завершили игру за <b>{resultString}</b>, так держать!</p>
          <ResultsTable current={stepsCount} results={results} />
          <p>Хотите попробовать ещё раз?</p>
          <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
        </section>
      );
    }

    export default ResultsPage;