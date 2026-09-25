import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DrawerContext = createContext({ openDrawer: () => {} });

export function useDrawer() {
  return useContext(DrawerContext);
}

const drawerItems = [
  ['Dashboard', '⌂'],
  ['AI Scan', '◉'],
  ['Pickup Requests', '↗'],
  ['My Pickups', '✓'],
  ['Inventory', '▦'],
  ['Recycler', '♧'],
  ['Earnings', '₹'],
  ['Profile', '○'],
];

export function DrawerProvider({ children, navigation }) {
  const [visible, setVisible] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const drawerWidth = Math.min(width * 0.84, 320);

  const closeDrawer = () => {
    Animated.timing(progress, { toValue: 0, duration: 220, useNativeDriver: true }).start(() => setVisible(false));
  };

  const openDrawer = () => {
    setVisible(true);
    Animated.timing(progress, { toValue: 1, duration: 260, useNativeDriver: true }).start();
  };

  const panResponder = useMemo(() => PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 12 && Math.abs(gesture.dx) > Math.abs(gesture.dy),
    onPanResponderRelease: (_, gesture) => {
      if (!visible && gesture.dx > 55) openDrawer();
      if (visible && gesture.dx < -55) closeDrawer();
    },
  }), [visible, drawerWidth]);

  useEffect(() => () => progress.stopAnimation(), [progress]);

  return (
    <DrawerContext.Provider value={{ openDrawer }}>
      <View className="flex-1" {...panResponder.panHandlers}>
        {children}
        {visible && <View className="absolute inset-0" pointerEvents="auto">
          <Pressable onPress={closeDrawer} className="absolute inset-0 bg-black/40" />
          <Animated.View
            className="absolute bottom-0 left-0 top-0 bg-white shadow-2xl"
            style={{ width: drawerWidth, transform: [{ translateX: progress.interpolate({ inputRange: [0, 1], outputRange: [-drawerWidth, 0] }) }] }}
          >
            <SafeAreaView className="flex-1">
              <View className="border-b border-[#D8E8D8] bg-[#F5FBF5] px-6 pb-6 pt-5">
                <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-[#2E7D32]"><Text className="text-lg font-bold text-white">AS</Text></View>
                <Text className="text-xl font-bold text-black">Anil</Text>
                <Text className="mt-1 text-sm text-[#526052]">Collector</Text>
              </View>
              <View className="px-3 pt-4">
                {drawerItems.map(([name, icon]) => (
                  <Pressable
                    key={name}
                    accessibilityRole="button"
                    accessibilityLabel={`Open ${name}`}
                    onPress={() => { closeDrawer(); navigation.navigate('ScrapCollectorDashboard', { screen: name }); }}
                    className="mb-1 flex-row items-center rounded-xl px-4 py-3"
                  >
                    <Text className="mr-4 w-6 text-center text-xl text-[#2E7D32]">{icon}</Text>
                    <Text className="text-base font-semibold text-black">{name}</Text>
                  </Pressable>
                ))}
              </View>
            </SafeAreaView>
          </Animated.View>
        </View>}
      </View>
    </DrawerContext.Provider>
  );
}
