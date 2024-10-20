export default async function main(input: string) {
    let floor = 0;
    let i = 1;
    for (const c of input) {
        if (c === '(') floor++;
        if (c === ')') floor--;
        if (floor < 0) {
            console.log('character position', i);
            return;
        }
        i++;
    }
}
