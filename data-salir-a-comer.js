const pageData = {
    pageConversationIntro: "Usa estas preguntas para romper el hielo y practicar tu japonés con otros participantes.",
    pageTitle: "Salir a Comer",
    pageSubtitle: "¡Prepárate para disfrutar, aprender y compartir una buena comida juntos!",
    conversationStarters: [
        {
            es: "¿Cuál es tu comida japonesa favorita y por qué?",
            ja: "好きな和食は何ですか。どうして？",
            ro: "Suki na washoku wa nan desu ka. Dōshite?"
        },
        {
            es: "Si pudieras viajar a cualquier lugar de Japón, ¿a dónde irías?",
            ja: "もし日本旅行ができるなら、どこに行きたいですか。",
            ro: "Moshi Nihon ryokō ga dekiru nara, doko ni ikitai desu ka?"
        },
        {
            es: "¿Qué es lo más sorprendente que has aprendido sobre la cultura japonesa?",
            ja: "日本文化について、一番驚いたことは何ですか。",
            ro: "Nihon bunka ni tsuite, ichiban odoroita koto wa nan desu ka?"
        },
        {
            es: "¿Cuál es tu anime o película japonesa preferida?",
            ja: "一番好きなアニメや日本の映画は何ですか。",
            ro: "Ichiban suki na anime ya Nihon no eiga wa nan desu ka?"
        },
        {
            es: "Si tuvieras que describir tu personalidad con un tipo de sushi, ¿cuál sería?",
            ja: "もし自分の性格を寿司で例えるなら、何ですか。",
            ro: "Moshi jibun no seikaku o sushi de tatoeru nara, nani desu ka?"
        },
        {
            es: "¿Qué sabor de helado japonés te gustaría probar? (matcha, sésamo negro, yuzu, etc.)",
            ja: "どんな日本の変わったアイスを食べてみたいですか。",
            ro: "Donna Nihon no kawatta aisu o tabete mitai desu ka?"
        }
    ],
    vocab: {
        n5: [
            { emoji: "🍽️", es: "Restaurante", ja: "resutoran" },
            { emoji: "📖", es: "Menú", ja: "menyū" },
            { emoji: "💧", es: "Agua", ja: "omizu" },
            { emoji: "🍺", es: "Cerveza", ja: "bīru" },
            { emoji: "🍷", es: "Vino", ja: "wain" },
            { emoji: "🍚", es: "Arroz", ja: "gohan" },
            { emoji: "🍜", es: "Ramen", ja: "rāmen" },
            { emoji: "🍣", es: "Sushi", ja: "sushi" },
            { emoji: "✅", es: "Sí", ja: "hai" },
            { emoji: "❌", es: "No", ja: "iie" },
            { emoji: "🙏", es: "Por favor", ja: "onegai shimasu" },
            { emoji: "😊", es: "Gracias", ja: "arigatō" }
        ],
        n4: [
            { emoji: "🌶️", es: "Picante", ja: "karai" },
            { emoji: "🍬", es: "Dulce", ja: "amai" },
            { emoji: "🧂", es: "Salado", ja: "shoppai" },
            { emoji: "酸っぱい", es: "Ácido", ja: "suppai" },
            { emoji: "苦い", es: "Amargo", ja: "nigai" },
            { emoji: "熱い", es: "Caliente", ja: "atsui" },
            { emoji: "冷たい", es: "Frío", ja: "tsumetai" },
            { emoji: "注文", es: "Ordenar", ja: "chūmon suru" }
        ],
        n3: [
            { emoji: "🧑‍🍳", es: "Chef", ja: "shefu" },
            { emoji: "💁", es: "Mesero/a", ja: "ueitā/ueitoresu" },
            { emoji: "💵", es: "Cuenta", ja: "okaikei" },
            { emoji: "予約", es: "Reservación", ja: "yoyaku" },
            { emoji: "席", es: "Asiento", ja: "seki" },
            { emoji: "禁煙席", es: "Asiento de no fumar", ja: "kin'en seki" },
            { emoji: "喫煙席", es: "Asiento de fumar", ja: "kitsuen seki" },
            { emoji: "個室", es: "Habitación privada", ja: "koshitsu" }
        ],
        n2: [
            { emoji: "アレルギー", es: "Alergia", ja: "arerugī" },
            { emoji: "材料", es: "Ingredientes", ja: "zairyō" },
            { emoji: "調理法", es: "Método de cocina", ja: "chōri-hō" },
            { emoji: "おかわり", es: "Repetir", ja: "okawari" },
            { emoji: "持ち帰り", es: "Para llevar", ja: "mochikaeri" },
            { emoji: "領収書", es: "Recibo", ja: "ryōshūsho" }
        ]
    },
    phrases: [
        {
            title: "Reservaciones",
            items: [
                { es: "¿Puedo hacer una reservación?", ja: "予約をお願いします", ro: "Yoyaku o onegai shimasu" },
                { es: "Para dos personas, por favor.", ja: "二人です", ro: "Futari desu" }
            ]
        },
        {
            title: "Al Llegar",
            items: [
                { es: "Tengo una reservación a nombre de [Tu Nombre].", ja: "[Tu Nombre]で予約しています", ro: "[Tu Nombre] de yoyaku shiteimasu" },
                { es: "¿Tienen mesa para dos?", ja: "二人用の席はありますか", ro: "Futari-yō no seki wa arimasu ka" }
            ]
        },
        {
            title: "Al Ordenar",
            items: [
                { es: "¿Me puede dar el menú, por favor?", ja: "メニューをください", ro: "Menyū o kudasai" },
                { es: "¿Qué recomienda?", ja: "おすすめは何ですか", ro: "Osusume wa nan desu ka" },
                { es: "Voy a ordenar esto.", ja: "これをお願いします", ro: "Kore o onegai shimasu" },
                { es: "Agua, por favor.", ja: "お水をください", ro: "Omizu o kudasai" }
            ]
        },
        {
            title: "Durante la Comida",
            items: [
                { es: "¡Está delicioso!", ja: "美味しいです", ro: "Oishii desu" },
                { es: "Disculpe.", ja: "すみません", ro: "Sumimasen" }
            ]
        },
        {
            title: "Al Pagar",
            items: [
                { es: "La cuenta, por favor.", ja: "お会計をお願いします", ro: "Okaikei o onegai shimasu" },
                { es: "¿Aceptan tarjeta de crédito?", ja: "クレジットカードは使えますか", ro: "Kurejitto kādo wa tsukaemasu ka" }
            ]
        }
    ],
    quizzes: [
        {
            question: "¿Cuál es la capital de Japón? (日本の首都はどこですか。)",
            options: [
                { text: "Kioto (京都)", isCorrect: false },
                { text: "Tokio (東京)", isCorrect: true },
                { text: "Osaka (大阪)", isCorrect: false }
            ]
        },
        {
            question: "¿Qué significa \"sushi\"? (「寿司」の意味は何ですか。)",
            options: [
                { text: "Arroz avinagrado (酢飯)", isCorrect: true },
                { text: "Pescado crudo (生の魚)", isCorrect: false },
                { text: "Alga marina (海苔)", isCorrect: false }
            ]
        },
        {
            question: "¿Cuál es la moneda de Japón? (日本の通貨は何ですか。)",
            options: [
                { text: "Yuan (元)", isCorrect: false },
                { text: "Won (ウォン)", isCorrect: false },
                { text: "Yen (円)", isCorrect: true }
            ]
        }
    ]
};