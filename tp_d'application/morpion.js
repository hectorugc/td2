(() => {
	function init() {
		const DOM = {
			$currentPlayer: document.querySelector(".js-current-player"),
			$board: document.querySelector(".js-board"),
			$resetButton: document.querySelector(".js-reset"),
		};
		// On demande les nom de jeurs
		let jeur1 = prompt("Quelle est votre prenom?");
		let jeur2 = prompt("Et toi quelle est ton prenom?");
		dimensionMoprion = parseInt(prompt("Chosisie la taille de morpion"));
		while (dimensionMoprion < 3 || dimensionMoprion > 8) {
			dimensionMoprion = parseInt(
				prompt("Desole mais le morpion doit etre entre 3x3 et 8x8")
			);
		}
		function initialState() {
			return {
				boardModel: Array(dimensionMoprion)
					.fill(null)
					.map((_) => Array(dimensionMoprion).fill(null)),
				players: ["X", "O"],
				currentPlayer: 0,
				gameEnded: false,
				turn: 0,
			};
		}
		let state = initialState();

		function renderBoard() {
			DOM.$currentPlayer.textContent = state.players[state.currentPlayer];
			// Assuming dimensionMoprion > 0.
			DOM.$board.innerHTML = "";
			for (let i = 0; i < dimensionMoprion; i++) {
				const $row = document.createElement("div");
				$row.classList.add("board-row");
				for (let j = 0; j < dimensionMoprion; j++) {
					const $cell = document.createElement("div");
					$cell.classList.add("board-cell");
					$cell.setAttribute("data-i", i);
					$cell.setAttribute("data-j", j);
					const $content = document.createElement("span");
					$content.classList.add("content");
					$content.textContent = state.boardModel[i][j];
					$cell.appendChild($content);
					$row.appendChild($cell);
				}
				DOM.$board.appendChild($row);
			}
		}

		function checkWinning(board, player) {
			// vérifier horizontal.
			for (let i = 0; i < dimensionMoprion; i++) {
				if (board[i].every((cell) => cell === player)) {
					return true;
				}
			}

			// vérifier vertical.
			for (let j = 0; j < dimensionMoprion; j++) {
				let verticalAllPlayer = true;
				for (let i = 0; i < dimensionMoprion; i++) {
					if (board[i][j] !== player) {
						verticalAllPlayer = false;
						break;
					}
				}
				if (verticalAllPlayer) {
					return verticalAllPlayer;
				}
			}

			// vérifier diagonal inverse.
			let diagonalAllPlayer = true;
			for (let i = 0; i < dimensionMoprion; i++) {
				if (board[i][i] !== player) {
					diagonalAllPlayer = false;
					break;
				}
			}
			if (diagonalAllPlayer) {
				return diagonalAllPlayer;
			}

			// vérifier diagonal inverse.
			diagonalAllPlayer = true;
			for (let i = dimensionMoprion - 1, j = 0; i >= 0; i--, j++) {
				if (board[i][j] !== player) {
					diagonalAllPlayer = false;
					break;
				}
			}
			if (diagonalAllPlayer) {
				return diagonalAllPlayer;
			}

			return false;
		}

		function attachEventListeners() {
			DOM.$board.addEventListener("click", (event) => {
				if (state.gameEnded) {
					return;
				}
				if (!event.target.classList.contains("board-cell")) {
					return;
				}
				const $cell = event.target;
				const i = parseInt($cell.getAttribute("data-i"), 10);
				const j = parseInt($cell.getAttribute("data-j"), 10);
				if (state.boardModel[i][j] !== null) {
					alert("La cellule a déjà été prise!");
					return;
				}
				const player = state.players[state.currentPlayer];
				state.boardModel[i][j] = player;
				const winningMove = checkWinning(state.boardModel, player);
				state.turn++;
				if (!winningMove) {
					state.currentPlayer = (state.currentPlayer + 1) % 2;
					renderBoard();
					if (state.turn === dimensionMoprion * dimensionMoprion) {
						alert("It's a draw!");
					}
				} else {
					renderBoard();
					state.gameEnded = true;
					alert(`Player ${jeur1} wins!`);
				}
			});

			DOM.$resetButton.addEventListener("click", () => {
				if (confirm("Start a new game?")) {
					state = initialState();
					renderBoard();
				}
			});
		}

		renderBoard();
		attachEventListeners();
	}

	document.addEventListener("DOMContentLoaded", init);
})();
