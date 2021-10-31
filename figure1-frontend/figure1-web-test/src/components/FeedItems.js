import React from 'react';
import FeedItem from "./FeedItem";

const FeedItems = ({feedItems}) => {

    return (
        <>
        {feedItems.map((feedItem) => (
            <FeedItem title={feedItem.title} username={feedItem.username} image={feedItem.imageUrl} caption={feedItem.caption} />
        ))}
        </>
    )
}

export default FeedItems;