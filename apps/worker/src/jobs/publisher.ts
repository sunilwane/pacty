import Redis from "ioredis";
import { config } from "@pactly/config";

const redis = new Redis(config.redis.url);

export async function publish(channel: string, message: unknown) {
  await redis.publish(channel, JSON.stringify(message));
}
