import { readFile } from "node:fs/promises";

async function main() {
    if (process.argv.length < 4) {
        console.error('Specify day and problem number');
        process.exit(1);
    }

    const day = parseInt(process.argv[2], 10);
    const problem = parseInt(process.argv[3], 10);
    if (Number.isNaN(day) || day < 0 || day > 25) {
        console.error('Specify day 1-25');
        process.exit(1);
    }

    if (Number.isNaN(problem) || problem < 0 || problem > 2) {
        console.error('Specific problem 1 or 2');
        process.exit(1);
    }

    let input = await readFile(`Day ${day}/input.txt`, 'utf-8');
    const {default: code} = await import(`./Day ${day}/code ${problem}.js`);

    if (process.argv.length > 4) {
        input = process.argv[4];
    }
    await code(input);
}

main();
