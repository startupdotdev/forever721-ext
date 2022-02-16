# Forever721-ext

Browser extension that runs [Forever721](https://github.com/startupdotdev/forever721) against your favorite JPGz.

## Instalation

TODO

## Development

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

### Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Contributing

TODO

## Roadmap

- [x] display an error if we are not on opensea
- [] get url of contract from opensea
- [] get tokenid from opensea
- [] get signer/provider from metamask in the extension
- [] get tokenURI via ethers
- [] run grade via forever721
- [] bobs your uncle
- [] jazz up the UI

## References:

- https://dev.to/khangnd/build-a-browser-extension-with-svelte-3135
