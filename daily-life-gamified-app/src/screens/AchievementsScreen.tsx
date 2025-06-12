import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AchievementsScreen() {
  const achievements = [
    { id: '1', name: 'First Steps', description: 'Complete your first task', emoji: '👶', unlocked: true, date: '2024-01-15' },
    { id: '2', name: 'Week Warrior', description: '7-day streak', emoji: '🔥', unlocked: true, date: '2024-01-22' },
    { id: '3', name: 'Fitness Fanatic', description: 'Complete 10 fitness tasks', emoji: '💪', unlocked: true, date: '2024-02-01' },
    { id: '4', name: 'Knowledge Seeker', description: 'Read for 5 hours total', emoji: '📚', unlocked: true, date: '2024-02-05' },
    { id: '5', name: 'Level 5 Hero', description: 'Reach Level 5', emoji: '🦸‍♂️', unlocked: true, date: '2024-02-10' },
    { id: '6', name: 'Consistency King', description: '30-day streak', emoji: '👑', unlocked: false, progress: 15 },
    { id: '7', name: 'XP Master', description: 'Earn 1000 total XP', emoji: '⭐', unlocked: false, progress: 750 },
    { id: '8', name: 'Early Bird', description: 'Complete morning tasks 10 times', emoji: '🌅', unlocked: false, progress: 3 },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🏆 Achievements</Text>
        <Text style={styles.subtitle}>Your badges and milestones</Text>
        <Text style={styles.progress}>{unlockedCount}/{achievements.length} Unlocked</Text>
      </View>

      <View style={styles.achievementsGrid}>
        {achievements.map((achievement) => (
          <View 
            key={achievement.id} 
            style={[
              styles.achievementCard, 
              achievement.unlocked ? styles.unlockedCard : styles.lockedCard
            ]}
          >
            <Text style={[
              styles.achievementEmoji, 
              !achievement.unlocked && styles.lockedEmoji
            ]}>
              {achievement.unlocked ? achievement.emoji : '🔒'}
            </Text>
            
            <Text style={[
              styles.achievementName,
              !achievement.unlocked && styles.lockedText
            ]}>
              {achievement.name}
            </Text>
            
            <Text style={[
              styles.achievementDescription,
              !achievement.unlocked && styles.lockedText
            ]}>
              {achievement.description}
            </Text>
            
            {achievement.unlocked ? (
              <Text style={styles.unlockedDate}>
                Unlocked: {achievement.date}
              </Text>
            ) : achievement.progress ? (
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                  {achievement.progress}/{achievement.id === '6' ? 30 : achievement.id === '7' ? 1000 : 10}
                </Text>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { width: `${(achievement.progress / (achievement.id === '6' ? 30 : achievement.id === '7' ? 1000 : 10)) * 100}%` }
                    ]} 
                  />
                </View>
              </View>
            ) : null}
          </View>
        ))}
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
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 10,
  },
  progress: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00d4aa',
  },
  achievementsGrid: {
    padding: 20,
    gap: 15,
  },
  achievementCard: {
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  unlockedCard: {
    backgroundColor: '#16213e',
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  lockedCard: {
    backgroundColor: '#2a2a4e',
    borderWidth: 1,
    borderColor: '#444',
  },
  achievementEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  lockedEmoji: {
    opacity: 0.3,
  },
  achievementName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  achievementDescription: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 10,
  },
  lockedText: {
    opacity: 0.5,
  },
  unlockedDate: {
    fontSize: 12,
    color: '#00d4aa',
    fontWeight: '600',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 5,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#444',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00d4aa',
    borderRadius: 3,
  },
});