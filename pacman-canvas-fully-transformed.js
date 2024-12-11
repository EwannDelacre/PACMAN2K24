// --- INITIALISATIONS ---
const GHOSTS = {
    INKY: 'fantomeBleu',
    BLINKY: 'fantomeRouge',
    PINKY: 'fantomeRose',
    CLYDE: 'fantomeOrange'
};

const FINAL_LEVEL = 10;
const PILL_POINTS = 10;
const POWERPILL_POINTS = 50;
const GHOST_POINTS = 100;
const HIGHSCORE_ENABLED = true;

	var toileDeJeu;
	var contexteDessin;
	var jeuPrincipal;
	var canvas_walls, context_walls;
	var fantomeBleu, fantomeRouge, fantomeOrange, fantomeRose;
	var configCarte = "backdata/carte.json";
	var getHighscore = () => {
	var ajax_get = () => {
		var date = new Date().getTime();
				for (var i = 0; i < msg.length; i++) {
	var ajax_add = (n, s, l) => {
		var name = $("input[type=text]").val();
		var originalConsoleLog = null;
		var originalConsoleDebug = null;
		var logger = {};
			var maxX = jeuPrincipal.width / 30 - 1;
			var maxY = jeuPrincipal.height / 30 - 1;
			var r = confirm("Vous allez retouner au niveau 1, êtes-vous sur ?");
			var html = "";
			for (var i = 0; i < count; i++) {
			const maxLevelPointsPills = 104 * PILL_POINTS;
			const maxLevelPointsPowerpills = 4 * POWERPILL_POINTS;
			const maxLevelPointsGhosts = 4 * 4 * GHOST_POINTS;
			const maxLevelPoints = maxLevelPointsPills + maxLevelPointsPowerpills + maxLevelPointsGhosts;
			const scoreIsValid = this.score.score / this.level <= maxLevelPoints;
			const scoreIsValidCalculation = this.score.score / this.level <= maxLevelPoints;
			const scoreIsValidValidation = this.validateScoreWithLevel();

			var temp = 0;
	var up = new Direction("up", 1.75, 1.25, 0, -1);
	var left = new Direction("left", 1.25, 0.75, -1, 0);
	var down = new Direction("down", 0.75, 0.25, 0, 1);
	var right = new Direction("right", 0.25, 1.75, 1, 0);
			var pX = this.getGridPosX();
			var pY = this.getGridPosY();
			var u, d, r, l;
				var tX = this.startPosX / 30;
				var tY = this.startPosY / 30;
				var tX = this.gridBaseX;
				var tY = this.gridBaseY;
						var pdir = personnageCentral.direction;
						var pdirX = pdir.dirX == 0 ? -pdir.dirY : pdir.dirX;
						var pdirY = pdir.dirY == 0 ? -pdir.dirX : pdir.dirY;
						var tX = (personnageCentral.getGridPosX() + pdirX * 4) % (jeuPrincipal.width / personnageCentral.radius + 1);
						var tY = (personnageCentral.getGridPosY() + pdirY * 4) % (jeuPrincipal.height / personnageCentral.radius + 1);
						var tX = personnageCentral.getGridPosX();
						var tY = personnageCentral.getGridPosY();
						var tX = personnageCentral.getGridPosX() + 2 * personnageCentral.direction.dirX;
						var tY = personnageCentral.getGridPosY() + 2 * personnageCentral.direction.dirY;
						var vX = tX - fantomeRouge.getGridPosX();
						var vY = tY - fantomeRouge.getGridPosY();
						var tX = personnageCentral.getGridPosX();
						var tY = personnageCentral.getGridPosY();
						var dist = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY - tY), 2));
			var oppDir = this.getOppositeDirection();
			var dirs = [{}, {}, {}, {}];
			var dirs2 = dirs.sort(compare);
			var r = this.dir;
			var j;
				for (var i = dirs2.length - 1; i >= 0; i--) {
				for (var i = dirs2.length - 1; i >= 0; i--) {
			var dir = Math.floor((Math.random() * 10) + 1) % 5;
				var gridX = this.getGridPosX();
				var gridY = this.getGridPosY();
				var gridAheadX = gridX;
				var gridAheadY = gridY;
				var field = jeuPrincipal.getMapContent(gridX, gridY);
				var fieldAhead = jeuPrincipal.getMapContent(gridAheadX, gridAheadY);
						var s;
						var x = this.getGridPosX() + this.directionWatcher.get().dirX;
						var y = this.getGridPosY() + this.directionWatcher.get().dirY;
						var nextTile = jeuPrincipal.map.posY[y].posX[x].type;
					var limitMax1 = this.direction.angle1;
					var limitMax2 = this.direction.angle2;
					var limitMin1 = this.direction.angle1 - 0.21;
					var limitMin2 = this.direction.angle2 + 0.21;
	var personnageCentral = new personnageCentral();
		var dotPosY;

// --- FONCTIONS ---
function geronimo() {
			success: function (msg) {
			success: function (data) {
			error: function (errorThrown) {
	function addHighscore() {
	function buildWall(contexteDessin, gridX, gridY, width, height) {
	function between(x, min, max) {
	var logger = function () {
		logger.enableLogger = function enableLogger() {
		logger.disableLogger = function disableLogger() {
			window['console']['log'] = function () {};
			window['console']['debug'] = function () {};
	function Timer() {
		this.start = function () {
		this.stop = function () {
		this.reset = function () {
		this.get_time_diff = function () {
	function Game() {
		this.refreshLevel = function (h) {
		this.startGhostFrightened = function () {
		this.endGhostFrightened = function () {
		this.checkGhostMode = function () {
		this.getMapContent = function (x, y) {
		this.setMapContent = function (x, y, val) {
		this.toggleSound = function () {
		this.reset = function () {
		this.newGame = function () {
		this.nextLevel = function () {
		this.drawHearts = function (count) {
		this.showContent = function (id) {
		this.getLevelTitle = function () {
		this.showMessage = function (title, text) {
		this.pauseAndShowMessage = function (title, text) {
		this.closeMessage = function () {
		this.validateScoreWithLevel = function () {
		this.showHighscoreForm = function () {
		this.forceStartAnimationLoop = function () {
		this.forcePause = function () {
		this.forceResume = function () {
		this.pauseResume = function () {
					beforeSend: function (xhr) {
			$.each(this.map.posY, function (i, item) {
				$.each(this.posX, function () {
		this.checkForLevelUp = function () {
		this.endGame = function (allLevelsCompleted = false) {
		this.toPixelPos = function (gridPos) {
		this.toGridPos = function (pixelPos) {
		this.buildWalls = function () {
	function Score() {
		this.set = function (i) {
		this.add = function (i) {
		this.refresh = function (h) {
	function Direction(name, angle1, angle2, dirX, dirY) {
		this.equals = function (dir) {
	function directionWatcher() {
		this.set = function (dir) {
		this.get = function () {
	function Ghost(name, gridPosX, gridPosY, image, gridBaseX, gridBaseY) {
		this.dazzle = function () {
		this.undazzle = function () {
		this.draw = function (contexteDessin) {
		this.getCenterX = function () {
		this.getCenterY = function () {
		this.reset = function () {
		this.die = function () {
		this.changeSpeed = function (s) {
		this.move = function () {
		this.checkCollision = function () {
		this.getNextDirection = function () {
			function compare(a, b) {
		this.setRandomDirection = function () {
		this.reverseDirection = function () {
	function EntiteJeu() {
		this.getNextDirection = function () {
		this.checkDirectionChange = function () {
		this.inGrid = function () {
		this.getOppositeDirection = function () {
		this.move = function () {
		this.stop = function () {
		this.start = function () {
		this.getGridPosX = function () {
		this.getGridPosY = function () {
		this.setDirection = function (dir) {
		this.setPosition = function (x, y) {
	function personnageCentral() {
		this.freeze = function () {
		this.unfreeze = function () {
		this.getCenterX = function () {
		this.getCenterY = function () {
		this.checkCollisions = function () {
		this.checkDirectionChange = function () {
		this.setDirection = function (dir) {
		this.enableBeastMode = function () {
		this.disableBeastMode = function () {
		this.move = function () {
		this.eat = function () {
		this.stop = function () {
		this.reset = function () {
		this.dieAnimation = function () {
		this.die = function () {
		this.dieFinal = function () {
		this.getGridPosX = function () {
		this.getGridPosY = function () {
	function checkAppCache() {
		window.applicationCache.addEventListener('updateready', function (e) {
		window.applicationCache.addEventListener('cached', function (e) {
	function hideAdressbar() {
	$(document).ready(function () {
			beforeSend: function (xhr) {
		$('#toileDeJeu-container').click(function () {
		$('body').on('click', '#score-submit', function () {
		$('body').on('click', '#show-highscore', function () {
		Hammer('.container').on("swiperight", function (event) {
		Hammer('.container').on("swipeleft", function (event) {
		Hammer('.container').on("swipeup", function (event) {
		Hammer('.container').on("swipedown", function (event) {
		$(document).on('touchend mousedown', '#up', function (event) {
		$(document).on('touchend mousedown', '#down', function (event) {
		$(document).on('touchend mousedown', '#left', function (event) {
		$(document).on('touchend mousedown', '#right', function (event) {
		$(document).on('click', '.button#newGame', function (event) {
		$(document).on('click', '.button#highscore', function (event) {
		$(document).on('click', '.button#instructions', function (event) {
		$(document).on('click', '.button#info', function (event) {
		$(document).on('click', '.button#back', function (event) {
		$(document).on('click', '.controlSound', function (event) {
		$(document).on('click', '#updateCode', function (event) {
	function renderContent() {
	function animationLoop() {
	function doKeyDown(evt) {

// --- EVENEMENTS ---

// --- BOUCLEPRINCIPALE ---
/*-------------------------------------------------------------------

	Made by Ewann Delacre aka 31.

-------------------------------------------------------------------*/

"use strict";

	INKY: 'fantomeBleu',
	BLINKY: 'fantomeRouge',
	PINKY: 'fantomeRose',
	CLYDE: 'fantomeOrange'
}




		setTimeout(ajax_get, 30);
	}
		$.ajax({
			datatype: "json",
			type: "GET",
			url: "backdata/gestion.php",
			data: {
				timestamp: date,
				action: "get"
			},
				$("#highscore-list").text("");
					$("#highscore-list").append("<li>" + msg[i]['name'] + "<span id='score'>" + msg[i]['score'] + "</span></li>");
				}
			}
		});
	}
		$.ajax({
			type: 'POST',
			url: 'backdata/gestion.php',
			data: {
				action: 'add',
				name: n,
				score: s,
				level: l
			},
			dataType: 'json',
				console.log('Highscore ajouté: ' + data);
				$('#highscore-form').html('<span class="button" id="show-highscore">Voir Highscore List</span>');
			},
				console.log(errorThrown);
			}
		});
	}

		$("#highscore-form").html("Saving highscore...");
		ajax_add(name, jeuPrincipal.score.score, jeuPrincipal.level);
	}

		console.log("BuildWall");
		width = width * 2 - 1;
		height = height * 2 - 1;
		contexteDessin.fillRect(personnageCentral.radius / 2 + gridX * 2 * personnageCentral.radius, personnageCentral.radius / 2 + gridY * 2 * personnageCentral.radius, width * personnageCentral.radius, height * personnageCentral.radius);
	}

		return x >= min && x <= max;
	}


			if (originalConsoleLog === null)
				return;

			window['console']['log'] = originalConsoleLog;
			console.log('console.log enabled');

			if (originalConsoleDebug === null)
				return;

			window['console']['debug'] = originalConsoleDebug;
			console.log('console.debug enabled');

		};

			console.log('console.log disabled');
			originalConsoleLog = console.log;
			originalConsoleDebug = console.debug;
		};

		return logger;
	}();

		this.time_diff = 0;
		this.time_start = 0;
		this.time_stop = 0;
			this.time_start = new Date().getTime();
		}
			this.time_stop = new Date().getTime();
			this.time_diff += this.time_stop - this.time_start;
			this.time_stop = 0;
			this.time_start = 0;
		}
			this.time_diff = 0;
			this.time_start = 0;
			this.time_stop = 0;
		}
			return this.time_diff;
		}
	}

		this.timer = new Timer(); // TODO
		this.refreshRate = 33;
		this.pause = true;
		this.gameOver = false;
		this.score = new Score();
		this.soundfx = 0;
		this.map;
		this.pillCount;
		this.monsters;
		this.level = 1;
			$(h).html("Niv: " + this.level);
		};
		this.toileDeJeu = $("#myCanvas").get(0);
		this.wallColor = "Blue";
		this.width = this.toileDeJeu.width;
		this.height = this.toileDeJeu.height;
		this.pillSize = 3;
		this.powerpillSizeMin = 2;
		this.powerpillSizeMax = 6;
		this.powerpillSizeCurrent = this.powerpillSizeMax;
		this.powerPillAnimationCounter = 0;
		this.ghostFrightened = false;
		this.ghostFrightenedTimer = 240;
		this.ghostMode = 0; // 0 = immobile, 1 = chasse
		this.ghostModeTimer = 200;
		this.ghostSpeedNormal = (this.level > 4 ? 3 : 2); // vitesse fantome par defaut
		this.ghostSpeedDazzled = 2; // vitesse fantome foncde par defaut

			console.log("ghost frigthened");
			this.ghostFrightened = true;
			this.ghostFrightenedTimer = 240;
			fantomeBleu.dazzle();
			fantomeRose.dazzle();
			fantomeRouge.dazzle();
			fantomeOrange.dazzle();
		};

			this.ghostFrightened = false;
			fantomeBleu.undazzle();
			fantomeRose.undazzle();
			fantomeRouge.undazzle();
			fantomeOrange.undazzle();
		};

			if (this.ghostFrightened) {

				this.ghostFrightenedTimer--;
				if (this.ghostFrightenedTimer === 0) {
					this.endGhostFrightened();
					this.ghostFrigthenedTimer = 240;
				}
			}
			this.ghostModeTimer--;
			if (this.ghostModeTimer === 0 && jeuPrincipal.level > 1) {
				this.ghostMode ^= 1;
				this.ghostModeTimer = 200 + this.ghostMode * 450;
				console.log("ghostMode=" + this.ghostMode);

				jeuPrincipal.buildWalls();

				fantomeBleu.reverseDirection();
				fantomeRose.reverseDirection();
				fantomeOrange.reverseDirection();
				fantomeRouge.reverseDirection();
			}
		};

			if (x < 0) x = maxX + x;
			if (x > maxX) x = x - maxX;
			if (y < 0) y = maxY + y;
			if (y > maxY) y = y - maxY;
			return this.map.posY[y].posX[x].type;
		};

			this.map.posY[y].posX[x].type = val;
		};

			this.soundfx === 0 ? this.soundfx = 1 : this.soundfx = 0;
			$('#mute').toggle();
		};

		// TODO: test
			this.score.set(0);
			this.score.refresh(".score");
			personnageCentral.lives = 3;
			jeuPrincipal.level = 1;
			this.refreshLevel(".level");

			this.pause = false;
			this.gameOver = false;
		};

			if (r) {
				console.log("new Game");
				this.init(0);
				this.forceResume();
			}
		};

			console.debug('nextLevel: current, final', this.level, FINAL_LEVEL);
			if (this.level === FINAL_LEVEL) {
				console.log('next level, ' + FINAL_LEVEL + ', end jeuPrincipal');
				jeuPrincipal.endGame(true);
				jeuPrincipal.showHighscoreForm();
			} else {
				this.level++;
				console.log("Niveau " + jeuPrincipal.level);
				jeuPrincipal.pauseAndShowMessage("Level " + jeuPrincipal.level, this.getLevelTitle() + "<br/>(Cliquez pour continuer!)");
				jeuPrincipal.refreshLevel(".level");
				this.init(1);
			}
		};

				html += " <img src='img/heart.png'>";
			}
			$(".lives").html("Vies: " + html);

		};

			$('.content').hide();
			$('#' + id).show();
		};

			switch (this.level) {
				case 2:
					return '"Les fantômes vous poursuivent"';
					// Switch chasse
				case 3:
					return '"Inky arrive"';
					// Inky bouge
				case 4:
					return '"Clyde arriveg"';
					// Clyde bouge
				case 5:
					return '"Fantômes rapides"';
					// Speed-up des fantomes
				default:
					return '"Rien de nouveau"';
			}
		}

			$('#toileDeJeu-overlay-container').fadeIn(200);
			if ($('.controls').css('display') != "none") $('.controls').slideToggle(200);
			$('#toileDeJeu-overlay-content #title').text(title);
			$('#toileDeJeu-overlay-content #text').html(text);
		}

			this.timer.stop();
			this.pause = true;
			this.showMessage(title, text);
		};

			$('#toileDeJeu-overlay-container').fadeOut(200);
			$('.controls').slideToggle(200);
		};


			console.log('validate score. score: ' + this.score.score + ', level: ' + this.level, scoreIsValid);
			return scoreIsValid;

		}


					<span id='form-validator'></span>
					<input type='text' id='playerName'/>
					<span class='button' id='score-submit'>save</span>
				</div>` : `<div id='invalid-score'>Your score looks fake, the highscore list is only for honest players ;)</div>`;
			this.pauseAndShowMessage("Game over", "Total Score: " + this.score.score + (HIGHSCORE_ENABLED ? inputHTML : ''));
			$('#playerName').focus();
		}

			// start timer
			this.timer.start();

			this.pause = false;
			this.started = true;
			this.closeMessage();
			animationLoop();
		}

			this.timer.stop();
			this.pauseAndShowMessage("Pause", "Cliquez pour revenir au jeu");
		}

			this.closeMessage();
			this.pause = false;
			this.timer.start();
		}

			if (this.gameOver) {
				console.log('Cannot pause / resume. GameOver set to true.');
				return;
			}
			if (!this.started) {
				this.forceStartAnimationLoop();
			} else if (this.pause) {
				this.forceResume();
			} else {
				this.pauseAndShowMessage("Pause", "Cliquez pour revenir au jeu");
			}
		};

		this.loadMapConfig = async () => {
			console.log('load map config');
			return new Promise((resolve, reject) => {
				$.ajax({
					url: configCarte,
						if (xhr.overrideMimeType) xhr.overrideMimeType("application/json");
					},
					dataType: "json",
					success: (data) => {
						console.log('map config loaded');
						jeuPrincipal.map = data;
						resolve(data);
					},
					error: (response) => {
						console.error('error fetching map config');
						reject(response);
					}
				});
			})
		};

		this.getPillCount = () => {
					if (this.type == "pill") {
						temp++;
						//console.log("Pill Count++. temp="+temp+". PillCount="+this.pillCount+".");
					}
				});
			});
			return temp;
		}

		this.init = async (state) => {

			console.log("init jeuPrincipal " + state);
			this.map = await this.loadMapConfig();
			this.pillCount = this.getPillCount();

			if (state === 0) {
				this.timer.reset();
				jeuPrincipal.reset();
			}
			personnageCentral.reset();

			jeuPrincipal.drawHearts(personnageCentral.lives);

			this.ghostFrightened = false;
			this.ghostFrightenedTimer = 240;
			this.ghostMode = 0; // 0 = Scatter, 1 = Chase
			this.ghostModeTimer = 200; // decrements each animationLoop execution

			// init fantomes à ne pas virer pitié
			if (fantomeRose === null || fantomeRose === undefined) {
				fantomeRose = new Ghost(GHOSTS.PINKY, 7, 5, 'img/fantomeRose.svg', 2, 2);
				fantomeBleu = new Ghost(GHOSTS.INKY, 8, 5, 'img/fantomeBleu.svg', 13, 11);
				fantomeRouge = new Ghost(GHOSTS.BLINKY, 9, 5, 'img/fantomeRouge.svg', 13, 0);
				fantomeOrange = new Ghost(GHOSTS.CLYDE, 10, 5, 'img/fantomeOrange.svg', 2, 11);
			} else {
				fantomeRose.reset();
				fantomeBleu.reset();
				fantomeRouge.reset();
				fantomeOrange.reset();
			}
			fantomeRouge.start();
			fantomeBleu.start();
			fantomeRose.start();
			fantomeOrange.start();
		};

			if ((this.pillCount === 0) && jeuPrincipal.started) {
				this.nextLevel();
			}
		};

			console.log('Game Over by ' + (allLevelsCompleted ? 'WIN' : 'LOSS'));
			this.pause = true;
			this.gameOver = true;
		}

			return gridPos * 30;
		};

			return ((pixelPos % 30) / 30);
		};

			if (this.ghostMode === 0) jeuPrincipal.wallColor = "Blue";
			else jeuPrincipal.wallColor = "Red";
			canvas_walls = document.createElement('toileDeJeu');
			canvas_walls.width = jeuPrincipal.toileDeJeu.width;
			canvas_walls.height = jeuPrincipal.toileDeJeu.height;
			context_walls = canvas_walls.getContext("2d");

			context_walls.fillStyle = jeuPrincipal.wallColor;
			context_walls.strokeStyle = jeuPrincipal.wallColor;

			buildWall(context_walls, 0, 0, 18, 1);
			buildWall(context_walls, 0, 12, 18, 1);
			buildWall(context_walls, 0, 0, 1, 6);
			buildWall(context_walls, 0, 7, 1, 6);
			buildWall(context_walls, 17, 0, 1, 6);
			buildWall(context_walls, 17, 7, 1, 6);
			buildWall(context_walls, 7, 4, 1, 1);
			buildWall(context_walls, 6, 5, 1, 2);
			buildWall(context_walls, 10, 4, 1, 1);
			buildWall(context_walls, 11, 5, 1, 2);
			buildWall(context_walls, 6, 6, 6, 1);
			context_walls.fillRect(8 * 2 * personnageCentral.radius, personnageCentral.radius / 2 + 4 * 2 * personnageCentral.radius + 5, 4 * personnageCentral.radius, 1);
			buildWall(context_walls, 4, 0, 1, 2);
			buildWall(context_walls, 13, 0, 1, 2);
			buildWall(context_walls, 2, 2, 1, 2);
			buildWall(context_walls, 6, 2, 2, 1);
			buildWall(context_walls, 15, 2, 1, 2);
			buildWall(context_walls, 10, 2, 2, 1);
			buildWall(context_walls, 2, 3, 2, 1);
			buildWall(context_walls, 14, 3, 2, 1);
			buildWall(context_walls, 5, 3, 1, 1);
			buildWall(context_walls, 12, 3, 1, 1);
			buildWall(context_walls, 3, 3, 1, 3);
			buildWall(context_walls, 14, 3, 1, 3);
			buildWall(context_walls, 3, 4, 1, 1);
			buildWall(context_walls, 14, 4, 1, 1);
			buildWall(context_walls, 0, 5, 2, 1);
			buildWall(context_walls, 3, 5, 2, 1);
			buildWall(context_walls, 16, 5, 2, 1);
			buildWall(context_walls, 13, 5, 2, 1);
			buildWall(context_walls, 0, 7, 2, 2);
			buildWall(context_walls, 16, 7, 2, 2);
			buildWall(context_walls, 3, 7, 2, 2);
			buildWall(context_walls, 13, 7, 2, 2);
			buildWall(context_walls, 4, 8, 2, 2);
			buildWall(context_walls, 12, 8, 2, 2);
			buildWall(context_walls, 5, 8, 3, 1);
			buildWall(context_walls, 10, 8, 3, 1);
			buildWall(context_walls, 2, 10, 1, 1);
			buildWall(context_walls, 15, 10, 1, 1);
			buildWall(context_walls, 7, 10, 4, 1);
			buildWall(context_walls, 4, 11, 2, 2);
			buildWall(context_walls, 12, 11, 2, 2);
		};
	}

	jeuPrincipal = new Game();

		this.score = 0;
			this.score = i;
		};
			this.score += i;
		};
			$(h).html("Score: " + this.score);
		};

	}

		this.name = name;
		this.angle1 = angle1;
		this.angle2 = angle2;
		this.dirX = dirX;
		this.dirY = dirY;
			return JSON.stringify(this) == JSON.stringify(dir);
		};
	}


		this.dir = null;
			this.dir = dir;
		};
			return this.dir;
		};
	}

		this.name = name;
		this.posX = gridPosX * 30;
		this.posY = gridPosY * 30;
		this.startPosX = gridPosX * 30;
		this.startPosY = gridPosY * 30;
		this.gridBaseX = gridBaseX;
		this.gridBaseY = gridBaseY;
		this.speed = jeuPrincipal.ghostSpeedNormal;
		this.images = JSON.parse(
			'{"normal" : {' +
			`"${GHOSTS.INKY}" : "0",` +
			`"${GHOSTS.PINKY}" : "1",` +
			`"${GHOSTS.BLINKY}" : "2",` +
			`"${GHOSTS.CLYDE}" : "3"` +
			'},' +
			'"frightened1" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""},' +
			'"frightened2" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""},' +
			'"dead" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""}}'
		);
		this.image = new Image();
		this.image.src = image;
		this.ghostHouse = true;
		this.dazzled = false;
		this.dead = false;
			this.changeSpeed(jeuPrincipal.ghostSpeedDazzled);
			if (this.posX > 0) this.posX = this.posX - this.posX % this.speed;
			if (this.posY > 0) this.posY = this.posY - this.posY % this.speed;
			this.dazzled = true;
		}
			if (!this.dead) this.changeSpeed(jeuPrincipal.ghostSpeedNormal);
			if (this.posX > 0) this.posX = this.posX - this.posX % this.speed;
			if (this.posY > 0) this.posY = this.posY - this.posY % this.speed;
			this.dazzled = false;
		}
		this.dazzleImg = new Image();
		this.dazzleImg.src = 'img/dazzled.svg';
		this.dazzleImg2 = new Image();
		this.dazzleImg2.src = 'img/dazzled2.svg';
		this.deadImg = new Image();
		this.deadImg.src = 'img/dead.svg';
		this.direction = right;
		this.radius = personnageCentral.radius;
			if (this.dead) {
				contexteDessin.drawImage(this.deadImg, this.posX, this.posY, 2 * this.radius, 2 * this.radius);
			} else if (this.dazzled) {
				if (personnageCentral.beastModeTimer < 50 && personnageCentral.beastModeTimer % 8 > 1) {
					contexteDessin.drawImage(this.dazzleImg2, this.posX, this.posY, 2 * this.radius, 2 * this.radius);
				} else {
					contexteDessin.drawImage(this.dazzleImg, this.posX, this.posY, 2 * this.radius, 2 * this.radius);
				}
			} else contexteDessin.drawImage(this.image, this.posX, this.posY, 2 * this.radius, 2 * this.radius);
		}
			return this.posX + this.radius;
		}
			return this.posY + this.radius;
		}

			this.dead = false;
			this.posX = this.startPosX;
			this.posY = this.startPosY;
			this.ghostHouse = true;
			this.undazzle();
		}

			if (!this.dead) {
				jeuPrincipal.score.add(GHOST_POINTS);
				this.dead = true;
				this.changeSpeed(jeuPrincipal.ghostSpeedNormal);
			}
		}
			this.posX = Math.round(this.posX / s) * s;
			this.posY = Math.round(this.posY / s) * s;
			this.speed = s;
		}


			this.checkDirectionChange();
			this.checkCollision();

			if (this.ghostHouse == true) {
				if (this.name == GHOSTS.CLYDE) {
					if ((jeuPrincipal.level < 4) || ((jeuPrincipal.pillCount > 104 / 3))) this.stop = true;
					else this.stop = false;
				}
				if (this.name == GHOSTS.INKY) {
					if ((jeuPrincipal.level < 3) || ((jeuPrincipal.pillCount > 104 - 30))) this.stop = true;
					else this.stop = false;
				}
				if ((this.getGridPosY() == 5) && this.inGrid()) {
					if ((this.getGridPosX() == 7)) this.setDirection(right);
					if ((this.getGridPosX() == 8) || this.getGridPosX() == 9) this.setDirection(up);
					if ((this.getGridPosX() == 10)) this.setDirection(left);
				}
				if ((this.getGridPosY() == 4) && ((this.getGridPosX() == 8) || (this.getGridPosX() == 9)) && this.inGrid()) {
					console.log("ghosthouse -> false");
					this.ghostHouse = false;
				}
			}

			if (!this.stop) {
				// Move
				this.posX += this.speed * this.dirX;
				this.posY += this.speed * this.dirY;

				if (this.posX >= jeuPrincipal.width - this.radius) this.posX = this.speed - this.radius;
				if (this.posX <= 0 - this.radius) this.posX = jeuPrincipal.width - this.speed - this.radius;
				if (this.posY >= jeuPrincipal.height - this.radius) this.posY = this.speed - this.radius;
				if (this.posY <= 0 - this.radius) this.posY = jeuPrincipal.height - this.speed - this.radius;
			}
		}


			if (this.dead && (this.getGridPosX() == this.startPosX / 30) && (this.getGridPosY() == this.startPosY / 30)) this.reset();
			else {

				if ((between(personnageCentral.getCenterX(), this.getCenterX() - 10, this.getCenterX() + 10)) &&
					(between(personnageCentral.getCenterY(), this.getCenterY() - 10, this.getCenterY() + 10))) {
					if ((!this.dazzled) && (!this.dead)) {
						personnageCentral.die();
					} else {
						this.die();
					}
				}
			}
		}

			jeuPrincipal.getMapContent(pX, pY);

			if (this.dead) {
			} else if (jeuPrincipal.ghostMode == 0) {
			} else if (jeuPrincipal.ghostMode == 1) {

				switch (this.name) {

					case GHOSTS.PINKY:

						break;

					case GHOSTS.BLINKY:
						break;

					case GHOSTS.INKY:
						tX = Math.abs(fantomeRouge.getGridPosX() + vX * 2);
						tY = Math.abs(fantomeRouge.getGridPosY() + vY * 2);
						break;

					case GHOSTS.CLYDE:

						if (dist < 5) {
							tX = this.gridBaseX;
							tY = this.gridBaseY;
						}
						break;

				}
			}
			dirs[0].field = jeuPrincipal.getMapContent(pX, pY - 1);
			dirs[0].dir = up;
			dirs[0].distance = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY - 1 - tY), 2));
			dirs[1].field = jeuPrincipal.getMapContent(pX, pY + 1);
			dirs[1].dir = down;
			dirs[1].distance = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY + 1 - tY), 2));
			dirs[2].field = jeuPrincipal.getMapContent(pX + 1, pY);
			dirs[2].dir = right;
			dirs[2].distance = Math.sqrt(Math.pow((pX + 1 - tX), 2) + Math.pow((pY - tY), 2));
			dirs[3].field = jeuPrincipal.getMapContent(pX - 1, pY);
			dirs[3].dir = left;
			dirs[3].distance = Math.sqrt(Math.pow((pX - 1 - tX), 2) + Math.pow((pY - tY), 2));

				if (a.distance < b.distance)
					return -1;
				if (a.distance > b.distance)
					return 1;
				return 0;
			}

			if (this.dead) {
					if ((dirs2[i].field != "wall") && !(dirs2[i].dir.equals(this.getOppositeDirection()))) {
						r = dirs2[i].dir;
					}
				}
			} else {
					if ((dirs2[i].field != "wall") && (dirs2[i].field != "door") && !(dirs2[i].dir.equals(this.getOppositeDirection()))) {
						r = dirs2[i].dir;
					}
				}
			}
			this.directionWatcher.set(r);
			return r;
		}

			switch (dir) {
				case 1:
					if (this.getOppositeDirection().equals(up)) this.setDirection(down);
					else this.setDirection(up);
					break;
				case 2:
					if (this.getOppositeDirection().equals(down)) this.setDirection(up);
					else this.setDirection(down);
					break;
				case 3:
					if (this.getOppositeDirection().equals(right)) this.setDirection(left);
					else this.setDirection(right);
					break;
				case 4:
					if (this.getOppositeDirection().equals(left)) this.setDirection(right);
					else this.setDirection(left);
					break;
			}
		}
			console.log("reverseDirection: " + this.direction.name + " to " + this.getOppositeDirection().name);
			this.directionWatcher.set(this.getOppositeDirection());
		}

	}

	Ghost.prototype = new EntiteJeu();

		this.posX;
		this.posY;
		this.speed;
		this.dirX = right.dirX;
		this.dirY = right.dirY;
		this.direction;
		this.stop = true;
		this.directionWatcher = new directionWatcher();
			console.log("EntiteJeu getNextDirection");
		};
			if (this.inGrid() && (this.directionWatcher.get() == null)) this.getNextDirection();
			if ((this.directionWatcher.get() != null) && this.inGrid()) {
				this.setDirection(this.directionWatcher.get());
				this.directionWatcher.set(null);
			}

		}

			if ((this.posX % (2 * this.radius) === 0) && (this.posY % (2 * this.radius) === 0)) return true;
			return false;
		}
			if (this.direction.equals(up)) return down;
			else if (this.direction.equals(down)) return up;
			else if (this.direction.equals(right)) return left;
			else if (this.direction.equals(left)) return right;
		}

			if (!this.stop) {
				this.posX += this.speed * this.dirX;
				this.posY += this.speed * this.dirY;

				if (this.posX >= jeuPrincipal.width - this.radius) this.posX = this.speed - this.radius;
				if (this.posX <= 0 - this.radius) this.posX = jeuPrincipal.width - this.speed - this.radius;
				if (this.posY >= jeuPrincipal.height - this.radius) this.posY = this.speed - this.radius;
				if (this.posY <= 0 - this.radius) this.posY = jeuPrincipal.height - this.speed - this.radius;
			}
		}
			this.stop = true;
		}
			this.stop = false;
		}

			return (this.posX - (this.posX % 30)) / 30;
		}
			return (this.posY - (this.posY % 30)) / 30;
		}
			this.dirX = dir.dirX;
			this.dirY = dir.dirY;
			this.angle1 = dir.angle1;
			this.angle2 = dir.angle2;
			this.direction = dir;
		}
			this.posX = x;
			this.posY = y;
		}
	}

		this.radius = 15;
		this.posX = 0;
		this.posY = 6 * 2 * this.radius;
		this.speed = 5;
		this.angle1 = 0.25;
		this.angle2 = 1.75;
		this.mouth = 1;
		this.dirX = right.dirX;
		this.dirY = right.dirY;
		this.lives = 3;
		this.stuckX = 0;
		this.stuckY = 0;
		this.frozen = false;
			this.frozen = true;
		}
			this.frozen = false;
		}
			return this.posX + this.radius;
		}
			return this.posY + this.radius;
		}
		this.directionWatcher = new directionWatcher();

		this.direction = right;

		this.beastMode = false;
		this.beastModeTimer = 0;


			if ((this.stuckX == 0) && (this.stuckY == 0) && this.frozen == false) {


				if ((this.dirX == 1) && (gridAheadX < 17)) gridAheadX += 1;
				if ((this.dirY == 1) && (gridAheadY < 12)) gridAheadY += 1;

				if ((field === "pill") || (field === "powerpill")) {
					if (
						((this.dirX == 1) && (between(this.posX, jeuPrincipal.toPixelPos(gridX) + this.radius - this.speed, jeuPrincipal.toPixelPos(gridX + 1)))) ||
						((this.dirX == -1) && (between(this.posX, jeuPrincipal.toPixelPos(gridX), jeuPrincipal.toPixelPos(gridX) + this.speed))) ||
						((this.dirY == 1) && (between(this.posY, jeuPrincipal.toPixelPos(gridY) + this.radius - this.speed, jeuPrincipal.toPixelPos(gridY + 1)))) ||
						((this.dirY == -1) && (between(this.posY, jeuPrincipal.toPixelPos(gridY), jeuPrincipal.toPixelPos(gridY) + this.speed))) ||
						(fieldAhead === "wall")
					) {
						if (field === "powerpill") {
							s = POWERPILL_POINTS;
							this.enableBeastMode();
							jeuPrincipal.startGhostFrightened();
						} else {
							s = PILL_POINTS;
							jeuPrincipal.pillCount--;
						}
						jeuPrincipal.map.posY[gridY].posX[gridX].type = "null";
						jeuPrincipal.score.add(s);
					}
				}

				if ((fieldAhead === "wall") || (fieldAhead === "door")) {
					this.stuckX = this.dirX;
					this.stuckY = this.dirY;
					personnageCentral.stop();
					if ((this.stuckX == 1) && ((this.posX % 2 * this.radius) != 0)) this.posX -= this.speed;
					if ((this.stuckY == 1) && ((this.posY % 2 * this.radius) != 0)) this.posY -= this.speed;
					if (this.stuckX == -1) this.posX += this.speed;
					if (this.stuckY == -1) this.posY += this.speed;
				}

			}
		}
			if (this.directionWatcher.get() != null) {
				console.groupCollapsed('checkDirectionChange');

				if ((this.stuckX == 1) && this.directionWatcher.get() == right) this.directionWatcher.set(null);
				else {
					this.stuckX = 0;
					this.stuckY = 0;

					if ((this.inGrid())) {
						console.debug("x: " + this.getGridPosX() + " + " + this.directionWatcher.get().dirX);
						console.debug("y: " + this.getGridPosY() + " + " + this.directionWatcher.get().dirY);
						if (x <= -1) x = jeuPrincipal.width / (this.radius * 2) - 1;
						if (x >= jeuPrincipal.width / (this.radius * 2)) x = 0;
						if (y <= -1) x = jeuPrincipal.height / (this.radius * 2) - 1;
						if (y >= jeuPrincipal.heigth / (this.radius * 2)) y = 0;

						console.debug("x: " + x);
						console.debug("y: " + y);
						console.debug("checkNextTile: " + nextTile);

						if (nextTile != "wall") {
							this.setDirection(this.directionWatcher.get());
							this.directionWatcher.set(null);
						}
					}
				}
				console.groupEnd();
			}
		}
			if (!this.frozen) {
				this.dirX = dir.dirX;
				this.dirY = dir.dirY;
				this.angle1 = dir.angle1;
				this.angle2 = dir.angle2;
				this.direction = dir;
			}
		}

			this.beastMode = true;
			this.beastModeTimer = 240;
			console.debug("boule mangée");
			fantomeBleu.dazzle();
			fantomeRose.dazzle();
			fantomeRouge.dazzle();
			fantomeOrange.dazzle();
		};
			this.beastMode = false;
			console.debug("fin mode boule mangée");
			fantomeBleu.undazzle();
			fantomeRose.undazzle();
			fantomeRouge.undazzle();
			fantomeOrange.undazzle();
		};


			if (!this.frozen) {
				if (this.beastModeTimer > 0) {
					this.beastModeTimer--;
					//console.log("Beast Mode: "+this.beastModeTimer);
				}
				if ((this.beastModeTimer == 0) && (this.beastMode == true)) this.disableBeastMode();

				this.posX += this.speed * this.dirX;
				this.posY += this.speed * this.dirY;

				// Check if out of toileDeJeu
				if (this.posX >= jeuPrincipal.width - this.radius) this.posX = 5 - this.radius;
				if (this.posX <= 0 - this.radius) this.posX = jeuPrincipal.width - 5 - this.radius;
				if (this.posY >= jeuPrincipal.height - this.radius) this.posY = 5 - this.radius;
				if (this.posY <= 0 - this.radius) this.posY = jeuPrincipal.height - 5 - this.radius;
			} else this.dieAnimation();
		}


			if (!this.frozen) {
				if (this.dirX == this.dirY == 0) {

					this.angle1 -= this.mouth * 0.07;
					this.angle2 += this.mouth * 0.07;


					if (this.angle1 < limitMin1 || this.angle2 > limitMin2) {
						this.mouth = -1;
					}
					if (this.angle1 >= limitMax1 || this.angle2 <= limitMax2) {
						this.mouth = 1;
					}
				}
			}
		}
			this.dirX = 0;
			this.dirY = 0;
		}
			this.unfreeze();
			this.posX = 0;
			this.posY = 6 * 2 * this.radius;
			this.setDirection(right);
			this.stop();
			this.stuckX = 0;
			this.stuckY = 0;
			//console.log("reset personnageCentral");
		}
			this.angle1 += 0.05;
			this.angle2 -= 0.05;
			if (this.angle1 >= this.direction.angle1 + 0.7 || this.angle2 <= this.direction.angle2 - 0.7) {
				this.dieFinal();
			}
		}
			this.freeze();
			this.dieAnimation();
		}
			this.reset();
			fantomeRose.reset();
			fantomeBleu.reset();
			fantomeRouge.reset();
			fantomeOrange.reset();
			this.lives--;
			console.log("personnageCentral died, " + this.lives + " lives left");
			if (this.lives <= 0) {
				jeuPrincipal.endGame();
				jeuPrincipal.showHighscoreForm();
			}
			jeuPrincipal.drawHearts(this.lives);
		}
			return (this.posX - (this.posX % 30)) / 30;
		}
			return (this.posY - (this.posY % 30)) / 30;
		}
	}
	personnageCentral.prototype = new EntiteJeu();
	jeuPrincipal.buildWalls();


		console.log('check AppCache');
			console.log("AppCache: updateready");
			if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {

				window.applicationCache.swapCache();
				if (confirm('A new version of this site is available. Load it?')) {
					window.location.reload();
				}

			}
		}, false);

			console.log("AppCache: cached");
		}, false);

	}

		console.log("hide adressbar");
		$("html").scrollTop(1);
		$("body").scrollTop(1);
	}


		if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
			logger.disableLogger();
		}

		$.ajaxSetup({
			mimeType: "application/json"
		});

		$.ajaxSetup({
				if (xhr.overrideMimeType) {
					xhr.overrideMimeType("application/json");
				}
			}
		});

		hideAdressbar();

		if (window.applicationCache != null) checkAppCache();

		window.addEventListener('keydown', doKeyDown, true);

			if (!(jeuPrincipal.gameOver === true)) jeuPrincipal.pauseResume();
		});

			console.log("submit highscore pressed");
			if ($('#playerName').val() === "" || $('#playerName').val() === undefined) {
				$('#form-validator').html("Please enter a name<br/>");
			} else {
				$('#form-validator').html("");
				addHighscore();
			}
		});

			jeuPrincipal.showContent('highscore-content');
			getHighscore();
		});

			if ($('#jeuPrincipal-content').is(":visible")) {
				event.gesture.preventDefault();
				personnageCentral.directionWatcher.set(right);
			}
		});
			if ($('#jeuPrincipal-content').is(":visible")) {
				event.gesture.preventDefault();
				personnageCentral.directionWatcher.set(left);
			}
		});
			if ($('#jeuPrincipal-content').is(":visible")) {
				event.gesture.preventDefault();
				personnageCentral.directionWatcher.set(up);
			}
		});
			if ($('#jeuPrincipal-content').is(":visible")) {
				event.gesture.preventDefault();
				personnageCentral.directionWatcher.set(down);
			}
		});

			event.preventDefault();
			personnageCentral.directionWatcher.set(up);
		});
			event.preventDefault();
			personnageCentral.directionWatcher.set(down);
		});
			event.preventDefault();
			personnageCentral.directionWatcher.set(left);
		});
			event.preventDefault();
			personnageCentral.directionWatcher.set(right);
		});

			jeuPrincipal.newGame();
		});
			jeuPrincipal.showContent('highscore-content');
			getHighscore();
		});
			jeuPrincipal.showContent('instructions-content');
		});
			jeuPrincipal.showContent('info-content');
		});
			jeuPrincipal.showContent('jeuPrincipal-content');
		});
			jeuPrincipal.toggleSound();
		});
			console.log('check for new version');
			event.preventDefault();
			window.applicationCache.update();
		});


		toileDeJeu = $("#myCanvas").get(0);
		contexteDessin = toileDeJeu.getContext("2d");

		jeuPrincipal.init(0);

		renderContent();
	});

		jeuPrincipal.score.refresh(".score");

		contexteDessin.beginPath();
		contexteDessin.fillStyle = "White";
		contexteDessin.strokeStyle = "White";

		if (jeuPrincipal.map && jeuPrincipal.map.posY && jeuPrincipal.map.posY.length > 0) {
			$.each(jeuPrincipal.map.posY, (i, row) => {
				dotPosY = row.row;
				$.each(row.posX, (j, column) => {
					if (column.type == "pill") {
						contexteDessin.arc(jeuPrincipal.toPixelPos(column.col - 1) + personnageCentral.radius, jeuPrincipal.toPixelPos(dotPosY - 1) + personnageCentral.radius, jeuPrincipal.pillSize, 0 * Math.PI, 2 * Math.PI);
						contexteDessin.moveTo(jeuPrincipal.toPixelPos(column.col - 1), jeuPrincipal.toPixelPos(dotPosY - 1));
					} else if (column.type == "powerpill") {
						contexteDessin.arc(jeuPrincipal.toPixelPos(column.col - 1) + personnageCentral.radius, jeuPrincipal.toPixelPos(dotPosY - 1) + personnageCentral.radius, jeuPrincipal.powerpillSizeCurrent, 0 * Math.PI, 2 * Math.PI);
						contexteDessin.moveTo(jeuPrincipal.toPixelPos(column.col - 1), jeuPrincipal.toPixelPos(dotPosY - 1));
					}
				});
			});
		} else {
			console.warn('Map not loaded (yet).')
		}

		contexteDessin.fill();
		contexteDessin.drawImage(canvas_walls, 0, 0);


		if (jeuPrincipal.started) {
			fantomeRose.draw(contexteDessin);
			fantomeRouge.draw(contexteDessin);
			fantomeBleu.draw(contexteDessin);
			fantomeOrange.draw(contexteDessin);

			contexteDessin.beginPath();
			contexteDessin.fillStyle = "Yellow";
			contexteDessin.strokeStyle = "Yellow";
			contexteDessin.arc(personnageCentral.posX + personnageCentral.radius, personnageCentral.posY + personnageCentral.radius, personnageCentral.radius, personnageCentral.angle1 * Math.PI, personnageCentral.angle2 * Math.PI);
			contexteDessin.lineTo(personnageCentral.posX + personnageCentral.radius, personnageCentral.posY + personnageCentral.radius);
			contexteDessin.stroke();
			contexteDessin.fill();
		}

	}

		toileDeJeu.width = toileDeJeu.width;
		renderContent();

		if (jeuPrincipal.dieAnimation == 1) personnageCentral.dieAnimation();
		if (jeuPrincipal.pause !== true) {
			personnageCentral.move();
			personnageCentral.eat();
			personnageCentral.checkDirectionChange();
			personnageCentral.checkCollisions();

			fantomeRouge.move();
			fantomeBleu.move();
			fantomeRose.move();
			fantomeOrange.move();

			jeuPrincipal.checkGhostMode();
			jeuPrincipal.checkForLevelUp();
		}
		setTimeout(animationLoop, jeuPrincipal.refreshRate);
	}




		switch (evt.keyCode) {
			case 38: // haut
				evt.preventDefault();
			case 87: // w
				personnageCentral.directionWatcher.set(up);
				break;
			case 40: // bas
				evt.preventDefault();
			case 83: // s
				personnageCentral.directionWatcher.set(down);
				break;
			case 37: // gauche
				evt.preventDefault();
			case 65: // a
				personnageCentral.directionWatcher.set(left);
				break;
			case 39: // droite
				evt.preventDefault();
			case 68: // d
				personnageCentral.directionWatcher.set(right);
				break;
			case 78: // n
				if (!$('#playerName').is(':focus')) {
					jeuPrincipal.pause = 1;
					jeuPrincipal.newGame();
				}
				break;
			case 77: // m
				jeuPrincipal.toggleSound();
				break;
			case 32: // espace
				evt.preventDefault();
				if (!(jeuPrincipal.gameOver == true) &&
					$('#jeuPrincipal-content').is(':visible')
				) jeuPrincipal.pauseResume();
				break;
		}
	}
}

geronimo();

