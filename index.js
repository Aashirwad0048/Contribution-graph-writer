import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import { Random } from "random-js";

const path = "./data.json";
const random = new Random();

const makeCommits = async (n) => {
    if (n === 0) {
        await simpleGit().push();
        return;
    }
    const x = random.integer(0, 54);
    const y = random.integer(0, 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

    // Add a unique field to ensure file changes
    const data = {
        date: date,
        commitNumber: n
    };
    console.log(`Commit #${n}: ${date}`);
    await new Promise((resolve, reject) => {
        jsonfile.writeFile(path, data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
    await simpleGit().add([path]);
    await simpleGit().commit(`Commit #${n}: ${date}`, { '--date': date });
    await makeCommits(n - 1);
};

makeCommits(100);

