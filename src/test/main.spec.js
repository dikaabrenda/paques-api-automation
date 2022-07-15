/**
 * @RUN_TEST
 */

import './credentials/capcha.spec'
import './credentials/login.spec'


/**
 * @ENDPOINT_USERS
 */

import './pds/UserManagement/users/CreateUsers.spec'
import './pds/UserManagement/users/GetUsers.spec'
import './pds/UserManagement/users/UpdateUsers.spec'
import './pds/UserManagement/users/DeleteUsers.spec'

/**
 * @ENDPOINT_GROUP
 */

import './pds/UserManagement/groups/CreateGroups.spec'
import './pds/UserManagement/groups/GetGroups.spec'


/**
 * @ENDPOINT_DATAQUERY
 */

 import './pds/query/query.dataset.spec'
