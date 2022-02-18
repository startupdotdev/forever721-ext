if [ -z "$(which fswatch)" ]
then
  echo "Instaling FSWwatch"
  brew install fswatch
else
  echo "FSWwatch Already Installed"
fi

npm run build

fswatch -o ./src | xargs -n1 -I{}  npm run build