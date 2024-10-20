function getKey(x: number, y: number) {
    return `${x}:${y}`;
}

export default async function main(input: string) {
    const set = new Set<string>();
    let x = 0, y = 0;
    set.add(getKey(x, y));
    for (const direction of input) {
        switch (direction) {
            case '^': y--;
                break;
            case '>': x++;
                break;
            case 'v': y++;
                break;
            case '<': x--;
                break;
        }
        set.add(getKey(x, y));
    }

    console.log('went to', set.size, 'house');
}
