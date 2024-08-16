import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Belirli bir IP adresinde çalıştırmak için.
  //   port: 3000, // Çalıştırmak istediğiniz port numarası.
  // }
});