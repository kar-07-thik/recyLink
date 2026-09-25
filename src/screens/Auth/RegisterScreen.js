import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { User, Mail, Lock } from 'lucide-react-native';
import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';
import { SafeScreen } from '../../components/Screen';
import { useAuth } from '../../context/AuthContext';

export default function RegisterScreen({ navigation, route }) {
  const { signIn } = useAuth();
  const role = route.params?.role || 'collector';
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const set = (key) => (value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async () => {
    if (Object.values(form).some((value) => !value))
      return Alert.alert('Missing details', 'Complete every field to create your account.');
    if (form.password !== form.confirmPassword)
      return Alert.alert('Passwords do not match', 'Check your password confirmation.');
    await signIn({ role, token: 'mock-collector-token', email: form.email });
  };

  return (
    <SafeScreen className="bg-[#f8fafc] px-6 pt-12">
      <Text className="text-sm font-bold uppercase tracking-widest text-[#16a34a]">JOIN {role === 'collector' ? 'COLLECTOR' : 'RECYCLER'} HUB</Text>
      <Text className="mt-3 text-4xl font-bold text-[#0f172a]">Create account</Text>
      <Text className="mb-6 mt-3 text-base text-[#64748b]">Make every pickup count.</Text>

      <View className="flex-row">
        <View className="mr-2 flex-1">
          <InputField label="First name" icon={User} value={form.firstName} onChangeText={set('firstName')} placeholder="Anita" />
        </View>
        <View className="ml-2 flex-1">
          <InputField label="Last name" icon={User} value={form.lastName} onChangeText={set('lastName')} placeholder="Sharma" />
        </View>
      </View>
      <InputField label="Email" icon={Mail} value={form.email} onChangeText={set('email')} placeholder="you@example.com" autoCapitalize="none" keyboardType="email-address" />
      <InputField label="Password" icon={Lock} value={form.password} onChangeText={set('password')} placeholder="Create password" secureTextEntry />
      <InputField label="Confirm password" icon={Lock} value={form.confirmPassword} onChangeText={set('confirmPassword')} placeholder="Repeat password" secureTextEntry />
      <PrimaryButton onPress={submit}>Create Account</PrimaryButton>
      <Pressable onPress={() => navigation.navigate('Login', { role })} className="mt-5 items-center">
        <Text className="text-sm text-[#64748b]">
          Already have an account? <Text className="font-bold text-[#16a34a]">Login</Text>
        </Text>
      </Pressable>
    </SafeScreen>
  );
}
