const pageData = {
    pageTitle: "De Compras",
    pageSubtitle: "Aprende a preguntar por precios, talles y a realizar compras en general.",
    conversationStarters: [
        {
            es: "¿Qué es lo más extraño que has comprado en un viaje?",
            ja: "旅行中に買った一番変なものは何ですか。",
            ro: "Ryokō-chū ni katta ichiban hen na mono wa nan desu ka?"
        },
        {
            es: "Si pudieras comprar cualquier cosa en Japón, ¿qué sería?",
            ja: "もし日本で何でも買えるなら、何を買いますか。",
            ro: "Moshi Nihon de nan demo kaeru nara, nani o kaimasu ka?"
        },
        {
            es: "¿Prefieres comprar en tiendas grandes o pequeñas?",
            ja: "大きいお店と小さいお店、どちらで買い物をするのが好きですか。",
            ro: "Ōkii omise to chiisai omise, dochira de kaimono o suru no ga suki desu ka?"
        }
    ],
    vocab: {
        n5: [
            { emoji: "🛍️", es: "Tienda", ja: "mise" },
            { emoji: "💰", es: "Dinero", ja: "okane" },
            { emoji: "💳", es: "Tarjeta de crédito", ja: "kurejitto kādo" },
            { emoji: "🏷️", es: "Precio", ja: "nedan" },
            { emoji: "👕", es: "Ropa", ja: "fuku" },
            { emoji: "👟", es: "Zapatos", ja: "kutsu" },
            { emoji: "📏", es: "Talla", ja: "saizu" },
            { emoji: "👛", es: "Bolsa", ja: "kaban" }
        ],
        n4: [
            { emoji: "🍎", es: "Manzana", ja: "ringo" },
            { emoji: "🍊", es: "Naranja", ja: "mikan" },
            { emoji: "🍞", es: "Pan", ja: "pan" },
            { emoji: "🥛", es: "Leche", ja: "gyūnyū" },
            { emoji: "🥚", es: "Huevo", ja: "tamago" },
            { emoji: "🥩", es: "Carne", ja: "niku" },
            { emoji: "🐟", es: "Pescado", ja: "sakana" },
            { emoji: "🥦", es: "Verduras", ja: "yasai" }
        ],
        n3: [
            { emoji: "🎁", es: "Regalo", ja: "purezento" },
            { emoji: "📦", es: "Paquete", ja: "pakku" },
            { emoji: "🧾", es: "Recibo", ja: "ryōshūsho" },
            { emoji: "🔄", es: "Cambio (devolución)", ja: "henpin" }
        ],
        n2: [
            { emoji: "💎", es: "Joyería", ja: "hōseki" },
            { emoji: "⌚", es: "Reloj", ja: "tokei" },
            { emoji: "📷", es: "Cámara", ja: "kamera" },
            { emoji: "💻", es: "Computadora", ja: "konpyūta" }
        ]
    },
    phrases: [
        {
            title: "Preguntar por Precios",
            items: [
                { es: "¿Cuánto cuesta esto?", ja: "これはいくらですか。", ro: "Kore wa ikura desu ka?" },
                { es: "¿Cuánto es en total?", ja: "全部でいくらですか。", ro: "Zenbu de ikura desu ka?" }
            ]
        },
        {
            title: "Preguntar por Tallas/Colores",
            items: [
                { es: "¿Tienen una talla más grande/pequeña?", ja: "もっと大きい/小さいサイズはありますか。", ro: "Motto ōkii/chiisai saizu wa arimasu ka?" },
                { es: "¿Tienen esto en otro color?", ja: "これは他の色がありますか。", ro: "Kore wa hoka no iro ga arimasu ka?" }
            ]
        },
        {
            title: "Realizar la Compra",
            items: [
                { es: "Lo compro.", ja: "これを買います。", ro: "Kore o kaimasu." },
                { es: "¿Aceptan tarjeta de crédito?", ja: "クレジットカードは使えますか。", ro: "Kurejitto kādo wa tsukaemasu ka?" }
            ]
        },
        {
            title: "Devoluciones/Cambios",
            items: [
                { es: "Quiero devolver esto.", ja: "これを返品したいです。", ro: "Kore o henpin shitai desu." },
                { es: "¿Puedo cambiar esto por otro?", ja: "これを別のものと交換できますか。", ro: "Kore o betsu no mono to kōkan dekimasu ka?" }
            ]
        }
    ],
    quizzes: [
        {
            question: "¿Qué significa 'okane'?",
            options: [
                { text: "Comida", isCorrect: false },
                { text: "Dinero", isCorrect: true },
                { text: "Tienda", isCorrect: false }
            ]
        },
        {
            question: "¿Cómo se dice 'precio' en japonés?",
            options: [
                { text: "Saizu", isCorrect: false },
                { text: "Nedan", isCorrect: true },
                { text: "Fuku", isCorrect: false }
            ]
        }
    ]
};
