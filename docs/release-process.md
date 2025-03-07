# Release Process

## Web wallet

Make a release:

- ```sh
  pip3 install --upgrade \
    https://github.com/oasisprotocol/towncrier/archive/oasis-master.tar.gz
  ```

- `yarn changelog`, commit "Assemble changes for ___ release", and merge PR
- `yarn release-tag`
  ([.github/workflows/release.yml](/.github/workflows/release.yml) then creates
  a github release)

Staging:

- download <https://github.com/oasisprotocol/wallet/releases>
- deploy to <https://wallet.stg.oasis.io/>

Production:

- ensure <https://wallet.stg.oasis.io/> works
  - especially features related to changes
  - look at CSP errors
- see the footer for what commit is deployed
- deploy staged build to <https://wallet.oasis.io/>

### Deploy

<https://github.com/oasisprotocol/wallet/wiki/Deployment-on-AWS>.

Verify deployed version by opening the page in
incognito (no cache) - it is displayed in the footer.

Verify security headers were updated:

- See deployed headers

  ```sh
  curl --head https://wallet.stg.oasis.io/ -s | grep "content-security-policy\|permissions-policy"
  curl --head https://wallet.oasis.io/ -s | grep "content-security-policy\|permissions-policy"
  ```

- Compare to Content-Security-Policy.txt and Permissions-Policy.txt in
  <https://github.com/oasisprotocol/wallet/releases>

## TODO: Extension wallet

- Update version in `manifest.json`
- Changelog
- Commit
- Make PR and merge
- Git tag
- Build

```sh
VERSION=`cat extension/src/manifest.json | jq .version -r`
COMMIT=`git rev-parse --short HEAD`
yarn install --frozen-lockfile
yarn build:ext
zip -r rose-wallet-$VERSION-$COMMIT.zip build-ext/
```

- GitHub pre-release with zip file
- Chrome store
- Update pre-release
