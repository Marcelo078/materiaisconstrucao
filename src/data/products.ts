export interface Product {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  category: string;
  brand: string;
  keywords: string[];
  affiliateLink: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Fechadura De Sobrepor Digital E Senha Com Biometria Fr 220 Intelbras",
    slug: "fechadura-sobrepor-digital-biometria-fr220-intelbras",
    shortName: "Fechadura Digital FR 220",
    category: "Fechaduras Digitais",
    brand: "Intelbras",
    keywords: ["fechadura digital", "biometria", "senha", "fr 220", "intelbras", "segurança residencial"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "2",
    name: "Fechadura Digital De Embutir Com Maçaneta Intelbras Mfr 7000 Branca",
    slug: "fechadura-digital-embutir-macaneta-mfr7000-intelbras",
    shortName: "Fechadura MFR 7000",
    category: "Fechaduras Digitais",
    brand: "Intelbras",
    keywords: ["fechadura embutir", "maçaneta digital", "mfr 7000", "intelbras", "branca"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "3",
    name: "Fechadura Eletronica Digital Com Biometria Senha Kuantttum Delta Pro Tuya Wi-fi Cor Preta",
    slug: "fechadura-eletronica-biometria-kuantttum-delta-pro-wifi",
    shortName: "Fechadura Kuantttum Delta Pro",
    category: "Fechaduras Digitais",
    brand: "Kuantttum",
    keywords: ["fechadura wifi", "tuya", "delta pro", "biometria", "smart home"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "4",
    name: "Fechadura Digital De Sobrepor Touch Screen Fr 101 Preta Intelbras",
    slug: "fechadura-digital-sobrepor-touch-fr101-intelbras",
    shortName: "Fechadura FR 101 Touch",
    category: "Fechaduras Digitais",
    brand: "Intelbras",
    keywords: ["fechadura touch", "fr 101", "sobrepor", "tela touch", "intelbras"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "5",
    name: "Parafusadeira Furadeira De Impacto Profissional Sem Fio 2 Baterias 21v Com Maleta Tb-21yx The Black Tools",
    slug: "parafusadeira-furadeira-impacto-21v-the-black-tools-tb21yx",
    shortName: "Parafusadeira TB-21YX 21V",
    category: "Ferramentas Elétricas",
    brand: "The Black Tools",
    keywords: ["parafusadeira", "furadeira impacto", "21v", "2 baterias", "profissional", "sem fio"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "6",
    name: "Parafusadeira Furadeira De Impacto The Black Tools Profissional Tb-21px 2 Baterias Com Maleta 60hz Amarelo",
    slug: "parafusadeira-furadeira-impacto-tb21px-the-black-tools-amarelo",
    shortName: "Parafusadeira TB-21PX Amarelo",
    category: "Ferramentas Elétricas",
    brand: "The Black Tools",
    keywords: ["parafusadeira amarela", "tb-21px", "impacto", "profissional", "maleta"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "7",
    name: "Parafusadeira E Furadeira A Bateria Wap Bpf 12k3.2 Com Maleta",
    slug: "parafusadeira-furadeira-bateria-wap-bpf12k3",
    shortName: "Parafusadeira WAP BPF 12K",
    category: "Ferramentas Elétricas",
    brand: "WAP",
    keywords: ["parafusadeira wap", "furadeira bateria", "bpf 12k", "maleta", "compacta"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "8",
    name: "Desobstruidora De Alta Pressão 1500w 1750psi Wap Ousada Plus Ultra 2200",
    slug: "desobstruidora-alta-pressao-wap-ousada-plus-ultra-2200",
    shortName: "Desobstruidora WAP Ousada Plus",
    category: "Limpeza Profissional",
    brand: "WAP",
    keywords: ["desobstruidora", "alta pressão", "1500w", "wap ousada", "limpeza profissional"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "9",
    name: "Brudden Ss-20b Pulverizador Costal À Bateria 12v 20l",
    slug: "pulverizador-costal-bateria-brudden-ss20b-20l",
    shortName: "Pulverizador Brudden SS-20B",
    category: "Jardinagem",
    brand: "Brudden",
    keywords: ["pulverizador costal", "bateria 12v", "20 litros", "brudden", "jardinagem"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "10",
    name: "Mini Esmerilhadeira Angular Bosch Professional Gws 700 Azul 710 W",
    slug: "esmerilhadeira-angular-bosch-gws700-710w",
    shortName: "Esmerilhadeira Bosch GWS 700",
    category: "Ferramentas Elétricas",
    brand: "Bosch",
    keywords: ["esmerilhadeira", "bosch professional", "gws 700", "710w", "angular"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "11",
    name: "Lavadora De Alta Vazão Motor Weg 3hp 550 Libras Eletroplas El-4000v3 Monofásico (bivolt)",
    slug: "lavadora-alta-vazao-eletroplas-el4000v3-550-libras",
    shortName: "Lavadora Eletroplas EL-4000V3",
    category: "Limpeza Profissional",
    brand: "Eletroplas",
    keywords: ["lavadora alta pressão", "550 libras", "3hp", "eletroplas", "bivolt"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "12",
    name: "Aparador De Grama 1880w Sem Fio 48v 18000rpm 127/220v Verde",
    slug: "aparador-grama-sem-fio-48v-1880w",
    shortName: "Aparador de Grama 48V",
    category: "Jardinagem",
    brand: "Genérico",
    keywords: ["aparador grama", "sem fio", "48v", "1880w", "jardim"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "13",
    name: "Cuba Cozinha Gourmet Pia Aço Inox 304 Quadrada 58cm",
    slug: "cuba-cozinha-gourmet-aco-inox-304-58cm",
    shortName: "Cuba Gourmet Inox 58cm",
    category: "Cozinha",
    brand: "Genérico",
    keywords: ["cuba cozinha", "aço inox 304", "gourmet", "quadrada", "58cm"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "14",
    name: "Cuba De Embutir E Sobrepor Línea Franke 60x40 Em Aço Inox Com Válvula E Sifão",
    slug: "cuba-embutir-sobrepor-franke-linea-60x40-inox",
    shortName: "Cuba Franke Línea 60x40",
    category: "Cozinha",
    brand: "Franke",
    keywords: ["cuba franke", "línea", "embutir", "sobrepor", "60x40", "válvula sifão"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "15",
    name: "Tanque Lavanderia Escovado 55x45 Aço Inoxidável 304 Premium Aço Inox Escovado",
    slug: "tanque-lavanderia-inox-304-escovado-55x45",
    shortName: "Tanque Inox Premium 55x45",
    category: "Lavanderia",
    brand: "Genérico",
    keywords: ["tanque lavanderia", "aço inox 304", "escovado", "premium", "55x45"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "16",
    name: "Caixa Inspeção/interligação Esgoto 100mm - Tigre",
    slug: "caixa-inspecao-esgoto-100mm-tigre",
    shortName: "Caixa Inspeção Tigre 100mm",
    category: "Hidráulica",
    brand: "Tigre",
    keywords: ["caixa inspeção", "esgoto", "100mm", "tigre", "hidráulica"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "17",
    name: "Sanitário Vaso Convencional Redondo Tubrax Cor Branco",
    slug: "vaso-sanitario-convencional-tubrax-branco",
    shortName: "Vaso Sanitário Tubrax",
    category: "Banheiro",
    brand: "Tubrax",
    keywords: ["vaso sanitário", "convencional", "redondo", "tubrax", "branco"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "18",
    name: "Máquina Solda Inversora 325a 3 Em 1 Mig+tig+mma 127v/220v",
    slug: "maquina-solda-inversora-325a-3em1-mig-tig-mma",
    shortName: "Inversora 325A 3 em 1",
    category: "Soldagem",
    brand: "Genérico",
    keywords: ["máquina solda", "inversora", "325a", "mig", "tig", "mma", "3 em 1"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "19",
    name: "Fechadura Digital De Sobrepor Fr201 Preto Intelbras",
    slug: "fechadura-digital-sobrepor-fr201-intelbras-preto",
    shortName: "Fechadura FR201 Preta",
    category: "Fechaduras Digitais",
    brand: "Intelbras",
    keywords: ["fechadura fr201", "sobrepor", "digital", "intelbras", "preta"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "20",
    name: "Cuba Aço Inox Tramontina Prime N 2 56x34x17 Com Válvula Inox",
    slug: "cuba-inox-tramontina-prime-n2-56x34x17",
    shortName: "Cuba Tramontina Prime N2",
    category: "Cozinha",
    brand: "Tramontina",
    keywords: ["cuba tramontina", "prime n2", "inox", "56x34x17", "válvula"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "21",
    name: "Cabeçote Compressor De Ar Pró Euro 10 Pcm Pés 140 Psi Libras 2 Hp Cor Preto",
    slug: "cabecote-compressor-ar-pro-euro-10pcm-140psi",
    shortName: "Cabeçote Compressor 10 PCM",
    category: "Compressores",
    brand: "Pro Euro",
    keywords: ["cabeçote compressor", "10 pcm", "140 psi", "2 hp", "ar comprimido"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "22",
    name: "Furadeira De Bancada 1/2 Pol 1/2 Cv Com Morsa Fg13cm Ferrari",
    slug: "furadeira-bancada-ferrari-fg13cm-morsa",
    shortName: "Furadeira Bancada Ferrari",
    category: "Ferramentas Elétricas",
    brand: "Ferrari",
    keywords: ["furadeira bancada", "1/2 pol", "morsa", "ferrari", "profissional"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "23",
    name: "Chuveiro De Teto Redondo Acqua Plus 1990 Com Tubo Cromo Deca Acabamento Cromado Cor Cromado",
    slug: "chuveiro-teto-acqua-plus-1990-deca-cromado",
    shortName: "Chuveiro Deca Acqua Plus",
    category: "Banheiro",
    brand: "Deca",
    keywords: ["chuveiro teto", "acqua plus", "deca", "cromado", "redondo"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "24",
    name: "Martelete Combinado Sds-plus 800w - Hr2470 Makita",
    slug: "martelete-combinado-makita-hr2470-800w",
    shortName: "Martelete Makita HR2470",
    category: "Ferramentas Elétricas",
    brand: "Makita",
    keywords: ["martelete", "makita", "hr2470", "800w", "sds-plus", "combinado"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "25",
    name: "Interruptor Ekaza 3 Botões Smart Automação Branco",
    slug: "interruptor-smart-ekaza-3-botoes-automacao",
    shortName: "Interruptor Smart Ekaza",
    category: "Automação",
    brand: "Ekaza",
    keywords: ["interruptor smart", "ekaza", "3 botões", "automação", "wifi"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "26",
    name: "Lixadeira Profissional Orbital Bosch Professional Gss 140 Azul",
    slug: "lixadeira-orbital-bosch-gss140-profissional",
    shortName: "Lixadeira Bosch GSS 140",
    category: "Ferramentas Elétricas",
    brand: "Bosch",
    keywords: ["lixadeira orbital", "bosch", "gss 140", "profissional", "acabamento"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "27",
    name: "Móveis Bechara Para Banheiro Ibiza De 70cmx47.8cmx45cm Com Pia Colorida Branco E Móveis Branco Natural",
    slug: "movel-banheiro-bechara-ibiza-70cm-pia",
    shortName: "Móvel Banheiro Ibiza 70cm",
    category: "Banheiro",
    brand: "Bechara",
    keywords: ["móvel banheiro", "bechara", "ibiza", "70cm", "pia", "gabinete"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "28",
    name: "Compressor Ar Direto Elétrico Poço Artesiano 1000w 220v Prata 220v 60 Hz Monofásica",
    slug: "compressor-ar-direto-poco-artesiano-1000w",
    shortName: "Compressor Poço Artesiano",
    category: "Compressores",
    brand: "Genérico",
    keywords: ["compressor ar direto", "poço artesiano", "1000w", "220v", "monofásico"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "29",
    name: "Lorenzetti Maxi Ducha Ultra Branco 5500w",
    slug: "ducha-lorenzetti-maxi-ultra-5500w-branco",
    shortName: "Ducha Lorenzetti Maxi Ultra",
    category: "Banheiro",
    brand: "Lorenzetti",
    keywords: ["ducha", "lorenzetti", "maxi ultra", "5500w", "aquecimento"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "30",
    name: "Serra Mármore 4.3/8 Pol 1.300w + 3 Discos 4100nh3zx2 Makita",
    slug: "serra-marmore-makita-4100nh3zx2-1300w",
    shortName: "Serra Mármore Makita 1300W",
    category: "Ferramentas Elétricas",
    brand: "Makita",
    keywords: ["serra mármore", "makita", "1300w", "4100nh3zx2", "3 discos"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "31",
    name: "Câmera Inteligente Wi-fi A Bateria Im8 3mp Intelbras Cor Branco",
    slug: "camera-wifi-bateria-intelbras-im8-3mp",
    shortName: "Câmera Intelbras IM8",
    category: "Segurança",
    brand: "Intelbras",
    keywords: ["câmera wifi", "intelbras", "im8", "3mp", "bateria", "segurança"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  },
  {
    id: "32",
    name: "Mini Retifica Profissional 450w 212 Peças Nakasaki + Potente",
    slug: "mini-retifica-profissional-nakasaki-450w-212-pecas",
    shortName: "Mini Retífica Nakasaki 450W",
    category: "Ferramentas Elétricas",
    brand: "Nakasaki",
    keywords: ["mini retífica", "nakasaki", "450w", "212 peças", "profissional"],
    affiliateLink: "https://mercadolivre.com/sec/23DZvGp"
  }
];

export const affiliateCategories = [
  { name: "Melhores Suplementos", link: "https://mercadolivre.com/sec/1WqdDGr", icon: "💪" },
  { name: "Ofertas Limitadas", link: "https://mercadolivre.com/sec/14GQgfK", icon: "🔥" },
  { name: "Pet Shop Cães e Gatos", link: "https://mercadolivre.com/sec/2w3WCFN", icon: "🐾" },
  { name: "Peças de Trator", link: "https://mercadolivre.com/sec/2d6sMcw", icon: "🚜" },
  { name: "Melhores Notebooks", link: "https://mercadolivre.com/sec/2cQ33FV", icon: "💻" },
  { name: "Melhores TVs", link: "https://mercadolivre.com/sec/2DLVWrw", icon: "📺" },
  { name: "Construção e Ferramentas", link: "https://mercadolivre.com/sec/23DZvGp", icon: "🔧" },
  { name: "Melhores Creatina", link: "https://mercadolivre.com/sec/1e23ygz", icon: "🏋️" },
  { name: "Smart Home", link: "https://mercadolivre.com/sec/32Q9odi", icon: "🏠" },
  { name: "Carrinhos de Bebês", link: "https://mercadolivre.com/sec/1RdnycUU", icon: "👶" },
  { name: "Bebedouros de Água", link: "https://mercadolivre.com/sec/2CjPSqn", icon: "💧" },
  { name: "Motos Infantil Elétrica", link: "https://mercadolivre.com/sec/18DzYmU", icon: "🏍️" },
  { name: "Triciclos Recarregáveis", link: "https://mercadolivre.com/sec/2bb6TRL", icon: "🛴" },
  { name: "Espelhos Orgânicos", link: "https://mercadolivre.com/sec/1MEENov", icon: "🪞" },
  { name: "Placas de Vídeo", link: "https://mercadolivre.com/sec/1HnRJHj", icon: "🎮" },
  { name: "Bicicletas Ergométricas", link: "https://mercadolivre.com/sec/2nKZmda", icon: "🚴" },
  { name: "Hoverboard Skate Elétrico", link: "https://mercadolivre.com/sec/28Ru8g8", icon: "🛹" },
];

export const categories = [...new Set(products.map(p => p.category))];
export const brands = [...new Set(products.map(p => p.brand))];
