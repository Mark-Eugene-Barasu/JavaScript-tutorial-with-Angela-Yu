
let bottle_s = `bottles`;

for (let i = 100; i >= 1 ; i--) {
    if (i < 2) {
        bottle_s = `bottle`;
    }
    console.log(`${i} ${bottle_s} of beer on the wall, ${i} ${bottle_s} of beer, take 1 down, pass it around, ${i - 1} ${bottle_s} of beer on the wall `);
}