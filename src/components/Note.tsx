import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface NoteProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, text, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  deleteButton: {
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#FFFFFF',
  },
});

export default Note;
