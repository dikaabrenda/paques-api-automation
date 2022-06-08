export const POST_USER = {
  type: 'object',
  required: [
    'status',
    'code',
    'response',
    'message'],
  properties: {
    status: {
      type: 'string',
    },
    code: {
      type: 'number',
    },
    response: {
      type: 'object',
      required: [
        'uuid',
        'username',
        'email',
        'firstname',
        'lastname',
        'first_time_login',
        'groups',
      ],
      properties: {
        uuid: {
          type: 'string',
        },
        username: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        firstname: {
          type: 'string',
        },
        lastname: {
          type: 'string',
        },
        first_time_login: {
          type: 'boolean',
          default: false,
        },
        groups: {
          type: 'array',
          uniqueItems: true,
        },
      },
    },
    message: {
      type: 'null',
    },
  },
};
