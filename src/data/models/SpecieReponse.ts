export type FlavorTextResponse = {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
};

export type GeneraResponse = {
  genus: string;
  language: {
    name: string;
  };
};

export type SpecieResponse = {
  color: {
    name: string;
  };
  flavor_text_entries: FlavorTextResponse[];
  genera: GeneraResponse[];
  habitat: {
    name: string;
  };
};
