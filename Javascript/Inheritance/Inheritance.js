console.clear();

class Human {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

class Player extends Human {
    constructor(name, age, sportName, inMainTeam) {
        super(name, age);
        this._sportName = sportName;
        this._inMainTeam = inMainTeam;
    }

    get sportName() {
        return this._sportName;
    }

    get inMainTeam() {
        return this._inMainTeam;
    }
}

class FootbalPlayer extends Player {
    constructor(name, age, inMainTeam) {
        super(name, age, 'footbal', inMainTeam);
    }
}

class Team {
    constructor() {
        this._footbalPlayers = [];
    }

    get players() {
        return [...this._footbalPlayers];
    }

    addPlayers(...footbalPlayers) {
        this._footbalPlayers.push(...footbalPlayers);
    }

    deletePlayer(footbalPlayer) {
        const index = this._footbalPlayers.indexOf(footbalPlayer);
        if (index !== -1) {
            this._footbalPlayers.splice(index, 1);
        }
    }

    getPlayersSortedByName() {
        return [...this._footbalPlayers].sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();
            return name1.localeCompare(name2);
        });
    }

    getFilteredPlayers(inMainTeam) {
        return this._footbalPlayers.filter(player => player.inMainTeam === inMainTeam);
    }
}

const team = new Team();

team.addPlayers(
    new FootbalPlayer('Murad', 25, false),
    new FootbalPlayer('Alex', 26, true),
    new FootbalPlayer('Denis', 24, false),
);

team.players[1] = 'HACKED';

const sortedFootballPlayers = team.getPlayersSortedByName();
sortedFootballPlayers[2] = 'HACKED';

for (const footballPlayer of team.players) {
    console.log(footballPlayer);
}
