import React from "react";
import YouTube from "react-youtube";

interface YoutubeVideoProps {}

export default class YoutubeVideo extends React.Component<YoutubeVideoProps> {
  private _onReady(event: any) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "600",
      width: "900",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div>
        <YouTube videoId="NgkCgqIogcY" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}
