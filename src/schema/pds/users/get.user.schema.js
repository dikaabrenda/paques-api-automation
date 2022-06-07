export const GET_USER = {
  type: "object",
  required: [
      "status",
      "code",
      "response",
      "message"
    ],
  properties: {
    status: {
      type: "string",
    },
    code: {
      type: "number",
    },
    response: {
      type: "object",
      required: [
        "uuid",
        "username",
        "email",
        "firstname",
        "lastname",
        "first_time_login",
        "created_at",
        "groups",
      ],
      properties: {
        uuid: {
          type: "string",
          format: "uuid",
        },
        username: {
          type: "string",
        },
        email: {
          type: "string",
        },
        firstname: {
          type: "string",
        },
        lastname: {
          type: "string",
        },
        first_time_login: {
          type: "boolean",
          default: false,
        },
        created_at: {
          type: "string",
        },
        groups: {
          type: "array",
          uniqueItems: true,
        },
      },
    },
    message: {
      type: "null",
    },
  },
};
