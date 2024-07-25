// 随机生成一个 UUID 作为 Session Key
const randomSessionKey = '45b5a3d7-2c33-43ec-9e70-3e8c50f2e5ea';

// 随机生成一个 Client Id
const randomClientId = '38dc4871-945d-486a-b809-a95ba2e49268';

// 随机生成一个 Device Token（这里使用了一个格式示例）
const randomDeviceToken = 'eyJhbGciOiJkaXIiLCJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwidHlwIjoiSldUIn0..';

// 随机生成一个 Advertising Id
const randomAdvertisingId = '3FB45F01-DB1E-4E9F-9AA7-D78D0400F59A';

// 随机生成一个 Identifier For Vendor
const randomIdentifierForVendor = '9A2B1CB5-89CF-40A9-8E50-041650B827B1';

// 构造修改后的 URL
const requestURL = $request.url;
const modifiedURL = requestURL
  .replace(/sessionKey=.*?&|sessionKey=$/g, `sessionKey=${randomSessionKey}`)
  .replace(/clientId=.*?&|clientId=$/g, `clientId=${randomClientId}`)
  .replace(/deviceToken=.*?&|deviceToken=$/g, `deviceToken=${randomDeviceToken}`)
  .replace(/advertisingId=.*?&|advertisingId=$/g, `advertisingId=${randomAdvertisingId}`)
  .replace(/identifierForVendor=.*?&|identifierForVendor=$/g, `identifierForVendor=${randomIdentifierForVendor}`)
  .replace(/&$/, ''); // 移除末尾的 & 如果存在

// 执行修改
$done({
  url: modifiedURL
});
