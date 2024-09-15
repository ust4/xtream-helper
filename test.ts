import {Xtream} from "./src/xtream";

async function main() {
    const xtream = new Xtream("http://canlitv.tsvipsmart.eu:8000", { username: "YKGyPTnO3A", password: "tPn2gIxeaC" });
    const profile = await xtream.getProfile();
    console.log(profile);
    const liveStreams = await xtream.getLiveStreams();
    console.log(liveStreams[0]);
    }
main();
