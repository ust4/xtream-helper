# Xtream Helper

## Description

This is a simple helper for Xtream Codes IPTV. It allows you to fetch the data from the API and display it in a more readable format.

## Usage

```typescript
import { Xtream, VOD } from "xtream-helper";

const xtream = new Xtream({
  url: "http://your-xtream-codes-url.com:port",
  {
    username: "your-username",
    password: "your-password"
  }
});

xtream.getVODStreams().then((vods: VOD[]) => {
  console.log(vods);
  /*
  [
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
    },
    ...
    ]
    */
});
```

## Functions
```typescript
xtream.getVODStreams(): Promise<VOD[]>
xtream.getLiveStreams(): Promise<Live[]>
xtream.getCategories(): Promise<Category[]>
xtream.getEPG(): Promise<EPG[]>
xtream.getSeries(): Promise<Series[]>
xtream.getProfiles(): Promise<Profile>
xtream.getServerInfo(): Promise<Profile>
xtream.getUserInfo(): Promise<Profile>
```

## That's it!

# Thanks you for using Xtream Helper!
