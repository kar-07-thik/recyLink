import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
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
      // TODO: Enable the API call when the backend is available.
      // const response = await (isSignUp ? authApi.signup({ name, email, password, role }) : authApi.login({ email, password, role }));
      await signIn({ role, token: 'placeholder-token' });
      navigation.replace('Dashboard');
    } catch (error) {
      Alert.alert('Unable to continue', error.message);
    }
  };

  return (
    <SafeScreen className="bg-[#F5FBF5] px-6 pt-20">
      <Text className="text-sm font-bold uppercase text-black">{role === 'collector' ? 'Scrap collector' : 'Recycler'}</Text>
      <Text className="mt-2 text-4xl font-bold text-black">{isSignUp ? 'Create account' : 'Welcome back'}</Text>
      <Text className="mb-8 mt-3 text-base text-black">{isSignUp ? 'Start making every collection count.' : 'Pick up where you left off.'}</Text>
      {isSignUp && <InputField label="Full name" value={name} onChangeText={setName} placeholder="Your name" />}
      <InputField label="Email or phone" value={email} onChangeText={setEmail} placeholder="you@example.com" autoCapitalize="none" />
      <InputField label="Password" value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry />
      <PrimaryButton onPress={submit}>{isSignUp ? 'Create account' : 'Log in'}</PrimaryButton>
      <Pressable onPress={() => setIsSignUp(!isSignUp)} className="mt-6 items-center">
        <Text className="text-sm font-bold text-black">{isSignUp ? 'Already have an account? Log in' : 'New here? Sign up'}</Text>
      </Pressable>
    </SafeScreen>
  );
}
