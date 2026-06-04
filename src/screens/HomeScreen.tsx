// src/screens/HomeScreen.tsx

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { directories, Directory } from '../data/messages';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 60) / 2;

interface Props {
  navigation: any;
}

const DirectoryCard = ({
  item,
  index,
  onPress,
}: {
  item: Directory;
  index: number;
  onPress: () => void;
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 100,
        useNativeDriver: true,
        tension: 60,
        friction: 8,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const unreadCount = item.messages.filter(m => !m.read).length;

  return (
    <Animated.View
      style={[
        styles.cardWrapper,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.85}>
        <View style={[styles.iconCircle, { backgroundColor: item.bgColor }]}>
          <Text style={styles.iconEmoji}>{item.icon}</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
        <Text style={[styles.cardLabel, { color: item.color }]}>
          {item.name}
        </Text>
        <Text style={styles.cardCount}>{item.messages.length} messages</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const HomeScreen = ({ navigation }: Props) => {
  const headerAnim = useRef(new Animated.Value(-50)).current;
  const headerOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(headerAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 60,
        friction: 8,
      }),
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const renderItem = ({ item, index }: { item: Directory; index: number }) => (
    <DirectoryCard
      item={item}
      index={index}
      onPress={() => navigation.navigate('Messages', { directory: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerAnim }],
            opacity: headerOpacity,
          },
        ]}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Text style={styles.headerSubtitle}>Your Directories</Text>
      </Animated.View>

      {/* Grid */}
      <FlatList
        data={directories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#a0a0b8',
    marginTop: 4,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  cardWrapper: {
    width: CARD_SIZE,
    margin: 8,
  },
  card: {
    backgroundColor: '#16213e',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  iconEmoji: {
    fontSize: 36,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#e94560',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#16213e',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  cardLabel: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  cardCount: {
    fontSize: 12,
    color: '#a0a0b8',
  },
});

export default HomeScreen;
