import React from 'react';
import useGame from "../hooks/useGame.js";
import Progress from "../components/Progress.jsx";
import Grid from "../components/Grid.jsx";
import Modal from "../components/Modal.jsx";

function GamePage({ images = [], onShowResults, gameType }) {
    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(images);

    const handleResultsClick = () => {
        onShowResults(stepsCount);
    };

    return (
        <section className="game container">
            <Progress value={finishedItems.length / 2} max={images.length / 2} />
            <div className="steps">Шаг {stepsCount}</div>
            <Grid
                images={images}
                finishedItems={finishedItems}
                checkItems={checkItems}
                gameType={gameType}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
                    <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
                </Modal>
            )}
        </section>
    );
}

export default GamePage;
