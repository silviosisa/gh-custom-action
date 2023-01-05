const core = require("@actions/core");
// give your extra data to the action
// const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const buketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files
  const s3Uri = `s3://${bucket}/`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${buketRegion}`);

  core.notice("Hello from my custom Javascript Action");
  core.info("Deploying to S3");
}
run();
