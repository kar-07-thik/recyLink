import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Mail, Lock } from 'lucide-react-native';
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
    await signIn({ role, token: 'mock-collector-token', email });
  };

  return (
    <SafeScreen className="bg-[#f8fafc] px-6 pt-16">
      <Text className="text-sm font-bold uppercase tracking-widest text-[#16a34a]">
        {role === 'collector' ? 'COLLECTOR ACCESS' : 'RECYCLER ACCESS'}
      </Text>
      <Text className="mt-3 text-4xl font-bold text-[#0f172a]">Welcome back</Text>
      <Text className="mb-8 mt-3 text-base text-[#64748b]">Keep every collection moving forward.</Text>

      <InputField
        label="Email"
        icon={Mail}
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputField
        label="Password"
        icon={Lock}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Pressable className="mb-6 self-end">
        <Text className="font-bold text-[#16a34a]">Forgot password?</Text>
      </Pressable>
      <PrimaryButton onPress={submit}>Login</PrimaryButton>
      <Pressable onPress={() => navigation.navigate('Register', { role })} className="mt-7 items-center">
        <Text className="text-sm text-[#64748b]">
          Don't have an account? <Text className="font-bold text-[#16a34a]">Register</Text>
        </Text>
      </Pressable>
    </SafeScreen>
  );
}
