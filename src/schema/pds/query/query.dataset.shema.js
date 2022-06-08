export const QUERY_DATASET = {
  $schema: 'https://json-schema.org/draft-07/schema',
  type: 'object',
  properties: {
    status: {
      type: 'string',
    },
    code: {
      type: 'number',
    },
    response: {
      type: 'object',
      properties: {
        total: {
          type: 'object',
          properties: {
            data: {
              type: 'number',
            },
          },
        },
        quid: {
          type: 'object',
          properties: {
            quid: {
              type: 'string',
            },
            done: {
              type: 'boolean',
            },
            elapsed: {
              type: 'number',
            },
            createdDate: {
              type: 'string',
            },
            updatedDate: {
              type: 'string',
            },
            markDelete: {
              type: 'boolean',
            },
            userQueryID: {
              type: 'number',
            },
            source: {
              type: 'array',
            },
            sourceRowCount: {
              type: 'object',
              properties: {
                data: {
                  type: 'number',
                },
              },
            },
            state: {
              type: 'string',
            },
            message: {
              type: 'string',
            },
            rowtotal: {
              type: 'number',
            },
          },
        },
        datasets: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                columns: {
                  type: 'array',
                },
                rows: {
                  type: 'array',
                },
                source: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    message: {
      type: 'null',
    },
  },
};
