import { useState } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Camera, ImagePlus, ScanLine, RotateCcw, Sparkles, Package, Save, History, AlertTriangle, CheckCircle2 } from 'lucide-react-native';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';
import { mockScan, scrapCollectorApi } from '../../../api/scrapCollector';

export default function AIScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [result, setResult] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const chooseImage = async () => {
    const picked = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.8 });
    if (!picked.canceled) {
      setImageUri(picked.assets[0].uri);
      setResult(null);
    }
  };

  const takePhoto = async () => {
    if (!permission?.granted) {
      await requestPermission();
      return;
    }
    setCamera(true);
  };

  const capture = async () => {
    const photo = await cameraRef?.takePictureAsync({ quality: 0.8 });
    if (photo) {
      setImageUri(photo.uri);
      setCamera(false);
    }
  };

  const analyze = async () => {
    const response = await scrapCollectorApi.analyzeImage(imageUri);
    setResult(response.data);
  };

  return (
    <Screen title="AI Scan">
      <Text className="mb-5 text-base text-[#64748b]">Identify materials in seconds and handle them responsibly.</Text>

      {camera ? (
        <View className="mb-4 overflow-hidden rounded-3xl">
          <CameraView ref={setCameraRef} className="h-96" facing="back" />
          <Pressable
            onPress={capture}
            className="absolute bottom-5 self-center h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#16a34a]"
          >
            <Camera color="#ffffff" size={24} />
          </Pressable>
        </View>
      ) : imageUri ? (
        <View className="mb-4 overflow-hidden rounded-3xl bg-black">
          <Image source={{ uri: imageUri }} className="h-64 w-full" resizeMode="cover" />
          <View className="flex-row p-3">
            <Pressable onPress={() => setImageUri(null)} className="mr-2 flex-1 flex-row items-center justify-center rounded-xl bg-white p-3">
              <RotateCcw color="#0f172a" size={18} style={{ marginRight: 6 }} />
              <Text className="font-bold text-[#0f172a]">Retake</Text>
            </Pressable>
            <Pressable onPress={analyze} className="flex-1 flex-row items-center justify-center rounded-xl bg-[#16a34a] p-3">
              <Sparkles color="#ffffff" size={18} style={{ marginRight: 6 }} />
              <Text className="font-bold text-white">Analyze</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View className="mb-5 rounded-3xl border-2 border-dashed border-[#22c55e] bg-[#f0fdf4] p-8">
          <View className="mb-3 self-center h-16 w-16 items-center justify-center rounded-2xl bg-white">
            <ScanLine color="#16a34a" size={32} />
          </View>
          <Text className="text-center text-xl font-bold text-[#0f172a]">Scan an item</Text>
          <Text className="mt-2 text-center text-sm text-[#64748b]">Take a photo or upload one from your gallery.</Text>
          <View className="mt-5">
            <PrimaryButton onPress={takePhoto}>
              <View className="flex-row items-center">
                <Camera color="#ffffff" size={18} style={{ marginRight: 6 }} />
                <Text className="font-bold text-white">Take Photo</Text>
              </View>
            </PrimaryButton>
          </View>
          <View className="mt-3">
            <PrimaryButton onPress={chooseImage} variant="secondary">
              <View className="flex-row items-center">
                <ImagePlus color="#15803d" size={18} style={{ marginRight: 6 }} />
                <Text className="font-bold text-[#15803d]">Upload Photo</Text>
              </View>
            </PrimaryButton>
          </View>
        </View>
      )}

      {result && (
        <View className="rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-2xl font-bold text-[#0f172a]">{result.itemName}</Text>
              <Text className="mt-1 text-[#64748b]">{result.category} · {result.weight}</Text>
            </View>
            <Text className="text-3xl font-bold text-[#16a34a]">{result.confidence}%</Text>
          </View>
          <View className="my-4 flex-row">
            <StatusBadge status={result.recyclable ? 'Completed' : 'Pending'} />
            <View className="ml-2">
              <StatusBadge status={result.hazardous ? 'Pending' : 'Completed'} />
            </View>
          </View>
          <Text className="text-sm font-bold text-[#0f172a]">Material composition</Text>
          <Text className="mt-1 text-sm text-[#64748b]">{result.materials}</Text>
          <Text className="mt-4 text-sm font-bold text-[#0f172a]">Estimated value · {result.value}</Text>
          <Text className="mt-1 text-sm leading-5 text-[#64748b]">{result.recommendation}</Text>
          <View className="mt-5 flex-row flex-wrap">
            <Pressable
              onPress={() => Alert.alert('Inventory', 'Item added to inventory (mock).')}
              className="mr-2 flex-row items-center rounded-xl bg-[#16a34a] px-4 py-3"
            >
              <Package color="#ffffff" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-white">Add to Inventory</Text>
            </Pressable>
            <Pressable
              onPress={() => Alert.alert('Saved', 'Scan saved (mock).')}
              className="flex-row items-center rounded-xl border border-[#16a34a] px-4 py-3"
            >
              <Save color="#16a34a" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-[#16a34a]">Save Scan</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => { setResult(null); setImageUri(null); }}
            className="mt-4 flex-row items-center justify-center"
          >
            <RotateCcw color="#16a34a" size={14} style={{ marginRight: 4 }} />
            <Text className="font-bold text-[#16a34a]">Scan Another</Text>
          </Pressable>
        </View>
      )}

      <SectionTitle>
        <View className="flex-row items-center">
          <History color="#0f172a" size={18} style={{ marginRight: 6 }} />
          <Text>Recently scanned</Text>
        </View>
      </SectionTitle>

      {[mockScan, { ...mockScan, itemName: 'Copper wire bundle', category: 'Cables', confidence: 91 }].map((item) => (
        <View key={item.itemName} className="mb-2 flex-row items-center justify-between rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
              <ScanLine color="#16a34a" size={18} />
            </View>
            <View>
              <Text className="font-bold text-[#0f172a]">{item.itemName}</Text>
              <Text className="mt-1 text-xs text-[#64748b]">{item.category} · {item.weight}</Text>
            </View>
          </View>
          <Text className="font-bold text-[#16a34a]">{item.confidence}%</Text>
        </View>
      ))}
    </Screen>
  );
}
