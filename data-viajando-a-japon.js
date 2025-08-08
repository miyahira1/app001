const pageData = {
    pageTitle: "Viajando a Japón",
    pageSubtitle: "Frases útiles para el aeropuerto, hotel, transporte y para pedir direcciones.",
    conversationStarters: [
        {
            es: "¿Qué lugar de Japón te gustaría visitar más y por qué?",
            ja: "日本で一番行きたい場所はどこですか。どうして？",
            ro: "Nihon de ichiban ikitai basho wa doko desu ka. Dōshite?"
        },
        {
            es: "¿Cuál es tu experiencia más memorable viajando?",
            ja: "一番思い出に残る旅行の経験は何ですか。",
            ro: "Ichiban omoide ni nokoru ryokō no keiken wa nan desu ka?"
        },
        {
            es: "Si pudieras vivir en Japón, ¿en qué ciudad te gustaría?",
            ja: "もし日本に住むなら、どの都市に住みたいですか。",
            ro: "Moshi Nihon ni sumu nara, dono toshi ni sumitai desu ka?"
        }
    ],
    vocab: {
        n5: [
            { emoji: "✈️", es: "Aeropuerto", ja: "kūkō" },
            { emoji: "🏨", es: "Hotel", ja: "hoteru" },
            { emoji: "🚉", es: "Estación", ja: "eki" },
            { emoji: "🎫", es: "Boleto", ja: "kippu" },
            { emoji: "🗺️", es: "Mapa", ja: "chizu" },
            { emoji: "➡️", es: "Derecha", ja: "migi" },
            { emoji: "⬅️", es: "Izquierda", ja: "hidari" },
            { emoji: "⬆️", es: "Recto", ja: "massugu" }
        ],
        n4: [
            { emoji: "🛄", es: "Equipaje", ja: "nimotsu" },
            { emoji: "🚏", es: "Parada de autobús", ja: "basutei" },
            { emoji: "🚕", es: "Taxi", ja: "takushī" },
            { emoji: "🚶", es: "Caminar", ja: "aruku" }
        ],
        n3: [
            { emoji: "🛂", es: "Pasaporte", ja: "pasupōto" },
            { emoji: "💱", es: "Cambio de moneda", ja: "ryōgae" },
            { emoji: "🚝", es: "Tren bala", ja: "shinkansen" }
        ],
        n2: [
            { emoji: "⛩️", es: "Santuario", ja: "jinja" },
            { emoji: "🏯", es: "Castillo", ja: "shiro" },
            { emoji: "🌸", es: "Flor de cerezo", ja: "sakura" }
        ]
    },
    phrases: [
        {
            title: "En el Aeropuerto",
            items: [
                { es: "¿Dónde está la terminal internacional?", ja: "国際線ターミナルはどこですか。", ro: "Kokusaisen tāminaru wa doko desu ka?" },
                { es: "Tengo una maleta.", ja: "スーツケースを持っています。", ro: "Sūtsukēsu o motte imasu." }
            ]
        },
        {
            title: "En el Hotel",
            items: [
                { es: "Tengo una reserva.", ja: "予約があります。", ro: "Yoyaku ga arimasu." },
                { es: "¿Cuál es la hora de check-out?", ja: "チェックアウトは何時ですか。", ro: "Chekkuauto wa nanji desu ka?" }
            ]
        },
        {
            title: "Transporte",
            items: [
                { es: "¿Cómo llego a la estación de Tokio?", ja: "東京駅にはどう行けばいいですか。", ro: "Tōkyō-eki ni wa dō ikeba ii desu ka?" },
                { es: "¿Cuánto cuesta el boleto?", ja: "切符はいくらですか。", ro: "Kippu wa ikura desu ka?" }
            ]
        },
        {
            title: "Direcciones",
            items: [
                { es: "¿Dónde está el baño?", ja: "トイレはどこですか。", ro: "Toire wa doko desu ka?" },
                { es: "¿Puede repetirlo, por favor?", ja: "もう一度お願いします。", ro: "Mō ichido onegai shimasu." }
            ]
        }
    ],
    quizzes: [
        {
            question: "¿Qué significa 'arigato'?",
            options: [
                { text: "Hola", isCorrect: false },
                { text: "Gracias", isCorrect: true },
                { text: "Adiós", isCorrect: false }
            ]
        },
        {
            question: "¿Cómo se dice 'adiós' en japonés?",
            options: [
                { text: "Kon'nichiwa", isCorrect: false },
                { text: "Sayōnara", isCorrect: true },
                { text: "Ohayō", isCorrect: false }
            ]
        }
    ]
};
