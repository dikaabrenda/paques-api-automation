import number from "../../helper/generate";

export const VALID_CREATE_GROUPS = {
  groupname: "test" + number,
  groupdesc: "QA Test",
  roles: [
    "95fe94c4-14d4-4fba-a192-c039886e311e"
    ],
};

export const GROUPSNAME_ALREADY_EXIST = {
    groupname: localStorage.getItem('groupName'),
    groupdesc: "QA Test",
    roles: [
        "95fe94c4-14d4-4fba-a192-c039886e311e"
    ]
};

export const INVALID_GROUP_NAME = {
    groupname: "",
    groupdesc: "QA Test",
    roles: [
        "95fe94c4-14d4-4fba-a192-c039886e311e"
    ]
}
