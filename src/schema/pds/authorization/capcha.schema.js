export const CAPCHA = {
  $schema: 'http://json-schema.org/draft-07/schema',
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
      type: 'integer',
    },
    response: {
      type: 'object',
      required: [
        'captcha_id',
        'captcha_blob',
      ],
      properties: {
        captcha_id: {
          type: 'string',
        },
        captcha_blob: {
          type: 'string',
        },
      },
      additionalProperties: true,
    },
    message: {
      type: 'string',
    },
  },
  additionalProperties: true,
};
