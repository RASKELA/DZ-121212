import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 1,
    use: {
        baseURL: 'https://qauto.forstudy.space/',
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        trace: 'on-first-retry',
    },
});
