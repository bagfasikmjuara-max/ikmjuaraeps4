import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';

// Import screens
import LoginModeScreen from './src/screens/LoginModeScreen';
import AdminLoginScreen from './src/screens/AdminLoginScreen';
import UserLoginScreen from './src/screens/UserLoginScreen';
import RegistrationSearchScreen from './src/screens/RegistrationSearchScreen';
import RegistrationListScreen from './src/screens/RegistrationListScreen';
import RegistrationDetailScreen from './src/screens/RegistrationDetailScreen';
import AddRegistrationScreen from './src/screens/AddRegistrationScreen';
import EditRegistrationScreen from './src/screens/EditRegistrationScreen';
import TrashScreen from './src/screens/TrashScreen';
import VisitsScreen from './src/screens/VisitsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Admin Tab Navigator
function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4F46E5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#9CA3AF',
      }}
    >
      <Tab.Screen 
        name="RegistrationList" 
        component={RegistrationListScreen}
        options={{ 
          title: 'Data Registrasi IKM',
          tabBarLabel: 'Registrasi',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📋</Text>
        }}
      />
      <Tab.Screen 
        name="Trash" 
        component={TrashScreen}
        options={{ 
          title: 'Kotak Sampah',
          tabBarLabel: 'Sampah',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🗑️</Text>
        }}
      />
      <Tab.Screen 
        name="Visits" 
        component={VisitsScreen}
        options={{ 
          title: 'Data Kunjungan',
          tabBarLabel: 'Kunjungan',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📊</Text>
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="LoginMode"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4F46E5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="LoginMode" 
            component={LoginModeScreen}
            options={{ title: 'Pilih Mode Login', headerShown: false }}
          />
          <Stack.Screen 
            name="AdminLogin" 
            component={AdminLoginScreen}
            options={{ title: 'Login Admin' }}
          />
          <Stack.Screen 
            name="UserLogin" 
            component={UserLoginScreen}
            options={{ title: 'Login Pengguna' }}
          />
          <Stack.Screen 
            name="RegistrationSearch" 
            component={RegistrationSearchScreen}
            options={{ title: 'Penelusuran Data IKM' }}
          />
          <Stack.Screen 
            name="AdminTabs" 
            component={AdminTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="RegistrationDetail" 
            component={RegistrationDetailScreen}
            options={{ title: 'Detail Registrasi IKM' }}
          />
          <Stack.Screen 
            name="AddRegistration" 
            component={AddRegistrationScreen}
            options={{ title: 'Tambah Data Registrasi' }}
          />
          <Stack.Screen 
            name="EditRegistration" 
            component={EditRegistrationScreen}
            options={{ title: 'Edit Data Registrasi' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}