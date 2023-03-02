/* eslint-disable */

const config = {
  // REQUIRED - Amazon Cognito Region
  region: 'us-east-1',

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'us-east-1_00c1918jH',

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: '52bqtlnmjv9dvslkip0kkpoco2',

  // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
  mandatorySignIn: true,
  
  // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
  // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
  signUpVerificationMethod: 'code', // 'code' | 'link'   
}

export default config;