import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { SafeScreen } from '../components/Screen';

export default function SplashScreen({ navigation }) {
  return (
    <SafeScreen className="justify-between bg-[#F5FBF5] px-6 pb-10 pt-20">
      <StatusBar style="dark" />
      <View>
        <View className="mb-16 h-14 w-14 items-center justify-center rounded-2xl bg-[#2E7D32]"><Text className="text-2xl font-bold text-white">R</Text></View>
        <Text className="text-5xl font-bold tracking-tight text-black">RecyLink</Text>
        <Text className="mt-5 max-w-[300px] text-xl leading-7 text-black">Give materials a second life, together.</Text>
        <Text className="mt-4 max-w-[300px] text-sm leading-5 text-black">Connect collectors and recyclers to build cleaner communities.</Text>
      </View>
      <View>
        <PrimaryButton onPress={() => navigation.navigate('ChooseRole')}>Get started</PrimaryButton>
        <Text className="mt-5 text-center text-xs font-bold text-black">Team Invictuzz</Text>
      </View>
    </SafeScreen>
  );
}
