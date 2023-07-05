import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NoteProvider, NoteContext } from '../contexts/NoteContext';
import NoteList from '../components/NoteList';

const HomeScreen: React.FC = () => {
  const { addNote } = useContext(NoteContext);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    addNote(noteText);
    setNoteText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={noteText}
        onChangeText={setNoteText}
        placeholder="Enter note..."
      />
      <Button title="Add Note" onPress={handleAddNote} />
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
});

const HomeScreenWrapper: React.FC = () => (
  <NoteProvider>
    <HomeScreen />
  </NoteProvider>
);

export default HomeScreenWrapper;
