import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.etitparent.school',
  appName: 'ETIT Parent',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    PushNotifications: {
      presentationOptions: ["badge", 'alert', 'sound']
    }
  }
};

export default config;
