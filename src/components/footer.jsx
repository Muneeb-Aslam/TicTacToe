export default function Footer() {
    return (
        <div className="footer">
            <div class="scores">
                <p class="players" id="player1">
                    Player (X)
                    <span class="score1">0</span>
                </p>
                <p class="players" id="tie">
                    Tie
                    <span class="TieScore">0</span>
                </p>
                <p class="Players">
                    <span class="player2" id="player2">
                        Player 2 (O)
                    </span>
                    <span class="score2">0</span>
                </p>
            </div>
            <div id="Afterwin">
                <h2 id="windata"></h2>
                <button id="refresh">Refresh</button>
            </div>
        </div>
    );
}
