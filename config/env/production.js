/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    mail_from: 'dashboard@example.com',
    admin_email: 'feedback@example.com',
    smtp: {
        port: 587,
        host: 'smtp.mandrillapp.com',
        auth: {
            user: 'hannu.kumpula@geniem.com',
            pass: '4OCRMDHhNKAa51-QNyFoZA',
        },
    },

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
