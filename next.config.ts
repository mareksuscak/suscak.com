import type { NextConfig } from 'next';
import { varlockNextConfigPlugin } from '@varlock/nextjs-integration/plugin';

const withVarlock = varlockNextConfigPlugin();

const config: NextConfig = {
  reactStrictMode: true,
};

export default withVarlock(config);
