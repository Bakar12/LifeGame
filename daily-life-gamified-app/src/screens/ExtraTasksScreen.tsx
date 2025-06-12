import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExtraTasksScreen() {
  const bonusTasks = [
    { id: '1', title: '🎯 Complete 5 extra push-ups', xp: 25, category: 'Bonus', timeLimit: '24h' },
    { id: '2', title: '📱 No social media for 2 hours', xp: 40, category: 'Digital Detox', timeLimit: '2h' },
    { id: '3', title: '🌱 Learn something new for 15 min', xp: 35, category: 'Learning', timeLimit: '15m' },
    { id: '4', title: '🧹 Clean and organize workspace', xp: 30, category: 'Productivity', timeLimit: '30m' },
    { id: '5', title: '📞 Call a friend or family member', xp: 20, category: 'Social', timeLimit: '15m' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>➕ Extra Quests</Text>
        <Text style={styles.subtitle}>Bonus challenges for more XP!</Text>
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="information-circle" size={24} color="#00d4aa" />
        <Text style={styles.infoText}>
          Complete extra tasks to earn bonus XP and level up faster!
        </Text>
      </View>

      <View style={styles.tasksContainer}>
        {bonusTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <View style={styles.xpBadge}>
                <Text style={styles.xpText}>+{task.xp} XP</Text>
              </View>
            </View>
            
            <View style={styles.taskMeta}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{task.category}</Text>
              </View>
              <View style={styles.timeBadge}>
                <Ionicons name="time" size={14} color="#ff9500" />
                <Text style={styles.timeText}>{task.timeLimit}</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Quest</Text>
            </TouchableOpacity>
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
  },
  infoCard: {
    backgroundColor: '#16213e',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#00d4aa',
  },
  infoText: {
    color: '#ffffff',
    fontSize: 14,
    flex: 1,
  },
  tasksContainer: {
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#00d4aa',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
    marginRight: 10,
  },
  xpBadge: {
    backgroundColor: '#00d4aa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  xpText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  categoryBadge: {
    backgroundColor: '#2a2a4e',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#ffffff',
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#2a2a4e',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeText: {
    fontSize: 12,
    color: '#ff9500',
    fontWeight: '600',
  },
  startButton: {
    backgroundColor: '#00d4aa',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
});