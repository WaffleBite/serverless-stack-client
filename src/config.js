const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "example-notes-api",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://hd1a8leqa1.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_upm1zK6P4",
      APP_CLIENT_ID: "517mhu3mmkr0dkmhsrclq2r12l",
      IDENTITY_POOL_ID: "us-east-2:209413bd-d819-4969-a708-30f6a104aa2f",
    },
  };
  
  export default config;