import seedrandom from 'seedrandom';

/**
 * Pick random item from the recieved array
 */
export function randomItem<TItem>(seed: string, ...items: Array<TItem>): TItem {
    if (items.length === 0) {
        throw new Error(`Not enough items`);
    }

    const random = seedrandom(seed.toString());

    return items[Math.floor(random()) * items.length]!;
}
