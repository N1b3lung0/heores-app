const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");


describe('Testing authReducer', () => {
    
    test('should return the state by default', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('should authenticate and insert the username', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Carlos'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ 
            logged: true,
            name: 'Carlos'
        });
    });

    test('should delete the username and logged turned to false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({ logged: true, name: 'Pedro' }, action);
        expect(state).toEqual({ 
            logged: false,
        });
    });
    
})
