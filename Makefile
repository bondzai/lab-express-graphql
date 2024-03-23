.PHONY: generate-tsconfig dev re-compile

generate-tsconfig:
	@if [ ! -e tsconfig.json ]; then \
		echo 'Creating default tsconfig.json file...'; \
		echo '{' > tsconfig.json; \
		echo '    "compilerOptions": {' >> tsconfig.json; \
		echo '        "target": "es6",' >> tsconfig.json; \
		echo '        "module": "commonjs",' >> tsconfig.json; \
		echo '        "outDir": "./dist",' >> tsconfig.json; \
		echo '        "strict": true,' >> tsconfig.json; \
		echo '        "esModuleInterop": true,' >> tsconfig.json; \
		echo '        "skipLibCheck": true,' >> tsconfig.json; \
		echo '        "forceConsistentCasingInFileNames": true' >> tsconfig.json; \
		echo '    },' >> tsconfig.json; \
		echo '    "include": ["src/**/*.ts"],' >> tsconfig.json; \
		echo '    "exclude": ["node_modules"]' >> tsconfig.json; \
		echo '}' >> tsconfig.json; \
	fi

dev: generate-tsconfig
	@echo 'Starting development server...'
	@npm run dev

re-compile:
	@echo 'Removing dist directory...'
	@rm -rf dist
	@npm run compile
