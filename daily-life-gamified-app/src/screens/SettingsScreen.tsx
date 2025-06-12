import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(false);

  const settingsGroups = [
    {
      title: 'App Settings',
      items: [
        {
          icon: 'notifications',
          title: 'Push Notifications',
          subtitle: 'Get reminders for daily tasks',
          type: 'toggle',
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        {
          icon: 'moon',
          title: 'Dark Mode',
          subtitle: 'Use dark theme',
          type: 'toggle',
          value: darkModeEnabled,
          onToggle: setDarkModeEnabled,
        },
        {
          icon: 'volume-high',
          title: 'Sound Effects',
          subtitle: 'Play sounds for achievements',
          type: 'toggle',
          value: soundEnabled,
          onToggle: setSoundEnabled,
        },
      ],
    },
    {
      title: 'Game Settings',
      items: [
        {
          icon: 'star',
          title: 'XP Settings',
          subtitle: 'Customize XP rewards',
          type: 'navigation',
        },
        {
          icon: 'time',
          title: 'Reminder Times',
          subtitle: 'Set when to receive reminders',
          type: 'navigation',
        },
        {
          icon: 'refresh',
          title: 'Reset Progress',
          subtitle: 'Start over (cannot be undone)',
          type: 'navigation',
          danger: true,
        },
      ],
    },
    {
      title: 'Data & Privacy',
      items: [
        {
          icon: 'cloud-upload',
          title: 'Backup Data',
          subtitle: 'Save your progress to cloud',
          type: 'navigation',
        },
        {
          icon: 'download',
          title: 'Export Data',
          subtitle: 'Download your data',
          type: 'navigation',
        },
        {
          icon: 'shield-checkmark',
          title: 'Privacy Policy',
          subtitle: 'How we handle your data',
          type: 'navigation',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: 'help-circle',
          title: 'Help & FAQ',
          subtitle: 'Get help using the app',
          type: 'navigation',
        },
        {
          icon: 'mail',
          title: 'Contact Support',
          subtitle: 'Send us feedback',
          type: 'navigation',
        },
        {
          icon: 'star-outline',
          title: 'Rate App',
          subtitle: 'Rate us on the app store',
          type: 'navigation',
        },
      ],
    },
  ];

  const renderSettingItem = (item: any) => {
    return (
      <TouchableOpacity 
        key={item.title} 
        style={[styles.settingItem, item.danger && styles.dangerItem]}
        disabled={item.type === 'toggle'}
      >
        <View style={styles.settingLeft}>
          <Ionicons 
            name={item.icon} 
            size={24} 
            color={item.danger ? '#ff5722' : '#00d4aa'} 
          />
          <View style={styles.settingText}>
            <Text style={[styles.settingTitle, item.danger && styles.dangerText]}>
              {item.title}
            </Text>
            <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
        
        <View style={styles.settingRight}>
          {item.type === 'toggle' ? (
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ false: '#2a2a4e', true: '#00d4aa' }}
              thumbColor={item.value ? '#ffffff' : '#888'}
            />
          ) : (
            <Ionicons name="chevron-forward" size={20} color="#888" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ Settings</Text>
        <Text style={styles.subtitle}>Customize your experience</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>🦸‍♂️</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Hero Name</Text>
            <Text style={styles.profileLevel}>Level 5 • 450 XP</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#00d4aa" />
          </TouchableOpacity>
        </View>
      </View>

      {settingsGroups.map((group) => (
        <View key={group.title} style={styles.settingsGroup}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.groupContainer}>
            {group.items.map(renderSettingItem)}
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
        <Text style={styles.copyrightText}>© 2024 Level Up IRL</Text>
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
  profileSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  profileCard: {
    backgroundColor: '#16213e',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00d4aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  profileLevel: {
    fontSize: 14,
    color: '#cccccc',
  },
  editButton: {
    padding: 10,
  },
  settingsGroup: {
    marginBottom: 30,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  groupContainer: {
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4e',
  },
  dangerItem: {
    backgroundColor: 'rgba(255, 87, 34, 0.1)',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  dangerText: {
    color: '#ff5722',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#cccccc',
  },
  settingRight: {
    marginLeft: 15,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
  },
  versionText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  copyrightText: {
    fontSize: 12,
    color: '#666',
  },
});