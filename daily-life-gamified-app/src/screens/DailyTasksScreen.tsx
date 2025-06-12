import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DailyTasksScreen() {
  const [tasks] = useState([
    { id: '1', title: '🏃‍♂️ Morning Exercise (30 min)', difficulty: 'Medium', xp: 50, category: 'Fitness', completed: false },
    { id: '2', title: '📚 Read for 30 minutes', difficulty: 'Easy', xp: 30, category: 'Learning', completed: true },
    { id: '3', title: '💧 Drink 8 glasses of water', difficulty: 'Easy', xp: 20, category: 'Health', completed: false },
    { id: '4', title: '🧘‍♀️ Meditate for 10 minutes', difficulty: 'Easy', xp: 25, category: 'Wellness', completed: false },
    { id: '5', title: '📝 Write in journal', difficulty: 'Easy', xp: 20, category: 'Personal', completed: false },
    { id: '6', title: '💪 Workout (1 hour)', difficulty: 'Hard', xp: 100, category: 'Fitness', completed: false },
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9500';
      case 'Hard': return '#FF5722';
      default: return '#4CAF50';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fitness': return '#FF6B35';
      case 'Learning': return '#4ECDC4';
      case 'Health': return '#45B7D1';
      case 'Wellness': return '#96CEB4';
      case 'Personal': return '#FFEAA7';
      default: return '#00d4aa';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎯 Daily Quests</Text>
        <Text style={styles.subtitle}>Complete your daily challenges!</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4/6</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>195</Text>
          <Text style={styles.statLabel}>XP Today</Text>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        {tasks.map((task) => (
          <View key={task.id} style={[styles.taskCard, task.completed && styles.taskCardCompleted]}>
            <View style={styles.taskHeader}>
              <Text style={[styles.taskTitle, task.completed && styles.taskTitleCompleted]}>
                {task.title}
              </Text>
              <TouchableOpacity style={[styles.completeButton, task.completed && styles.completedButton]}>
                <Text style={styles.checkIcon}>
                  {task.completed ? '✅' : '⭕'}
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.taskMeta}>
              <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(task.difficulty) }]}>
                <Text style={styles.difficultyText}>{task.difficulty}</Text>
              </View>
              <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(task.category) }]}>
                <Text style={styles.categoryText}>{task.category}</Text>
              </View>
              <Text style={styles.xpReward}>+{task.xp} XP</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addIcon}>➕</Text>
        <Text style={styles.addButtonText}>Add Custom Task</Text>
      </TouchableOpacity>
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
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 15,
  },
  statCard: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d4aa',
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    marginTop: 5,
  },
  tasksContainer: {
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  taskCardCompleted: {
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  completeButton: {
    padding: 5,
  },
  completedButton: {
    opacity: 1,
  },
  checkIcon: {
    fontSize: 24,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  xpReward: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00d4aa',
    marginLeft: 'auto',
  },
  addButton: {
    backgroundColor: '#00d4aa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 20,
    borderRadius: 15,
    gap: 10,
  },
  addIcon: {
    fontSize: 24,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
});