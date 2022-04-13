import axios from "axios";
import {
    getBattleStatusByUsername,
    createBattleStatus,
} from "../repositories/repository.js";

async function isGithubUser(user: string) {
    const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`
    );
    return data;
}

async function countUserStars(userData) {
    let starsCount = 0;
    for (const repo of userData) {
        starsCount += repo["stargazers_count"];
    }
    return starsCount;
}

async function returnBattleResult(
    firstStarAmount,
    secondStarAmount,
    firstUser: string,
    secondUser: string
) {
    if (firstStarAmount > secondStarAmount) {
        return { winner: firstUser, loser: secondUser, draw: false };
    } else if (firstStarAmount === secondStarAmount) {
        return { winner: null, loser: null, draw: true };
    } else {
        return { winner: secondUser, loser: firstUser, draw: false };
    }
}

export async function checkUsersAndStartBattle(
    firstUser: string,
    secondUser: string
) {
    const firstUserData = await isGithubUser(firstUser);
    const secondUserData = await isGithubUser(secondUser);

    const firstUserStars = await countUserStars(firstUserData);
    const secondUserStars = await countUserStars(secondUserData);

    const battleResult = returnBattleResult(
        firstUserStars,
        secondUserStars,
        firstUser,
        secondUser
    );

    return battleResult;
}
