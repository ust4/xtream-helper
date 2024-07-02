# Xtream Helper

## Description

This is a simple helper for Xtream Codes IPTV. It allows you to fetch the data from the API and display it in a more readable format.

## Usage

```typescript
import { Xtream, VOD } from "xtream-helper";

const xtream = new XtreamHelper({
  url: "http://your-xtream-codes-url.com:port",
  {
    username: "your-username",
    password: "your-password"
  }
});

xtream.getVODStreams().then((vods: VOD[]) => {
  console.log(vods[54]);
  /*
    {
        num: number;
        name: string;
        stream_type: string;
        stream_id: number;
        stream_icon: string;
        rating: string;
        rating_5based: number;
        tmdb: number;
        trailer: string;
        added: string;
        is_adult: number;
        category_id: string;
        category_ids: number[];
        container_extension: string;
        custom_sid: any;
        direct_source: string;
        url:string;
    }
    */
});
```

## That's it!

# Thanks you for using Xtream Helper!
