import { dir } from "console";

function getKey(x: number, y: number) {
    return `${x}:${y}`;
}

export default async function main(input: string) {
    const set = new Set<string>();
    let santaX = 0, santaY = 0,
        roboX = 0, roboY = 0;
    set.add(getKey(santaX, santaY));
    set.add(getKey(roboX, roboY));
    let isSantasTurn = true;
    for (const direction of input) {
        switch (direction) {
            case '^':
                if (isSantasTurn)
                    santaY--;
                else
                    roboY--;
                break;
            case '>':
                if (isSantasTurn)
                    santaX++;
                else
                    roboX++;
                break;
            case 'v':
                if (isSantasTurn)
                    santaY++;
                else
                    roboY++;
                break;
            case '<':
                if (isSantasTurn)
                    santaX--;
                else
                    roboX--;
                break;
        }
        if (isSantasTurn)
            set.add(getKey(santaX, santaY));
        else
            set.add(getKey(roboX, roboY));

        isSantasTurn = !isSantasTurn;
    }

    console.log('went to', set.size, 'house');
}
