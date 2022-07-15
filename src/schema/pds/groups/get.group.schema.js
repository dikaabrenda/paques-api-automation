export const GET_SCHEMA = {
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
        "groupname", 
        "groupdesc", 
        "roles"
    ],
      properties: {
        uuid: {
          type: "string",
        },
        groupname: {
          type: "string",
        },
        groupdesc: {
          type: "string",
        },
        roles: {
          type: "array",
        },
      },
    },
    message: {
      type: "null",
    },
  },
};
