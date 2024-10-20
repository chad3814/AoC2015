import { getLines } from '../common';

export default async function main(input: string) {
    let total = 0;
    for await (const line of getLines(input)) {
        const sizes = line.split('x');
        const [length, width, height] = sizes.map(s => parseInt(s, 10));

        const perimiters = [
            2 * length + 2 * width,
            2* length + 2 * height,
            2 * width + 2 * height
        ];

        total +=
            Math.min(...perimiters) +
            length * width * height;
    }

    console.log('total ribbon length:', total);
}
