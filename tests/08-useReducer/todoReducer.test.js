import {todoReducer} from '../../src/08-useReducer/todoReducer';

describe("Pruebas en todoReducer", () => {
  const initialState = [{
    id: 1,
    description: 'Demo todo',
    done: false
  }];
  
  
  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un todo', () => { 

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false
      }  
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

  });

  test('debe de eliminar un todo', () => { 
    const deleteTodo = {
      type: '[TODO] Remove todo',
      payload: {
        id: 2
      }
    };
    const newState = todoReducer(initialState, deleteTodo);
    expect(newState.length).toBe(1);
    expect(newState).not.toContain(deleteTodo.payload);
  });

  test('debe de realizar el toggle del todo', () => {
    const toggleAction = {
      type: '[TODO] Toggle todo',
      payload: 1
    };
    const newState = todoReducer(initialState, toggleAction);
    expect(newState[0].done).toBe(true);
  })
});
