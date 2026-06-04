// src/screens/MessagesScreen.tsx

import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Directory, Message } from '../data/messages';

interface Props {
  navigation: any;
  route: {
    params: {
      directory: Directory;
    };
  };
}

const MessageItem = ({
  message,
  color,
  index,
  onPress,
}: {
  message: Message;
  color: string;
  index: number;
  onPress: () => void;
}) => {
  const slideAnim = useRef(new Animated.Value(60)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        delay: index * 80,
        useNativeDriver: true,
        tension: 70,
        friction: 9,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}>
      <TouchableOpacity
        style={[styles.messageCard, !message.read && styles.unreadCard]}
        onPress={onPress}
        activeOpacity={0.85}>
        {/* Unread indicator */}
        {!message.read && (
          <View style={[styles.unreadDot, { backgroundColor: color }]} />
        )}

        <View style={styles.messageHeader}>
          <View style={[styles.avatarCircle, { backgroundColor: color + '30' }]}>
            <Text style={[styles.avatarInitial, { color }]}>
              {message.sender[0]}
            </Text>
          </View>
          <View style={styles.messageInfo}>
            <Text
              style={[
                styles.senderName,
                !message.read && styles.unreadSender,
              ]}>
              {message.sender}
            </Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
        </View>

        <Text
          style={[
            styles.messagePreview,
            !message.read && styles.unreadPreview,
          ]}
          numberOfLines={2}>
          {message.preview}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const MessagesScreen = ({ navigation, route }: Props) => {
  const { directory } = route.params;

  const renderItem = ({ item, index }: { item: Message; index: number }) => (
    <MessageItem
      message={item}
      color={directory.color}
      index={index}
      onPress={() =>
        navigation.navigate('MessageDetail', {
          message: item,
          directory,
        })
      }
    />
  );

  const unreadCount = directory.messages.filter(m => !m.read).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <View
            style={[styles.headerIcon, { backgroundColor: directory.bgColor }]}>
            <Text style={styles.headerEmoji}>{directory.icon}</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>{directory.name}</Text>
            <Text style={styles.headerSubtitle}>
              {unreadCount > 0
                ? `${unreadCount} unread · ${directory.messages.length} total`
                : `${directory.messages.length} messages`}
            </Text>
          </View>
        </View>

        <View style={styles.backButton} />
      </View>

      <FlatList
        data={directory.messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
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
    flexDirection: 'row',
    alignItems: 'center',
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
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerEmoji: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#a0a0b8',
    marginTop: 2,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
  messageCard: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  unreadCard: {
    borderColor: '#e94560',
    borderLeftWidth: 4,
  },
  unreadDot: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  avatarCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    fontSize: 18,
    fontWeight: '700',
  },
  messageInfo: {
    flex: 1,
  },
  senderName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#c0c0d8',
  },
  unreadSender: {
    color: '#ffffff',
    fontWeight: '700',
  },
  messageTime: {
    fontSize: 12,
    color: '#606080',
    marginTop: 2,
  },
  messagePreview: {
    fontSize: 14,
    color: '#808098',
    lineHeight: 20,
  },
  unreadPreview: {
    color: '#b0b0c8',
  },
});

export default MessagesScreen;
