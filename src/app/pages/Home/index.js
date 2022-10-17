import React, { useContext, useEffect, useState } from "react";
import TweetsList from "../Home/components/TweetList";
import TweetItem from "../Home/components/TweetItem";
import "./styles.css";
import Navbar from "../../../app/components/Navbar";
import AppContext from "../../contexts/AppContext";
import { getTweetsList, postTweet } from "../../../api/tweets";


const HomeLayout = () => {

    const [tweetsList, setTweetsList] = useState({})
    const [tweetsLoading, settweetsLoading] = useState(true)
    const [tweetsError, settweetsError] = useState(null)
    const [publishLoading, setpublishLoading] = useState(false)
    const { ...data } = useContext(AppContext)
    const usuario = {
        id: data.data.auth.user_id,
        name: data.data.name,
        photo: data.data.photo
    }

    useEffect(() => {
        getTweetsList().then(
            resp => {
                setTweetsList(resp)
                settweetsLoading(false)
            }
        ).catch((err) => {
            settweetsError("No logramos llegar a Firebase " + err)
        })

    }, []);

    return (
        <>
            <Navbar />
            <div className="tweets-list-container">
                <TweetItem
                    createMode={true}
                    user={usuario}
                    loading={publishLoading}
                    // error={} estado de error en la acción de post del tweet (debe mostrarse también si esta vacío el texto)
                    // onPublish={ }
                />
                <TweetsList
                    list={tweetsList}
                    loading={tweetsLoading}
                    error={tweetsError}
                />
            </div>
        </>
    );
};

export default HomeLayout;