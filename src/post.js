'use strict';
/**
 * Example provider module User class
 * @module sockbot.providers.example.User
 * @author Accalia
 * @license MIT
 */

/**
 * Create a Post class and bind it to a forum instance
 *
 * @param {Provider} forum A forum instance to bind to constructed Post class
 * @returns {User} A Post class bound to the provided `forum` instance
 */
exports.bindPost = function bindPost(forum) {
    /**
     * Post Class
     *
     * Represents a forum post
     *
     * @public
     */
    class Post {
        /**
         * Construct a Post object from payload
         *
         * This constructor is intended to be private use only, if you need to construct a post from payload data use
         * `Post.parse()` instead
         *
         * @public
         * @class
         *
         * @param {*} payload Payload to construct the Post object out of
         */
        constructor(payload) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * ID of the post author
         *
         * @public
         *
         * @type {!number}
         */
        get authorId() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Raw content of the post, before any HTML transformation has been applied
         *
         * @public
         *
         * @type {string}
         */
        get content() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Retrieve the HTML representation of the raw content of the post
         *
         * @public
         *
         * @returns {Promise<string>} Resolves to the HTML markup for the post
         *
         * @promise
         * @fulfill {string} The HTML markup for this post
         * @reject {Error} An Error that occured while deleting
         */
        markup() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * DateTime that the post was posted
         *
         * @public
         *
         * @type {Date}
         */
        get posted() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * ID of the post
         *
         * @public
         *
         * @type {number}
         */
        get id() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * ID of the topic that contains this post
         *
         * @public
         *
         * @type {number}
         */
        get topicId() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Retrieve the direct URL for this post
         *
         * @public
         *
         * @returns {Promise<string>} Resolves to the web URL for this post
         *
         * @promise
         * @fulfill {string} The web URL for this post
         * @reject {Error} An Error that occured while retreiving post URL
         */
        url() {
            return Promise.resolve('');
        }

        /**
         * Reply to this post with the given content
         *
         * @public
         *
         * @param {string} content Post content
         * @returns {Promise<Post>} Resolves to the newly created Post
         *
         * @promise
         * @fulfill {Post} The newly created Post
         * @reject {Error} An Error that occured while posting
         */
        reply(content) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Post a reply to a post with the given content
         *
         * @public
         * @static
         *
         * @param {string} topicId Topic Id to reply to
         * @param {string} postId Post Id to reply to
         * @param {string} content Post content
         * @returns {Promise<Post>} Resolves to the newly created Post
         *
         * @promise
         * @fulfill {Post} The newly created Post
         * @reject {Error} An Error that occured while posting
         */
        static reply(topicId, postId, content) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Edit this post to contain new content
         *
         * @public
         *
         * @param {string} newContent New post content
         * @param {string} [reason] Post edit reason
         *
         * @returns {Promise<Post>} Resolves to the edited Post
         *
         * @promise
         * @fulfill {Post} The edited Post
         * @reject {Error} An Error that occured while editing
         */
        edit(newContent, reason) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Append new content to this post
         *
         * @public
         *
         * @param {string} newContent New post content
         * @param {string} [reason] Post edit reason
         *
         * @returns {Promise<Post>} Resolves to the edited post
         *
         * @promise
         * @fulfill {Post} The edited Post
         * @reject {Error} An Error that occured while editing
         */
        append(newContent, reason) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Delete this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the deleted post
         *
         * @promise
         * @fulfill {Post} The deleted Post
         * @reject {Error} An Error that occured while deleting
         */
        delete() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Undelete this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the undeleted post
         *
         * @promise
         * @fulfill {Post} The undeleted Post
         * @reject {Error} An Error that occured while deleting
         */
        undelete() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Upvote this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the upvoted post
         *
         * @promise
         * @fulfill {Post} The upvoted Post
         * @reject {Error} An Error that occured while upvoting
         */
        upvote() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Downvote this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the downvoted post
         *
         * @promise
         * @fulfill {Post} The downvoted Post
         * @reject {Error} An Error that occured while downvoting
         */
        downvote() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Unvote this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the unvoted post
         *
         * @promise
         * @fulfill {Post} The unvoted Post
         * @reject {Error} An Error that occured while downvoting
         */
        unvote() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Bookmark this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the bookmarked post
         *
         * @promise
         * @fulfill {Post} The bookmarked post
         * @reject {Error} An Error that occured while bookmarking
         */
        bookmark() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Remove a bookmark from this post
         *
         * @public
         *
         * @returns {Promise<Post>} Resolves to the unbookmarked post
         *
         * @promise
         * @fulfill {Post} The unbookmarked post
         * @reject {Error} An Error that occured while unbookmarking
         */
        unbookmark() {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Retrieve a post identified by postId
         *
         * @public
         * @static
         *
         * @param {*} postId Forum specific post id to retrieve
         * @returns {Promise<Post>} Resolves to the retrieved post
         *
         * @promise
         * @fulfill {Post} The retrieved Post
         * @reject {Error} An Error that occured retrieving the post
         */
        static get(postId) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }

        /**
         * Construct a post object from a previously retrieved payload
         *
         * @public
         * @static
         *
         * @param {*} payload Serialized post representation retrieved from forum
         * @returns {Post} the deserialized Post object
         */
        static parse(payload) {
            return new Post(payload);
        }

        /**
         * Render the content to HTML as it would be rendered for a post
         *
         * @public
         * @static
         *
         * @param {string} content Content to render HTML PReview for
         * @returns {Promise<String>} Resolves to the rendered HTML
         *
         * @promise
         * @fulfill {string} Rendered HTML for `content`
         * @reject {Error} Any error that occurred rendering HTML for `content`
         *
         */
        static preview(content) {
            throw new Error('E_REQUIRED_FUNCTION_NOT_IMPLEMENTED');
        }
    }
    return Post;
};
