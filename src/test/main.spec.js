/**
 * @RUN_TEST
 */

import './credentials/capcha.spec.js';
import './credentials/login.spec.js';

/**
 * @ENDPOINT_DATAQUERY
 */
import './pds/query/query.dataset.spec.js';

/**
 * @ENDPOINT_USERS
 */
import './pds/UserManagement/users/CreateUsers.spec.js'
import './pds/UserManagement/users/GetUsers.spec.js'
import './pds/UserManagement/users/UpdateUsers.spec.js'
import './pds/UserManagement/users/DeleteUsers.spec.js'