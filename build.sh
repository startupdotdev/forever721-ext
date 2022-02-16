rm -rf ./dist/
mkdir ./dist
npm run rollup
cp -rf ./public/* ./dist