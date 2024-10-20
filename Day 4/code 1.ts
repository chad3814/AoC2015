import { createHash } from 'node:crypto';

export default async function main(input: string) {
    let i = 0;
    while (true) {
        const hash = createHash('MD5');
        hash.update(input);
        hash.update(i.toString(10));
        const digest = hash.digest().toString('hex');
        if (digest.startsWith('00000')) {
            console.log('lowest is', i);
            return;
        }
        i++;
    }
}
