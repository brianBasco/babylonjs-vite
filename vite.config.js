import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
    return {
        resolve: {
            alias: {
                'babylonjs': mode === 'development' ? 'babylonjs/babylon.max' : 'babylonjs'
            }
        },
        server: {
            fs: {
              // Allow serving files outside of the root
              allow: [
                "../.."
              ]
            }
          },
        optimizeDeps: { exclude: ["@babylonjs/havok"] },
        esbuild: {
            supported: {
                'top-level-await': true //browsers can handle top-level-await features
            }
        },  
    };
});

