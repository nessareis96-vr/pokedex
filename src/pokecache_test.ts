import { describe, expect, test } from "vitest";
import { Cache } from "./pokecache.js";

describe("Cache", () => {
  test("stores and retrieves a value", () => {
    const cache = new Cache(1000);

    cache.add("test-key", "test-value");

    expect(cache.get<string>("test-key")).toBe("test-value");

    cache.stopReapLoop();
  });
});