<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'rootpass' );

/** Database hostname */
define( 'DB_HOST', 'mariadb' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'FS_METHOD', 'direct' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'U&P_JG|$UB-?p.8n20uf/&W/9O/),@0f@`|o=A>W^U=5X*Ig@IP#/|Z8in#~3W`a' );
define( 'SECURE_AUTH_KEY',  'nXo*fg?Zb`9<(:0=HTte%C^d1#bcZjl$,VUSa,H]3QL:^e qL_u}>dKY2+Klv7_I' );
define( 'LOGGED_IN_KEY',    ';?II59cuy|jenf]3|(S2O[ro|+g.)OkVi)s8{88}{y3T31G2l~vO2Y@A/+G$fCp>' );
define( 'NONCE_KEY',        'elTFA1^$VOoD!u{m$pv.7glHKy_uo*g=~B5etJ-Rv=lNo/Rj,:/7pmWA.8P2<tB^' );
define( 'AUTH_SALT',        ':iL.2#[}JYIs1c?jzh5wbbR$!8~5%y){U|QDxGgYQMv1 #ELHVC)D-)QMnIds<)l' );
define( 'SECURE_AUTH_SALT', '+-B!<mIH!oJg0Y~wo3pX{`(1ri2i$p$LqHmfte!LT]rFfXq)#4]oP7/[R6L#/c^W' );
define( 'LOGGED_IN_SALT',   'yzpEP?ZxLB{2P3`$o$D4-O(h:]^12YARjQUEF!(^<$33L)pmnQ@?Orb$8_YuFMzc' );
define( 'NONCE_SALT',       ' <9-rL7|8B4EvNbS9l 0kpHleTHf?n#4p*} t;{bdZ%/&HDlCJuDlx4Ov~,%CLC_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
