import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NoteContext } from '../contexts/NoteContext';
import { Note } from '../types/noteTypes';

const NoteList: React.FC = () => {
  const { notes, deleteNote } = useContext(NoteContext);

  const renderItem = ({ item }: { item: Note }) => (
    <View style={styles.noteItem}>
      <Text>{item.text}</Text>
      <Button title="Delete" onPress={() => deleteNote(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default NoteList;
