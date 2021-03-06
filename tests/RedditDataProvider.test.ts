import { DataFetcher } from "../src/services/DataFetcher";
import { RedditDataProvider } from "../src/services/RedditDataProvider";

const json = require("./data/reddit-data.json");

describe("RedditDataProvider", () => {
  test("instantiating", () => {
    const provider = new RedditDataProvider({} as DataFetcher);
    expect(provider).toBeInstanceOf(RedditDataProvider);
  });

  test("getData", async () => {
    const provider = new RedditDataProvider({
      async getData(): Promise<[] | any> {
        return json;
      },
    } as DataFetcher);

    expect(await provider.getData()).toEqual([
      {
        name: "Amigurumi",
        commentsPerHour: 1.375,
        subscribers: [
          22193, 22533, 22887, 23249, 23942, 24243, 24720, 25046, 25408, 26127,
          26591, 27731,
        ],
        messages: [
          9591, 9901, 10300, 10613, 10940, 11268, 11701, 11987, 12498, 12986,
          13477, 13929,
        ],
        topKeywords: [
          ["crocheting", 5260.019425520162],
          ["crochet", 3255.281629764316],
          ["ravelry", 2165.8903516847727],
          ["snowman", 928.2387221506169],
          ["pica", 773.5322684588473],
          ["yarn", 700.5575261514089],
          ["keychains", 515.6881789725649],
          ["jellyfish", 455.0189814463808],
          ["canisters", 442.01843911934134],
          ["pau", 412.5505431780519],
        ],
      },
      {
        name: "crochet",
        commentsPerHour: 0.179,
        subscribers: [
          146534, 163320, 165346, 168147, 172202, 177345, 181959, 185886,
          192270, 201404, 207106, 219163,
        ],
        messages: [
          362379, 371313, 379778, 387940, 397948, 407037, 415664, 427597,
          437575, 447485, 457478, 467929,
        ],
        topKeywords: [
          ["crocheted", 12008.09024742189],
          ["yarns", 5903.1368023040395],
          ["crocheting", 4112.695910313925],
          ["tunisian", 2623.616356579573],
          ["neckline", 2589.9802494439373],
          ["romper", 2295.6643120071262],
          ["crochet", 2135.372025497825],
          ["zeer", 1530.4428746714175],
          ["petticoat", 1530.4428746714175],
          ["poms", 1311.8081782897866],
        ],
      },
    ]);
  });
});
