const pageData = {
    pageTitle: "Japonés para el Trabajo",
    pageSubtitle: "Vocabulario y expresiones clave para reuniones, correos y conversaciones de oficina.",
    conversationStarters: [
        {
            es: "¿Cuál es tu trabajo soñado en Japón?",
            ja: "日本での夢の仕事は何ですか。",
            ro: "Nihon de no yume no shigoto wa nan desu ka?"
        },
        {
            es: "¿Qué te parece más interesante de la cultura laboral japonesa?",
            ja: "日本の労働文化で一番面白いと思うことは何ですか。",
            ro: "Nihon no rōdō bunka de ichiban omoshiroi to omou koto wa nan desu ka?"
        },
        {
            es: "Si pudieras tener una habilidad laboral japonesa, ¿cuál sería?",
            ja: "もし日本の仕事のスキルを一つ持てるなら、何がいいですか。",
            ro: "Moshi Nihon no shigoto no sukiru o hitotsu moteru nara, nani ga ii desu ka?"
        }
    ],
    vocab: {
        n5: [
            { emoji: "🏢", es: "Empresa", ja: "kaisha" },
            { emoji: "💼", es: "Trabajo", ja: "shigoto" },
            { emoji: "🧑‍💻", es: "Empleado", ja: "shain" },
            { emoji: "🤝", es: "Reunión", ja: "kaigi" },
            { emoji: "📧", es: "Correo electrónico", ja: "mēru" },
            { emoji: "📞", es: "Llamada telefónica", ja: "denwa" },
            { emoji: "🖥️", es: "Computadora", ja: "konpyūta" },
            { emoji: "🗂️", es: "Archivo", ja: "fōruda" },
            { emoji: "🖊️", es: "Bolígrafo", ja: "bōrupen" },
            { emoji: "📅", es: "Calendario", ja: "karendā" },
            { emoji: "📋", es: "Lista", ja: "risuto" },
            { emoji: "📎", es: "Clip", ja: "kurippu" },
            { emoji: "📌", es: "Chinche", ja: "pushpin" },
            { emoji: "🗒️", es: "Notas", ja: "memō" },
            { emoji: "📐", es: "Regla", ja: "jōgi" },
            { emoji: "🖨️", es: "Impresora", ja: "purintā" }
        ],
        n4: [
            { emoji: "📝", es: "Documento", ja: "shorui" },
            { emoji: "📊", es: "Presentación", ja: "purezentēshon" },
            { emoji: "🗓️", es: "Horario", ja: "sukejūru" },
            { emoji: "⏰", es: "Hora extra", ja: "zangyō" },
            { emoji: "📈", es: "Gráfica", ja: "gurafu" },
            { emoji: "📉", es: "Descenso", ja: "gesui" },
            { emoji: "📃", es: "Informe", ja: "hōkoku" },
            { emoji: "📑", es: "Separador", ja: "shiori" },
            { emoji: "📚", es: "Libros", ja: "hon" },
            { emoji: "📓", es: "Cuaderno", ja: "nōto" },
            { emoji: "📏", es: "Regla", ja: "jōgi" },
            { emoji: "📜", es: "Pergamino", ja: "makimono" },
            { emoji: "📖", es: "Manual", ja: "manyuaru" },
            { emoji: "📥", es: "Entrada", ja: "nyūryoku" },
            { emoji: "📤", es: "Salida", ja: "shutsuryoku" },
            { emoji: "📦", es: "Paquete", ja: "pakku" }
        ],
        n3: [
            { emoji: "📈", es: "Reporte", ja: "hōkokusho" },
            { emoji: "🗣️", es: "Negociación", ja: "kōshō" },
            { emoji: "💡", es: "Idea", ja: "aidea" },
            { emoji: "✅", es: "Aprobación", ja: "shōnin" },
            { emoji: "🧑‍💼", es: "Jefe", ja: "tantōsha" },
            { emoji: "🧑‍💻", es: "Programador", ja: "puroguramā" },
            { emoji: "🧑‍🔬", es: "Investigador", ja: "kenkyūsha" },
            { emoji: "🧑‍🏫", es: "Instructor", ja: "kyōshi" },
            { emoji: "🧑‍🎓", es: "Aprendiz", ja: "manabite" },
            { emoji: "🧑‍⚖️", es: "Supervisor", ja: "kantoku" },
            { emoji: "🧑‍🚀", es: "Líder", ja: "rīdā" },
            { emoji: "🧑‍✈️", es: "Coordinador", ja: "kōdinētā" },
            { emoji: "🧑‍🔧", es: "Técnico", ja: "gijutsusha" },
            { emoji: "🧑‍🎤", es: "Presentador", ja: "purezenta" },
            { emoji: "🧑‍🌾", es: "Consultor", ja: "konsarutanto" },
            { emoji: "🧑‍🍳", es: "Asistente", ja: "asisutanto" }
        ],
        n2: [
            { emoji: "🎯", es: "Objetivo", ja: "mokuhyō" },
            { emoji: "🧑‍💼", es: "Gerente", ja: "buchō" },
            { emoji: "🧑‍💼", es: "Director", ja: "torishimariyaku" },
            { emoji: "✉️", es: "Confidencial", ja: "himitsu" },
            { emoji: "🧑‍⚕️", es: "Recursos Humanos", ja: "jinji" },
            { emoji: "🧑‍🔬", es: "Científico", ja: "kagakusha" },
            { emoji: "🧑‍🏫", es: "Capacitador", ja: "kyōikuin" },
            { emoji: "🧑‍🎓", es: "Becario", ja: "shūgakusei" },
            { emoji: "🧑‍⚖️", es: "Auditor", ja: "kansa" },
            { emoji: "🧑‍🚀", es: "Innovador", ja: "kakushinsha" },
            { emoji: "🧑‍✈️", es: "Ejecutivo", ja: "jikkōyaku" },
            { emoji: "🧑‍🔧", es: "Especialista", ja: "senmonka" },
            { emoji: "🧑‍🎤", es: "Orador", ja: "kōensha" },
            { emoji: "🧑‍🌾", es: "Consultor", ja: "konsarutanto" },
            { emoji: "🧑‍🍳", es: "Asistente", ja: "asisutanto" },
            { emoji: "🧑‍💻", es: "Analista", ja: "anarisuto" }
        ]
    },
    phrases: [
        {
            title: "Saludos y Presentaciones",
            items: [
                { es: "Buenos días (en la oficina)", ja: "おはようございます", ro: "Ohayō gozaimasu" },
                { es: "Gracias por su arduo trabajo.", ja: "お疲れ様です", ro: "Otsukaresama desu" }
            ]
        },
        {
            title: "En Reuniones",
            items: [
                { es: "Comencemos la reunión.", ja: "会議を始めましょう", ro: "Kaigi o hajimemashō." },
                { es: "Tengo una pregunta.", ja: "質問があります", ro: "Shitsumon ga arimasu." }
            ]
        },
        {
            title: "Correos y Comunicación",
            items: [
                { es: "Adjunto el documento.", ja: "資料を添付しました", ro: "Shiryō o tenpu shimashita." },
                { es: "Por favor, revise esto.", ja: "これをご確認ください", ro: "Kore o go-kakunin kudasai." }
            ]
        },
        {
            title: "Solicitudes y Permisos",
            items: [
                { es: "¿Podría ayudarme?", ja: "手伝っていただけませんか", ro: "Tetsudatte itadakemasen ka?" },
                { es: "Permiso para salir temprano.", ja: "早退してもよろしいですか", ro: "Sōtai shite mo yoroshii desu ka?" }
            ]
        }
    ],
    quizzes: [
        {
            question: "¿Qué significa 'kaisha'?",
            options: [
                { text: "Escuela", isCorrect: false },
                { text: "Empresa", isCorrect: true },
                { text: "Casa", isCorrect: false }
            ]
        },
        {
            question: "¿Cómo se dice 'reunión' en japonés?",
            options: [
                { text: "Shigoto", isCorrect: false },
                { text: "Kaigi", isCorrect: true },
                { text: "Denwa", isCorrect: false }
            ]
        }
    ]
};