/* eslint-disable @typescript-eslint/no-require-imports */
const childProccess = require('child_process');

const globalPackages = childProccess.execSync('npm root -g').toString().trim();
const semver = require(`${globalPackages}/semver`);

const package = require('../package.json');

async function init() {
  if (!semver.valid(package.version)) {
    throw new Error(`Invalid Version: ${package.version}`);
  }

  console.log('NEW VERSION:' + package.version);

  try {
    const remoteVersion = await exec(`npm view ${package.name} version`);
    package.remoteVersion = remoteVersion;
  } catch (err) {
    if (!err.message.includes('E404')) throw err;
    package.remoteVersion = '0.0.0';
  }

  console.log(`REMOTE VERSIONS: ${package.remoteVersion}`);

  await checkVersion(package);
  await exec('echo false > .skip-release');

  return true;
}

async function checkVersion(package) {
  const isGreater = semver.gt(package.version, package.remoteVersion);

  if (isGreater) return;
  console.log('Version already published, skipping...');
  await exec('echo true > .skip-release');

  process.exit(0);
}

function exec(command, live) {
  return new Promise((resolve, reject) => {
    const cmd = childProccess.exec(command, { env: { ...process.env } }, (err, stdout) => {
      if (err) reject(err);
      resolve(stdout?.trim());
    });

    if (!live) return;
    cmd.stdout.on('data', data => console.log(data.toString()));
  });
}

init()
  .then(success => {
    if (!success) return;
    console.log(`NEW VERSION CAN BE PUBLISHED: ${package.version}`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(-1);
  });
