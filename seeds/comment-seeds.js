const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is amazing!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Great job, amazing work!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is cool! What's next?"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "We need to future-proof this win-win-win. "
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Great plan! Let me diarize this, and we can synchronize ourselves at a later timeframe, for strategic staircase wiggle room."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I'm generally confused most of the time."
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "You hate me."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;