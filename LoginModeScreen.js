import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginModeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4F46E5" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>DB</Text>
          </View>
        </View>
        <Text style={styles.title}>Database Personal Profil</Text>
        <Text style={styles.subtitle}>Pilih mode akses aplikasi</Text>
      </View>

      {/* Mode Selection */}
      <View style={styles.modeContainer}>
        <TouchableOpacity
          style={[styles.modeCard, styles.adminCard]}
          onPress={() => navigation.navigate('AdminLogin')}
        >
          <View style={styles.modeIcon}>
            <Text style={styles.modeIconText}>👨‍💼</Text>
          </View>
          <Text style={styles.modeTitle}>Mode Admin</Text>
          <Text style={styles.modeDescription}>
            Kelola dan input data profil{'\n'}
            Akses penuh ke database
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeCard, styles.userCard]}
          onPress={() => navigation.navigate('UserLogin')}
        >
          <View style={styles.modeIcon}>
            <Text style={styles.modeIconText}>👤</Text>
          </View>
          <Text style={styles.modeTitle}>Mode Pengguna</Text>
          <Text style={styles.modeDescription}>
            Telusuri data profil{'\n'}
            Akses pencarian data
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Aplikasi Database Personal Profil v1.0
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    textAlign: 'center',
  },
  modeContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
  },
  modeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  adminCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#EF4444',
  },
  userCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#10B981',
  },
  modeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modeIconText: {
    fontSize: 24,
  },
  modeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  modeDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});