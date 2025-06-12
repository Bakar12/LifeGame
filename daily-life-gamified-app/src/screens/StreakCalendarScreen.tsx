import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StreakCalendarScreen() {
  const currentStreak = 7;
  const longestStreak = 15;
  const totalDays = 42;

  // Mock calendar data - in real app, this would come from your data
  const calendarDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    completed: Math.random() > 0.3, // Random completion for demo
    tasksCompleted: Math.floor(Math.random() * 6),
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📅 Streak Calendar</Text>
        <Text style={styles.subtitle}>Track your consistency over time</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="flame" size={30} color="#ff6b35" />
          <Text style={styles.statNumber}>{currentStreak}</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>
        
        <View style={styles.statCard}>
          <Ionicons name="trophy" size={30} color="#ffd700" />
          <Text style={styles.statNumber}>{longestStreak}</Text>
          <Text style={styles.statLabel}>Best Streak</Text>
        </View>
        
        <View style={styles.statCard}>
          <Ionicons name="calendar" size={30} color="#00d4aa" />
          <Text style={styles.statNumber}>{totalDays}</Text>
          <Text style={styles.statLabel}>Total Days</Text>
        </View>
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>This Month</Text>
        
        <View style={styles.weekDays}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} style={styles.weekDayLabel}>{day}</Text>
          ))}
        </View>
        
        <View style={styles.calendarGrid}>
          {calendarDays.map((dayData) => (
            <View 
              key={dayData.day} 
              style={[
                styles.calendarDay,
                dayData.completed ? styles.completedDay : styles.incompleteDay
              ]}
            >
              <Text style={[
                styles.dayNumber,
                dayData.completed ? styles.completedDayText : styles.incompleteDayText
              ]}>
                {dayData.day}
              </Text>
              {dayData.completed && (
                <Text style={styles.tasksCount}>{dayData.tasksCompleted}</Text>
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.legendContainer}>
        <Text style={styles.sectionTitle}>Legend</Text>
        <View style={styles.legendRow}>
          <View style={[styles.legendItem, styles.completedDay]}>
            <Text style={styles.completedDayText}>15</Text>
          </View>
          <Text style={styles.legendText}>Day with completed tasks</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendItem, styles.incompleteDay]}>
            <Text style={styles.incompleteDayText}>20</Text>
          </View>
          <Text style={styles.legendText}>Day with no tasks completed</Text>
        </View>
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
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
    gap: 15,
  },
  statCard: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    textAlign: 'center',
  },
  calendarContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekDayLabel: {
    fontSize: 12,
    color: '#cccccc',
    fontWeight: '600',
    width: 40,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  calendarDay: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  completedDay: {
    backgroundColor: '#00d4aa',
  },
  incompleteDay: {
    backgroundColor: '#2a2a4e',
    borderWidth: 1,
    borderColor: '#444',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  completedDayText: {
    color: '#1a1a2e',
  },
  incompleteDayText: {
    color: '#888',
  },
  tasksCount: {
    fontSize: 8,
    color: '#1a1a2e',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  legendContainer: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 15,
  },
  legendItem: {
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendText: {
    fontSize: 14,
    color: '#cccccc',
    flex: 1,
  },
});