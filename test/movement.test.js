"use strict";
import { DIRS, opposite } from "../src/common/movement";

describe('move opposite', () => {
    test('should be east opposite to west', (done) => {
        expect(opposite(DIRS.WEST)).toBe(DIRS.EAST);
        done();
    });
    test('should be west opposite to east', (done) => {
        expect(opposite(DIRS.EAST)).toBe(DIRS.WEST);
        done();
    });
    test('should be south opposite to north', (done) => {
        expect(opposite(DIRS.NORTH)).toBe(DIRS.SOUTH);
        done();
    });
    test('should be north opposite to south', (done) => {
        expect(opposite(DIRS.SOUTH)).toBe(DIRS.NORTH);
        done();
    });
    test('should be down opposite to up', (done) => {
        expect(opposite(DIRS.UP)).toBe(DIRS.DOWN);
        done();
    });
    test('should be up opposite to down', (done) => {
        expect(opposite(DIRS.DOWN)).toBe(DIRS.UP);
        done();
    });
});