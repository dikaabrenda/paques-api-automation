/**
 * @RUN_TEST
 */

import './credentials/capcha.spec';
import './credentials/login.spec';

/**
 * @ENDPOINT_DATAQUERY
 */
import './pds/query/query.dataset.spec';

/**
 * @ENDPOINT_USERS
 */
import './pds/UserManagement/users/CreateUsers.spec'
import './pds/UserManagement/users/GetUsers.spec'
import './pds/UserManagement/users/UpdateUsers.spec'
import './pds/UserManagement/users/DeleteUsers.spec'