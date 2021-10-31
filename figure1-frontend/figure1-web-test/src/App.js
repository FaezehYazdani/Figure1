import React, { useState, useEffect } from 'react';
import './App.css';
import FeedItems  from './components/FeedItems';

function App() {
  const [feedItems, setFeedItems] = useState([])

  useEffect(() => {
    const getFeeds = async () => {
      const feedsFromApi = await fetchFeeds();
      setFeedItems(feedsFromApi);
    }

    getFeeds();
  }, [])

  const fetchFeeds = async () => {
    const res = await fetch('https://us-central1-figure1-admin-dev.cloudfunctions.net/demoFeed');
    const data = await res.json()

    return data.feedItems;
  }

  return (
    <div className="App">
      <h1 className='header'>Figure 1</h1>
      <FeedItems feedItems={feedItems} />
    </div>
  );
}

export default App;
