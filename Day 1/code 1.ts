export default async function main(input: string) {
    let floor = 0;
    for (const c of input) {
        if (c === '(') floor++;
        if (c === ')') floor--;
    }

    console.log('floor:', floor);
}
