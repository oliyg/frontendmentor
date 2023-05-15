import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useHomeStore = defineStore("home", () => {
  const result = ref<Data[]>([
    {
      word: "keyboard",
      phonetics: [
        {
          text: "/ˈkiːbɔːd/",
          audio: "",
        },
        {
          text: "/ˈkiːbɔːd/",
          audio: "",
        },
        {
          text: "/ˈkibɔɹd/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1755168",
          license: {
            name: "BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "(etc.) A set of keys used to operate a typewriter, computer etc.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["electronic keyboard"],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "To type on a computer keyboard.",
              synonyms: [],
              antonyms: [],
              example: "Keyboarding is the part of this job I hate the most.",
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/keyboard"],
    },
  ]);
  const err = ref<ErrorMsg | null>(null);
  const hasErr = computed(() => err.value !== null);

  const query = async (txt: string) => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + txt;
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    if (!Array.isArray(data)) {
      err.value = data;
      result.value = [];
    } else {
      result.value = data;
      err.value = null;
    }
  };

  return { query, result, err, hasErr };
});

// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export type Data = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

export type License = {
  name: string;
  url: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Definition = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

export type Phonetic = {
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
};

/* ------------------------------- Error Type ------------------------------- */

export type ErrorMsg = {
  title: string;
  message: string;
  resolution: string;
};
