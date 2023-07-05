import { Note } from '../types/noteTypes';

type Action =
  | { type: 'ADD_NOTE'; payload: { text: string } }
  | { type: 'DELETE_NOTE'; payload: { id: number } };

export const noteReducer = (state: Note[], action: Action): Note[] => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.payload.text,
        },
      ];
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};
