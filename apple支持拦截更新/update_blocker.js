// Quantumult X 重写脚本：拦截 Apple 强制更新请求并返回假响应

// 1. 拦截 Apple 强制更新请求
// 当请求 URL 包含 "update" 时，拒绝该请求
if ($request.url.includes("update") && $request.url.includes("apple.com")) {
  // 返回伪造的成功响应，防止强制更新
  $done({
    response: {
      status: 200,
      body: JSON.stringify({
        message: "Apple update request intercepted, no update will be performed."
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  });
} else {
  // 对其他请求正常响应
  $done();
}
