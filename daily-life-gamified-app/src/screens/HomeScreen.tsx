import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [level, setLevel] = useState(5);
  const [xp, setXp] = useState(450);
  const [xpToNextLevel] = useState(500);
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalQuests, setTotalQuests] = useState(42);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const name = await AsyncStorage.getItem('username');
      if (name) setUsername(name);
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  };

  const getProgressPercentage = () => {
    return (xp / xpToNextLevel) * 100;
  };

  const getTimeOfDayGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Greeting */}
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.timeGreeting}>{getTimeOfDayGreeting()}</Text>
          <Text style={styles.usernameGreeting}>Hello, {username}! 👋</Text>
        </View>
        
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* XP Progress Bar */}
      <View style={styles.xpContainer}>
        <View style={styles.levelInfo}>
          <Text style={styles.levelText}>Level {level}</Text>
          <Text style={styles.xpText}>{xp} / {xpToNextLevel} XP</Text>
        </View>
        
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${getProgressPercentage()}%` }
              ]}
            />
          </View>
          <Text style={styles.progressText}>{Math.round(getProgressPercentage())}%</Text>
        </View>
        
        <Text style={styles.nextLevelText}>
          {xpToNextLevel - xp} XP to Level {level + 1}
        </Text>
      </View>

      {/* Hero Character Display */}
      <View style={styles.characterContainer}>
        <View style={styles.characterCard}>
          <Text style={styles.characterEmoji}>🦸‍♂️</Text>
          <Text style={styles.characterTitle}>Level {level} Hero</Text>
          <Text style={styles.characterSubtitle}>Quest Master</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statNumber}>{currentStreak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>✅</Text>
          <Text style={styles.statNumber}>{totalQuests}</Text>
          <Text style={styles.statLabel}>Quests Done</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🏆</Text>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Achievements</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>➕</Text>
            <Text style={styles.actionButtonText}>Add Task</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>📅</Text>
            <Text style={styles.actionButtonText}>Today's Plan</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionButtonText}>Progress</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Achievements */}
      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>🏆 Recent Achievements</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsList}>
          <View style={styles.achievementCard}>
            <Text style={styles.achievementEmoji}>🔥</Text>
            <Text style={styles.achievementName}>Week Warrior</Text>
            <Text style={styles.achievementDesc}>7-day streak!</Text>
          </View>
          
          <View style={styles.achievementCard}>
            <Text style={styles.achievementEmoji}>💪</Text>
            <Text style={styles.achievementName}>Fitness Fanatic</Text>
            <Text style={styles.achievementDesc}>10 workouts</Text>
          </View>
          
          <View style={styles.achievementCard}>
            <Text style={styles.achievementEmoji}>📚</Text>
            <Text style={styles.achievementName}>Knowledge Seeker</Text>
            <Text style={styles.achievementDesc}>5 hours reading</Text>
          </View>
        </ScrollView>
      </View>

      {/* Motivational Quote */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>
          "The only impossible journey is the one you never begin."
        </Text>
        <Text style={styles.quoteAuthor}>- Tony Robbins</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  greetingContainer: {
    flex: 1,
  },
  timeGreeting: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 5,
  },
  usernameGreeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileButton: {
    padding: 5,
    backgroundColor: '#16213e',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 24,
    color: '#00d4aa',
  },
  xpContainer: {
    backgroundColor: '#16213e',
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00d4aa',
  },
  levelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  levelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00d4aa',
  },
  xpText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 12,
    backgroundColor: '#2a2a4e',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00d4aa',
    borderRadius: 6,
  },
  progressText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    minWidth: 40,
  },
  nextLevelText: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
  characterContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  characterCard: {
    backgroundColor: '#16213e',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00d4aa',
    width: width * 0.6,
  },
  characterEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  characterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  characterSubtitle: {
    fontSize: 16,
    color: '#00d4aa',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#16213e',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    marginTop: 5,
    textAlign: 'center',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#16213e',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionIcon: {
    fontSize: 30,
    marginBottom: 8,
    color: '#00d4aa',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  achievementsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  achievementsList: {
    flexDirection: 'row',
  },
  achievementCard: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 15,
    width: 120,
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  achievementEmoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
  },
  achievementDesc: {
    fontSize: 10,
    color: '#cccccc',
    textAlign: 'center',
  },
  quoteContainer: {
    backgroundColor: '#16213e',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#00d4aa',
    marginBottom: 100, // Extra space for tab bar
  },
  quoteText: {
    fontSize: 16,
    color: '#ffffff',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#00d4aa',
    textAlign: 'center',
    fontWeight: '600',
  },
});