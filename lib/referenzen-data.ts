export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "hanggarten-mit-pool",
    title: "Hanggarten mit Pool und Natursteintreppen",
    ort: "Bad Dürkheim",
    leistung: "Gartenneugestaltung",
    text: "Ein leicht abfallendes Grundstück wurde in Ebenen gegliedert. Natursteintreppen verbinden Terrasse, Pool und die höher liegenden Beete. Bepflanzung, Wege und Materialien sind aus einem Guss geplant.",
    afterImage: "/assets/acquisition/projekte/gartenanlage-mit-pool-und-naturstein-01.jpg",
    alt: "Angelegter Hanggarten mit rechteckigem Pool, Natursteintreppen und bepflanzten Ebenen"
  },
  {
    id: "vorgarten-pflasterung",
    title: "Vorgarten mit Pflasterweg und Zierkies",
    ort: "Bad Dürkheim",
    leistung: "Pflasterarbeiten",
    text: "Aus einem unstrukturierten Vorbereich wurde ein klarer Zugang: gerader Pflasterweg in Grautönen, Zierkiesflächen mit Randeinfassung und eine Steinbank als ruhiger Akzent vor dem Haus.",
    afterImage: "/assets/acquisition/projekte/moderner-vorgarten-mit-pflasterung-01.jpg",
    alt: "Neu gestalteter Vorgarten mit grauem Pflasterweg, Zierkies und Steinbank vor einem Wohnhaus"
  },
  {
    id: "natursteinweg-palmen",
    title: "Natursteinweg mit Rasenfläche und Palmen",
    ort: "Bad Dürkheim",
    leistung: "Gartenneugestaltung",
    text: "Ein geschwungener Weg aus Naturstein führt über die neu angelegte Rasenfläche. Das Beet mit Palmen setzt einen mediterranen Akzent, ohne die Bepflanzung ringsum zu erdrücken.",
    afterImage: "/assets/acquisition/projekte/gartenanlage-mit-natursteinweg-und-palmen-01.jpg",
    alt: "Geschwungener Natursteinweg mit angrenzender Rasenfläche und einem Beet mit Palmen"
  },
  {
    id: "sichtschutz-holz",
    title: "Sichtschutz aus dunkel lasiertem Holz",
    ort: "Bad Dürkheim",
    leistung: "Zaun & Sichtschutz",
    text: "Eine geschlossene Sichtschutzwand aus dunkel lasiertem Holz trennt Terrasse und Nachbargrundstück. Höhe und Verlauf wurden vor der Montage mit den Anwohnern und der örtlichen Satzung abgeglichen.",
    afterImage: "/assets/acquisition/projekte/dunkler-holzzaun-01.jpg",
    alt: "Dunkel lasierter Holzsichtschutz vor einer Bepflanzung aus roten und grünen Blättern"
  },
  {
    id: "gartenweg-natursteinmauer",
    title: "Gartenweg mit Natursteinmauer und Hochbeet",
    ort: "Bad Dürkheim",
    leistung: "Gartenneugestaltung",
    text: "Der neue Gartenweg wird von einer handgesetzten Natursteinmauer und einem bepflanzten Hochbeet gefasst. Der Zugang zum Haus bleibt breit genug, damit die Post problemlos in den Briefkasten passt.",
    afterImage: "/assets/acquisition/projekte/gartenweg-mit-natursteinmauern-und-hochbeet-01.jpg",
    alt: "Gepflasterter Gartenweg zwischen Natursteinmauer und bepflanztem Hochbeet"
  }
];
