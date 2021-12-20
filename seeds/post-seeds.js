const { Post } = require('../models');

const postData = [
    {
        title: "Worcestershire sauce?",
        post_content: "How do you really pronounce this word? Learn how this sauce, originally made in Worcester, England, became one of the most mispronounced beloved seasonings in America.",
        user_id: 3
    },
    {
        title: "People Are Sharing Their Engagement Rejection Moments",
        post_content: "And I Feel Bad, Sad, And Upset For Them",
        user_id: 1
    },
    {
        title: "66 Of The Best Last-Minute Gifts To Give In 2021",
        post_content: "If you hurry, you'll still have time to get an awesome gift for your Secret Santa exchange.",
        user_id: 2

    },
    {
        title: "People Are Calling Out Things They're Sick Of Being Romanticized, And There Are No Lies Detected",
        post_content: "What are you sick of being romanticized or being portrayed positively?",
        user_id: 5
    },
    {
        title: "Cars Are Banned In These 18 Places Around The World And No One Seems To Miss Them",
        post_content: "Cars are overrated anyway.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;