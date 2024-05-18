const {S3Client} = require('@aws-sdk/client-s3');

let client;
try {
  client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
} catch (error) {
  console.error('Failed to create S3 client:', error);
}
const bucketName = 'furniturestoreaws';
module.exports = {client, bucketName};
