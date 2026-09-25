import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Mail, Lock, User } from 'lucide-react-native';
import { authApi } from '../api/client';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { SafeScreen } from '../components/Screen';
import { useAuth } from '../context/AuthContext';

export default function AuthScreen({ route, navigation }) {
  const role = route.params?.role || 'collector';
  const { signIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const submit = async () => {
    if (!email || !password || (isSignUp && !name)) return Alert.alert('Missing details', 'Please complete all fields.');
    try {
      await signIn({ role, token: 'placeholder-token' });
      navigation.replace('Dashboard');
    } catch (error) {
      Alert.alert('Unable to continue', error.message);
    }
  };

  return (
    <SafeScreen className="bg-[#f8fafc] px-6 pt-20">
      <Text className="text-sm font-bold uppercase tracking-widest text-[#16a34a]">
        {role === 'collector' ? 'Scrap Collector' : 'Recycler'}
      </Text>
      <Text className="mt-3 text-4xl font-bold text-[#0f172a]">{isSignUp ? 'Create account' : 'Welcome back'}</Text>
      <Text className="mb-8 mt-3 text-base text-[#64748b]">{isSignUp ? 'Start making every collection count.' : 'Pick up where you left off.'}</Text>
      {isSignUp && <InputField label="Full name" icon={User} value={name} onChangeText={setName} placeholder="Your name" />}
      <InputField label="Email or phone" icon={Mail} value={email} onChangeText={setEmail} placeholder="you@example.com" autoCapitalize="none" />
      <InputField label="Password" icon={Lock} value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry />
      <PrimaryButton onPress={submit}>{isSignUp ? 'Create account' : 'Log in'}</PrimaryButton>
      <Pressable onPress={() => setIsSignUp(!isSignUp)} className="mt-6 items-center">
        <Text className="text-sm text-[#64748b]">
          {isSignUp ? "Already have an account? " : "New here? "}
          <Text className="font-bold text-[#16a34a]">{isSignUp ? 'Log in' : 'Sign up'}</Text>
        </Text>
      </Pressable>
    </SafeScreen>
  );
}
