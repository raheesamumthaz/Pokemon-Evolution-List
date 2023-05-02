exports.event = function (obj) {
  let event;
  const value = 'Hello';
  event = {
    version: "2.0",
    routeKey: "/",
    rawPath: "/",
    rawQueryString: "",
    cookies: [],
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "",
      Accept: "*/*",
    },
    queryStringParameters: { name: value },
    requestContext: {
      accountId: "",
      apiId: "",
      authorizer: {},
      domainName: "",
      domainPrefix: "",
      http: {
        method: "GET",
        path: "/",
        protocol: "",
        sourceIp: "",
        userAgent: "",
      },
      operationName: "",
      requestId: "",
      routeKey: "/",
      stage: "",
      time: "3/Apr/2023:12:07:59 +0530",
      timeEpoch: 123,
    },
    body: {},
    pathParameters: { name: value },
    isBase64Encoded: false,
    stageVariables: {},
    ...obj
  };
 return event
};
