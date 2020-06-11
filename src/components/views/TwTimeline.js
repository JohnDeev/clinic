import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwTimeline = () => {
    return (
        <div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ipssism"
                options={{ width: 340, height: 500 }}
            />
        </div>
    );
};

export default TwTimeline;