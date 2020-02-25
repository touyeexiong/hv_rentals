import getReser from './getReserReducer';

describe('testing getReser', () => {

    it('should return an action.payload', () => {
        let state = [];
        let action = { type: 'SET_RESERVATIONS'}
        let returnedState = getReser(state,action);

        expect(returnedState).toEqual(action.payload)
    })

    it('should return state=[]', () => {
        let state = undefined;
        let action = { type: 'SET_RESERVATIONS'}
        let returnedState = getReser(state,action);

        expect(returnedState).toEqual(undefined)
    })


})