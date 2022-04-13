import connection from "../database.js";

export async function createBattleStatus(
    username: string,
    wins: number,
    losses: number,
    draws: number
) {
    return connection.query(
        `
        INSERT INTO fighters (username, wins, losses, draws)
            VALUES ($1,$2,$3,$4)
    `,
        [username, wins, losses, draws]
    );
}

export async function getBattleStatusByUsername(username: string) {
    return connection.query(
        `
        SELECT * FROM fighters
            WHERE username=$1
    `,
        [username]
    );
}

export async function updateBattleStatusByUsername(
    username: string,
    wins: number,
    losses: number,
    draws: number
) {
    return connection.query(
        `
        UPDATE fighters SET wins=wins+$1, losses=losses+$2, draws=draws+$3
            WHERE username = $4;
    `,
        [wins, losses, draws, username]
    );
}

export async function getFightersRaking() {
    return connection.query(`
        SELECT f.username, f.wins, f.losses, f.draws FROM fighters f
            ORDER BY f.wins AND f.draws
    `);
}
