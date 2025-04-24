// 脚本拦截 Apple 更新请求并返回 OK
const url = $request.url;

if (url.includes("update")) {
  $done({ response: { status: 200, body: "OK" } });
} else {
  $done();
}
