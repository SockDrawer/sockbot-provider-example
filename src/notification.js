'use strict';
/**
 * Example provider module Notification class
 * @module sockbot.providers.example.Notification
 * @author Accalia
 * @license MIT
 */

/**
 * Create a Notification class and bind it to a forum instance
 *
 * @param {Provider} forum A forum instance to bind to constructed Notification class
 * @returns {Notification} A Notification class bound to the provided `forum` instance
 */
exports.bindNotification = function bindNotification(forum) {
    /**
     * Notification Class
     *
     * Represents a forum notification
     *
     * @public
     */
    class Notification {
        /**
         * Construct a Notification object from payload
         *
         * This constructor is intended to be private use only, if you need to construct a notification from payload
         * data use `Notification.parse()` instead
         *
         * @public
         * @class
         *
         * @param {*} payload Payload to construct the Notification object out of
         */
        constructor(payload) {
        }

        /**
         * Unique notification id of this notification
         *
         * @public
         *
         * @type {string}
         */
        get id() {
throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Post id this notification refers to
         *
         * @public
         *
         * @type {number}
         */
        get postId() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Topic id this post refers to
         *
         * @public
         *
         * @type {number}
         */
        get topicId() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * User id that generated this notification
         *
         * @public
         *
         * @type {number}
         */
        get userId() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Notification type code
         *
         * @public
         *
         * @type {notificationType}
         */
        get type() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Notification subtype
         *
         * @public
         *
         * @type {string}
         */
        get subtype() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Is this notification read yet?
         *
         * @public
         *
         * @type {boolean}
         */
        get read() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Datetime this notification was generated on
         *
         * @public
         *
         * @type {Date}
         */
        get date() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Notification label
         *
         * @public
         *
         * @type {string}
         */
        get label() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Content of notification.
         *
         * @public
         *
         * @type {string}
         */
        get body() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * HTML Markup for this notification body
         *
         * @public
         *
         * @returns {Promise<string>} Resolves to the notification markup
         *
         * @promise
         * @fulfill the Notification markup
         */
        getText() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * URL Link for the notification if available
         *
         * @public
         *
         * @returns {Promise<string>} Resolves to the URL for the post the notification is for
         *
         * @promise
         * @fullfil {string} The URL for the post the notification is for
         */
        url() {
            return Promise.resolve('');
        }

        /**
         * Get the post this Notification refers to
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the post the notification refers to
         *
         * @promise
         * @fulfill {Post} the Post the notification refers to
         */
        getPost() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Get the topic this Notification refers to
         *
         * @public
         *
         * @returns {Promise<Topic>} Resolves to the topic the notification refers to
         *
         * @promise
         * @fulfill {Topic} the Topic the notification refers to
         */
        getTopic() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Get the user who generated this Notification
         *
         * @public
         *
         * @returns {Promise<User>} Resolves to the user who generated this notification
         *
         * @promise
         * @fulfill {Post} the User who generated this notification
         */
        getUser() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Get a notification
         *
         * @public
         * @static
         *
         * @param {string} notificationId The id of the notification to get
         * @returns {Promise<Notification>} resolves to the retrieved notification
         *
         *@promise
         * @fulfill {Notification} the retrieved notification
         */
        static get(notificationId) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Parse a notification from a given payload
         *
         * @public
         * @static
         *
         * @param {*} payload The notification payload
         * @returns {Notification} the parsed notification
         */
        static parse(payload) {
            return new Notification(payload);
        }

        /**
         * Notification processor
         *
         * @typedef {NotificationProcessor}
         * @function
         *
         * @param {Notification} notification Notification to process
         * @returns {Promise} Resolves on completion
         */

        /**
         * Get all notifications
         *
         * @public
         * @static
         *
         * @param {NotificationProcessor} eachNotification Function to process notifications
         * @returns {Promise} Fulfills after notifications are processed
         *
         */
        static getNotifications(eachNotification) {
            return Promise.resolve();
        }

        /**
         * Activate notifications.
         *
         * Listen for new notifications and process ones that arrive
         */
        static activate() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Deactivate notifications
         *
         * Stop listening for new notifcations.
         */
        static deactivate() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }
    }

    return Notification;
};
