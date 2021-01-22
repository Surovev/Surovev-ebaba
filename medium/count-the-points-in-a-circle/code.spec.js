const pointsInCircle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pointsInCircle([{x: 0, y: 0}, {x: 1, y: 1}, {x: 0, y: 5}, {x: 10, y: 10}], 0, 0, 5)).toEqual(2);
        expect(pointsInCircle([{x: 9, y: 6}, {x: 9, y: 3}, {x: 4, y: 8}, {x: 3, y: 10}, {x: 1, y: 6}], 0, 0, 7.5)).toEqual(1);
        expect(pointsInCircle([{x: 8, y: 8}, {x: 8, y: 6}, {x: 4, y: 7}], 0, 0, 1)).toEqual(0);
        expect(pointsInCircle([{x: 0, y: 0}, {x: 1, y: 1}, {x: 0, y: 5}, {x: 10, y: 10}], 50, 50, 40)).toEqual(0);
        expect(pointsInCircle([{x: 10, y: 10}, {x: 33, y: 54}, {x: 7, y: 98}, {x: 516, y: 85}], 23, 94, 100)).toEqual(3);
        expect(pointsInCircle([{x: 6, y: 3}, {x: 1, y: 4}, {x: 1, y: 9}, {x: 4, y: 9}, {x: 9, y: 3}, {x: 10, y: 8}, {x: 2, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}, {x: 1, y: 2}, {x: 8, y: 9}, {x: 6, y: 10}, {x: 10, y: 6}, {x: 8, y: 8}, {x: 2, y: 1}, {x: 7, y: 4}, {x: 6, y: 1}, {x: 8, y: 1}, {x: 8, y: 5}, {x: 2, y: 1}, {x: 10, y: 5}, {x: 6, y: 5}, {x: 8, y: 3}, {x: 7, y: 8}, {x: 1, y: 6}, {x: 8, y: 7}, {x: 4, y: 10}, {x: 6, y: 5}, {x: 4, y: 5}, {x: 1, y: 10}, {x: 4, y: 4}, {x: 6, y: 8}, {x: 2, y: 8}, {x: 2, y: 8}, {x: 1, y: 10}, {x: 3, y: 2}, {x: 5, y: 7}, {x: 10, y: 2}, {x: 9, y: 8}, {x: 4, y: 3}, {x: 9, y: 5}, {x: 6, y: 3}, {x: 1, y: 3}, {x: 5, y: 10}, {x: 2, y: 7}, {x: 10, y: 6}, {x: 8, y: 4}, {x: 9, y: 9}, {x: 1, y: 8}, {x: 1, y: 3}, {x: 2, y: 2}, {x: 10, y: 1}, {x: 5, y: 6}, {x: 10, y: 5}, {x: 8, y: 5}, {x: 9, y: 10}, {x: 1, y: 4}, {x: 5, y: 6}, {x: 6, y: 5}, {x: 2, y: 2}, {x: 10, y: 10}, {x: 6, y: 7}, {x: 2, y: 1}, {x: 4, y: 4}, {x: 8, y: 4}, {x: 6, y: 10}, {x: 6, y: 7}, {x: 3, y: 5}, {x: 9, y: 1}, {x: 1, y: 7}, {x: 2, y: 9}, {x: 7, y: 4}, {x: 9, y: 5}, {x: 7, y: 6}, {x: 9, y: 6}, {x: 3, y: 1}, {x: 2, y: 9}, {x: 7, y: 1}, {x: 3, y: 7}, {x: 6, y: 5}, {x: 8, y: 8}, {x: 7, y: 5}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 7, y: 2}, {x: 7, y: 10}, {x: 7, y: 1}, {x: 3, y: 1}, {x: 9, y: 10}, {x: 6, y: 7}, {x: 5, y: 9}, {x: 2, y: 6}, {x: 10, y: 1}, {x: 9, y: 1}, {x: 7, y: 3}, {x: 3, y: 1}, {x: 7, y: 9}, {x: 2, y: 5}, {x: 1, y: 9}, {x: 8, y: 8}], 0, 0, 7.5)).toEqual(34);
        expect(pointsInCircle([{x: 16, y: 98}, {x: 48, y: 5}, {x: 66, y: 18}, {x: 87, y: 8}, {x: 37, y: 94}, {x: 69, y: 49}, {x: 85, y: 37}, {x: 61, y: 63}, {x: 19, y: 4}, {x: 81, y: 3}, {x: 90, y: 30}, {x: 35, y: 65}, {x: 30, y: 92}, {x: 72, y: 38}, {x: 67, y: 4}, {x: 41, y: 70}, {x: 93, y: 92}, {x: 43, y: 17}, {x: 22, y: 12}, {x: 5, y: 58}, {x: 27, y: 73}, {x: 42, y: 70}, {x: 40, y: 61}, {x: 75, y: 99}, {x: 41, y: 79}, {x: 98, y: 99}, {x: 20, y: 64}, {x: 2, y: 74}, {x: 69, y: 44}, {x: 39, y: 58}, {x: 6, y: 11}, {x: 51, y: 34}, {x: 32, y: 19}, {x: 50, y: 12}, {x: 16, y: 91}, {x: 1, y: 99}, {x: 13, y: 60}, {x: 16, y: 64}, {x: 34, y: 25}, {x: 41, y: 68}, {x: 61, y: 57}, {x: 61, y: 17}, {x: 47, y: 17}, {x: 10, y: 63}, {x: 40, y: 76}, {x: 82, y: 93}, {x: 54, y: 14}, {x: 6, y: 28}, {x: 21, y: 69}, {x: 76, y: 79}, {x: 37, y: 5}, {x: 85, y: 73}, {x: 24, y: 72}, {x: 36, y: 75}, {x: 72, y: 4}, {x: 71, y: 80}, {x: 37, y: 13}, {x: 62, y: 83}, {x: 45, y: 43}, {x: 95, y: 67}, {x: 6, y: 12}, {x: 79, y: 27}, {x: 1, y: 12}, {x: 19, y: 51}, {x: 94, y: 27}, {x: 29, y: 34}, {x: 21, y: 43}, {x: 8, y: 81}, {x: 98, y: 65}, {x: 63, y: 82}, {x: 45, y: 38}, {x: 70, y: 19}, {x: 61, y: 30}, {x: 47, y: 86}, {x: 52, y: 41}, {x: 89, y: 16}, {x: 28, y: 75}, {x: 21, y: 98}, {x: 54, y: 68}, {x: 80, y: 46}, {x: 82, y: 71}, {x: 36, y: 91}, {x: 76, y: 20}, {x: 33, y: 81}, {x: 56, y: 57}, {x: 6, y: 47}, {x: 85, y: 62}, {x: 83, y: 67}, {x: 98, y: 66}, {x: 92, y: 54}, {x: 70, y: 88}, {x: 42, y: 38}, {x: 66, y: 100}, {x: 92, y: 22}, {x: 77, y: 36}, {x: 90, y: 57}, {x: 48, y: 39}, {x: 49, y: 97}, {x: 12, y: 66}, {x: 30, y: 85}], 0, 0, 50)).toEqual(16);
    });
});
