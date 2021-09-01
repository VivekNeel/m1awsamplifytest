// @flow
import * as awsExports from './awsexports.json';

const getAmplifyMobileConfig = () => {
  const UserPoolClients = JSON.parse(awsExports.UserPoolClients || null);
  const redirectSignInUrl = UserPoolClients.mobileClientCallbackURLs[0];
  const redirectLogoutUrl = UserPoolClients.mobileClientLogoutURLs[0];

  return {
    userPoolId: awsExports.UserPoolId,
    userPoolWebClientId: awsExports.UserPoolClientId,
    identityPoolId: awsExports.IdentityPoolId,
    region: awsExports.Region,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    aws_appsync_graphqlEndpoint: awsExports['API-Endpoint'],
    aws_appsync_region: awsExports.Region,
    aws_appsync_authenticationType: 'AWS_IAM',
    oauth: {
      domain: awsExports.UserPoolDomain,
      scope: UserPoolClients.mobileClientScope,
      redirectSignIn: redirectSignInUrl,
      redirectSignOut: redirectLogoutUrl,
      responseType: 'code',
    },
  };
};

export default getAmplifyMobileConfig;
