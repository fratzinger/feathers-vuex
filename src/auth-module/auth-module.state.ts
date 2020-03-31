/*
eslint
@typescript-eslint/explicit-function-return-type: 0,
@typescript-eslint/no-explicit-any: 0
*/
export default function setupAuthState({
  userService,
  serverAlias,
  responseEntityField = 'user',
  entityIdField = 'userId'
}) {
  const state = {
    accessToken: null, // The JWT
    payload: null, // The JWT payload
    entityIdField,
    responseEntityField,

    isAuthenticatePending: false,
    isLogoutPending: false,

    errorOnAuthenticate: null,
    errorOnLogout: null,
    user: null, // For a reactive user object, use the `user` getter.
    serverAlias
  }
  // If a userService string was passed, add a user attribute
  if (userService) {
    Object.assign(state, { userService })
  }
  return state
}
