import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';

import Home from './screens/HomeScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const IsLoggedIn = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (      
      <SafeAreaProvider>        
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto"/>
      </SafeAreaProvider>
    );
  }
}

