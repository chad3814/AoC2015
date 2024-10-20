import { createInterface } from 'node:readline';
import { Readable } from 'node:stream';

export function getLines(input: string) {
    const stream = Readable.from(input);
    const rl = createInterface(stream);
    return rl;
}
