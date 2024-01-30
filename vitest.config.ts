import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: ['./test/setup.ts'],
        environmentMatchGlobs: [
            ['**/*.test.tsx', 'happy-dom'],
            ['**/*.component.test.ts', 'happy-dom'],
        ],
    },
});
