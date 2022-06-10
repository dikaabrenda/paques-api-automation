export const UPDATE_USER = {
  $schema: "https://json-schema.org/draft-07/schema",
  type: "object",
  required: [
    "status",
    "code",
    "response",
    "message"
    ],
  additionalProperties: true,
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
        "groups",
      ],
      additionalProperties: true,
      properties: {
        uuid: {
          type: "string",
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
        },
        groups: {
          type: "array",
          additionalItems: true,
          uniqueItems: false,
        },
      },
    },
    message: {
      type: "null",
    },
  },
};
