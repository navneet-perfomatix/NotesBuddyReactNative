import React, { createContext, useReducer, ReactNode } from 'react';
import { Note } from '../types/noteTypes';
import { noteReducer } from '../reducers/noteReducer';

interface NoteContextProps {
  notes: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: number) => void;
}

interface NoteProviderProps {
  children: ReactNode;
}

export const NoteContext = createContext<NoteContextProps>({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
});

export const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);

  const addNote = (text: string) => {
    dispatch({ type: 'ADD_NOTE', payload: { text } });
  };

  const deleteNote = (id: number) => {
    dispatch({ type: 'DELETE_NOTE', payload: { id } });
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
