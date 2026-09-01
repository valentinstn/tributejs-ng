## Contributing

We welcome contributions to Tribute. There are many areas where we would love to see community contributions that we have outlined below, but first, let's go over how to develop in Tribute. We use npm to manage our packages.

Install dependencies:

```sh
npm install
```

Run Rollup:

```sh
npm start
```

That's it! Now you can use the `example/index.html` to test out changes to the code base. All changes to `src` will recompile on the fly.

Once you have made your changes, feel free to submit a pull request.

## Testing

We use [Karma](https://karma-runner.github.io/latest/index.html) and [Jasmin](https://jasmine.github.io) as the testing framework.

A local Chrome or Chromium installation is required to run the browser tests.

To run the tests type:

```
npm run build
npm test
```

## Contribution Ideas

The major focus that we could use your help with is creating wrappers for different JavaScript frameworks. Some of the ones we are interested in are outlined below. We also see a couple of areas for improving compatibility with different rendering situations, such as in iframes inside of rich text editors.

**Some ideas that are for grabs**

- Prosemirror component
- `noMatchTemplate` per collection.

## Release Procedure

1. Confirm the intended changes with `git diff` and `git diff --check`.
2. Update the version in `package.json`.
3. Run the build and unit tests, then verify generated bundles are committed.
4. Commit the source, declarations, tests, documentation, and generated outputs together.
5. Push `master` and create/push the matching annotated tag `v<version>`.
6. Let `.github/workflows/publish.yml` publish through npm Trusted Publishing. Do not manually publish a release that the workflow has accepted.
7. Verify the GitHub Actions run, npm `latest` dist-tag, published version, and package contents.
