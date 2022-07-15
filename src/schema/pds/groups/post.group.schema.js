export const SCHEMA_GROUP = {
    "type": "object",
    "required": [
        "status",
        "code",
        "response",
        "message"
    ],
    "properties": {
        "status": {
            "type": "string"
        },
        "code": {
            "type": "number"
        },
        "response": {
            "type": "object",
            "required": [
                "uuid",
                "groupname",
                "groupdesc",
                "roles"
            ],
            "properties": {
                "uuid": {
                    "type": "string"
                },
                "groupname": {
                    "type": "string"
                },
                "groupdesc": {
                    "type": "string"
                },
                "roles": {
                    "type": "array",
                    "uniqueItems": true
                }
            }
        },
        "message": {
            "type": "null"
        }
    }
}