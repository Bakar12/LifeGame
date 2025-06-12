import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Name'>;
};

const NameScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleStart = async () => {
    if (name.trim().length < 2) {
      Alert.alert('Invalid Name', 'Please enter a name with at least 2 characters');
      return;
    }
    
    try {
      await AsyncStorage.setItem('username', name.trim());
      navigation.replace('MainTabs'); // ✅ Navigate to MainTabs instead of Home
    } catch (error) {
      Alert.alert('Error', 'Failed to save your name. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <View style={styles.content}>
        <Text style={styles.title}>🎮 Level Up IRL</Text>
        <Text style={styles.subtitle}>Gamify your real life.</Text>
        
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Welcome, Future Hero! 🦸‍♂️</Text>
          <Text style={styles.description}>
            Transform your daily tasks into epic quests and gain XP for every achievement!
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your hero name..."
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
          maxLength={20}
          autoCapitalize="words"
        />

        <TouchableOpacity 
          style={[styles.button, name.trim().length < 2 && styles.buttonDisabled]} 
          onPress={handleStart}
          disabled={name.trim().length < 2}
        >
          <Text style={styles.buttonText}>🚀 Start Adventure</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#00d4aa',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#ffffff',
    opacity: 0.9,
  },
  heroContainer: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#00d4aa',
  },
  heroText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#cccccc',
    lineHeight: 22,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 18,
    fontSize: 18,
    marginBottom: 30,
    borderColor: '#00d4aa',
    borderWidth: 3,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#00d4aa',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#1a1a2e',
    fontSize: 20,
    fontWeight: 'bold',
  },
});