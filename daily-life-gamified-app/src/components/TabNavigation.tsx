import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import DailyTasksScreen from '../screens/DailyTasksScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ExtraTasksScreen from '../screens/ExtraTasksScreen';
import StreakCalendarScreen from '../screens/StreakCalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type TabParamList = {
  Home: undefined;
  DailyTasks: undefined;
  ExtraTasks: undefined;
  Achievements: undefined;
  Calendar: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Custom emoji icon component
const EmojiIcon = ({ emoji, focused }: { emoji: string; focused: boolean }) => (
  <Text style={{ 
    fontSize: 24, 
    opacity: focused ? 1 : 0.6,
    transform: [{ scale: focused ? 1.1 : 1 }]
  }}>
    {emoji}
  </Text>
);

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: { name: keyof TabParamList } }) => ({
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          let emoji = '🏠';

          switch (route.name) {
            case 'Home':
              emoji = '🏠';
              break;
            case 'DailyTasks':
              emoji = '🎯';
              break;
            case 'ExtraTasks':
              emoji = '➕';
              break;
            case 'Achievements':
              emoji = '🏆';
              break;
            case 'Calendar':
              emoji = '📅';
              break;
            case 'Settings':
              emoji = '⚙️';
              break;
          }

          return <EmojiIcon emoji={emoji} focused={focused} />;
        },
        tabBarActiveTintColor: '#00d4aa',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#16213e',
          borderTopColor: '#00d4aa',
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="DailyTasks" component={DailyTasksScreen} options={{ tabBarLabel: 'Daily' }} />
      <Tab.Screen name="ExtraTasks" component={ExtraTasksScreen} options={{ tabBarLabel: 'Extra' }} />
      <Tab.Screen name="Achievements" component={AchievementsScreen} options={{ tabBarLabel: 'Badges' }} />
      <Tab.Screen name="Calendar" component={StreakCalendarScreen} options={{ tabBarLabel: 'Calendar' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} />
    </Tab.Navigator>
  );
}