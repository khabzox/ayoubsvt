import withPWA from 'next-pwa';
import { withNextVideo } from 'next-video/process';

export default {
  ...withNextVideo(withPWA()),
  reactStrictMode: true
};