// src/screens/MessageDetailScreen.tsx

import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Directory, Message } from '../data/messages';

interface Props {
  navigation: any;
  route: {
    params: {
      message: Message;
      directory: Directory;
    };
  };
}

const MessageDetailScreen = ({ navigation, route }: Props) => {
  const { message, directory } = route.params;

  const contentAnim = useRef(new Animated.Value(30)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(contentAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 70,
        friction: 9,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{directory.name}</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: contentAnim }],
          }}>

          {/* Message Card */}
          <View style={[styles.messageCard, { borderTopColor: directory.color }]}>
            {/* Sender Row */}
            <View style={styles.senderRow}>
              <View
                style={[
                  styles.avatarLarge,
                  { backgroundColor: directory.bgColor + '30' },
                ]}>
                <Text style={[styles.avatarText, { color: directory.color }]}>
                  {message.sender[0]}
                </Text>
              </View>
              <View style={styles.senderInfo}>
                <Text style={styles.senderName}>{message.sender}</Text>
                <View style={styles.dirChip}>
                  <Text style={[styles.dirChipIcon]}>{directory.icon}</Text>
                  <Text style={[styles.dirChipText, { color: directory.color }]}>
                    {directory.name}
                  </Text>
                </View>
              </View>
              <Text style={styles.timeText}>{message.time}</Text>
            </View>

            {/* Divider */}
            <View
              style={[styles.divider, { backgroundColor: directory.color + '30' }]}
            />

            {/* Message Body */}
            <Text style={styles.bodyText}>{message.body}</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: directory.color }]}
              activeOpacity={0.8}>
              <Text style={styles.actionBtnText}>↩  Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionBtnOutline}
              activeOpacity={0.8}>
              <Text style={[styles.actionBtnOutlineText, { color: directory.color }]}>
                ↗  Forward
              </Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#0f3460',
  },
  backButton: {
    width: 40,
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 36,
    color: '#ffffff',
    lineHeight: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  messageCard: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 20,
    borderTopWidth: 4,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
    marginBottom: 20,
  },
  senderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  avatarLarge: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 22,
    fontWeight: '800',
  },
  senderInfo: {
    flex: 1,
  },
  senderName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  dirChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dirChipIcon: {
    fontSize: 13,
  },
  dirChipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 13,
    color: '#606080',
  },
  divider: {
    height: 1,
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#c0c0d8',
    letterSpacing: 0.2,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  actionBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  actionBtnOutline: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderWidth: 2,
    borderColor: '#0f3460',
  },
  actionBtnOutlineText: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default MessageDetailScreen;
