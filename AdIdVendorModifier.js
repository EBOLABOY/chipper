// 随机生成一个新的 Advertising Id
const randomAdvertisingId = '8B9C5D01-3D2E-4F9A-9B8C-A12345678ABC';

// 随机生成一个新的 Identifier For Vendor
const randomIdentifierForVendor = '7C6D5F4B-90E1-41FA-B745-E89D12345678';

// 随机生成一个新的 ClientId
const randomClientId = '38dc4871-945d-486a-b809-a95ba2e49268';

// 拦截请求并修改参数
const requestURL = $request.url;
const modifiedURL = requestURL
  .replace(/advertisingId=.*?(&|$)/g, `advertisingId=${randomAdvertisingId}$1`)
  .replace(/identifierForVendor=.*?(&|$)/g, `identifierForVendor=${randomIdentifierForVendor}$1`)
  .replace(/clientId=.*?(&|$)/g, `clientId=${randomClientId}$1`);

// 完成请求并返回修改后的 URL
$done({
  url: modifiedURL
});
