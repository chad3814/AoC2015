import { getLines } from '../common';

export default async function main(input: string) {
    let total = 0;
    for await (const line of getLines(input)) {
        const sizes = line.split('x');
        const [length, width, height] = sizes.map(s => parseInt(s, 10));

        const faces = [
            length * width,
            length * height,
            width * height
        ];
        console.log('length:', length, 'width:', width, 'height:', height, 'faces:', faces.join(', '));
        total +=
            2 * faces[0] +
            2 * faces[1] +
            2 * faces[2] +
            Math.min(...faces);
    }

    console.log('total wrapping paper:', total);
}
