import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';
import { SafeScreen } from '../../components/Screen';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation, route }) {
  const { signIn } = useAuth();
  const role = route.params?.role || 'collector';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = async () => {
    if (!email || !password) return Alert.alert('Missing details', 'Enter your email and password.');
    // MOCK: replace with authApi.login({ email, password, role }) when the backend is available.
    await signIn({ role, token: 'mock-collector-token', email });
  };
  return <SafeScreen className="bg-[#F5FBF5] px-6 pt-20"><Text className="text-sm font-bold uppercase tracking-widest text-[#2E7D32]">COLLECTOR ACCESS</Text><Text className="mt-3 text-4xl font-bold text-black">Welcome back</Text><Text className="mb-8 mt-3 text-base text-[#526052]">Keep every collection moving forward.</Text><InputField label="Email" value={email} onChangeText={setEmail} placeholder="you@example.com" autoCapitalize="none" keyboardType="email-address" /><InputField label="Password" value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry /><Pressable className="mb-6 self-end"><Text className="font-bold text-[#2E7D32]">Forgot password?</Text></Pressable><PrimaryButton onPress={submit}>Login</PrimaryButton><Pressable onPress={() => navigation.navigate('Register', { role })} className="mt-7 items-center"><Text className="text-sm text-[#526052]">Don't have an account? <Text className="font-bold text-[#2E7D32]">Register</Text></Text></Pressable></SafeScreen>;
}
