import { NricService } from './nric.service'

describe('NricService', () => {

    const PASSES = ['560224108354','560224-10-8354', '010224108354'];
    const FAILS = ['1ad224-10-8354', '123234', `asd@$as12dasd`];
    const service = new NricService();

    PASSES.forEach( value => {
        it(`${value} should be valid`, () => {
            const actual = service.isNRICValid(value);
            expect(actual).toEqual(true)
        })
    })

    FAILS.forEach( value => {
        it(`${value} should be invalid`, () => {
            expect( () => {
                service.isNRICValid(value);
            }).toThrowError('Invalid value number format');
        })
    })

    it('random some IC number', () => {
        const newIC = service.randomNRICNumber();
        console.log(newIC);
        expect(newIC.length).toEqual(12);
    })
})