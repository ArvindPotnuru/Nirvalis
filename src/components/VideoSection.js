import React from 'react';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-section-title">See Nirvalis in Action</h2>
        <p className="video-section-subtitle">
          Discover how Nirvalis transforms your health journey
        </p>
        <div className="video-wrapper">
          <div className="video-embed">
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/69527fe767424051770dd42a"
              title="Nirvalis - Health Intelligence Partner"
              className="video-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
